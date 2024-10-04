import Select from "@/components/Select";
export default function Home() {
    return (<div>
      <main className="p-20">
        <Select label='Seleccionar' options={[
            { value: '1', label: 'Montserrat Delgado', icon: { name: "UserCircleIcon" } },
            { value: '2', label: 'Guillermo Chiw', icon: { name: "UserCircleIcon" } },
            { value: '3', label: 'Dayra Coronado', icon: { name: "UserCircleIcon" } },
            { value: '4', label: 'Alejandro Alvarez', icon: { name: "UserCircleIcon" } },
            { value: '5', label: 'Andres De la Cruz', icon: { name: "UserCircleIcon" } },
            { value: '6', label: 'Mariana Cornejo', icon: { name: "UserCircleIcon" } },
        ]} isSearched helperText="Example helper Text"/>
      </main>
    </div>);
}
