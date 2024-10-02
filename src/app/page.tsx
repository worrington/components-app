import Select from "@/components/Select";

export default function Home() {
  return (
    <div className="">
      <main className="">
        <Select label='Seleccionar'
        options={[
          {
            label: 'value 2',
            value: '2',
          },
          {
            label: 'value 3',
            value: '3',
          },
          {
            label: 'value 1',
            value: '1'
          },
          {
            label: 'value 4',
            value: '4'
          },
          {
            label: 'value 6',
            value: '6'
          },
          {
            label: 'value 5',
            value: '5'
          },
        ]}
      />
      </main>
    </div>
  );
}
