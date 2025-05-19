import LayoutPrivate from "@/components/admin/layoutPrivate";
import { Container } from "@/components/public/container";
import { canSSRAuth } from "data/utils/canRAuth";
import Head from "next/head";
import React, { useState, useEffect, useContext } from "react";
import useWebSocket from "react-use-websocket";

const WS_URL = "ws://localhost:3001";

export default function Dashboard() {
  const [events, setEvents] = useState<any>([]);

  const { lastMessage } = useWebSocket(WS_URL, {
    shouldReconnect: () => true,
  });

  useEffect(() => {
    if (lastMessage !== null) {
      try {
        const newEvent = JSON.parse(lastMessage.data);
        setEvents((prevEvents: any) => [...prevEvents, newEvent]);
      } catch (error) {
        console.error("Erro ao processar mensagem:", error);
      }
    }
  }, [lastMessage]);
  return (
    <div>
      <Head>
        <title>Meu Painel</title>
        <meta name="description" content="Painel de Administração" />
      </Head>
      <LayoutPrivate>
        <Container>
          <h2 className="border-t-2 border-2 rounded-xl border-green-500 mt-2 px-4 py-1">
            Eventos em Tempo Real
          </h2>
          <ol className="mt-2">
            {events.map((event: any, index: any) => (
              <li className="py-1" key={index}>
                <strong>Status:</strong>{" "}
                <span className="text-red-500">{event.status} - </span>
                <strong>Description:</strong> {event.description} -{" "}
                <strong>Qdo:</strong> {event.createdAt} -{" "}
                <strong>Sensor:</strong> {event.sensor_id}
              </li>
            ))}
          </ol>
        </Container>
      </LayoutPrivate>
    </div>
  );
}

export const getServerSideProps = canSSRAuth(async (ctx) => {
  return {
    props: {},
  };
});
