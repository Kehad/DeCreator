import { redirect } from "next/navigation";
import { PATH } from "@/constants/path";

export default function DashboardPage() {
    redirect(PATH.movieDetails);
}
