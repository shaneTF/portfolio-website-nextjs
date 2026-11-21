import Projects from "@/components/projects/get-projects";

export const dynamic = "force-dynamic";

export default function Page() {
  return (
    <div>
      <div>
        <Projects params={{ username: "shaneTF" }} />
      </div>
    </div>
  );
}
