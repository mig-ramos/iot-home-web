import { NewCustomerForm } from "@/components/admin/customer/newCustomerForm";
import { Container } from "@/components/container";
import Link from "next/link";
import { canSSRAuth } from "data/utils/canRAuth";

export default function NewCustomer() {
  return (
    <Container>
      <main className="flex flex-col mt-9 mb-2">
        <div className="flex items-center gap-3">
          <Link
            href="/dashboard/customer"
            className="bg-gray-900 px-4 py-1 text-white rounded"
          >
            Voltar
          </Link>
          <h1 className="text-3xl font-bold">Novo cliente</h1>
        </div>
        <NewCustomerForm />
      </main>
    </Container>
  );
}

export const getServerSideProps = canSSRAuth(async (ctx) => {
  return {
    props: {},
  };
});
