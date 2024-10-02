import Select from "@/components/Select";

export default function Home() {
  return (
    <div className="">
      <main className="">
        <Select label='Seleccionar'
        options={[
          { value: '1', label: 'Montserrat Delgado', icon: {name: "UserCircleIcon"} },
          { value: '2', label: 'Guillermo Chiw', icon: {name: "UserCircleIcon"} },
          { value: '3', label: 'Dayra Coronado', icon: {name: "UserCircleIcon"} },
          { value: '4', label: 'Alejandro Alvarez', icon: {name: "UserCircleIcon"} },
        ]}
      />
      </main>
    </div>
  );
}
