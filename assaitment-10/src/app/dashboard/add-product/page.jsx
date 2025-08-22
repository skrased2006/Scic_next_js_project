import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import AddProductForm from "./AddProductForm";

export default async function AddProductPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return (
      <div className="text-center py-20">
        <h1 className="text-3xl font-bold mb-4">
          You must be logged in to add a product
        </h1>
        <a href="/login" className="text-blue-600 hover:underline">
          Go to Login
        </a>
      </div>
    );
  }

  return <AddProductForm />; // Client Component here is fine
}
