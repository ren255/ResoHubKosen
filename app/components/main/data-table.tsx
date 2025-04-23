import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table"

type dataProps = {
  datas: {
    id: number
    name: string
    bio: string
    date: string
  }[]
}

export function MyTable(props: dataProps) {
  const { datas } = props;
  return (
    <Table>
      <TableCaption>list if users simple</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">id</TableHead>
          <TableHead>name</TableHead>
          <TableHead>bio</TableHead>
          <TableHead className="text-right">date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {datas.map((data) => (
          <TableRow key={data.id}>
            <TableCell className="font-medium">{data.id}</TableCell>
            <TableCell>{data.name}</TableCell>
            <TableCell>{data.bio}</TableCell>
            <TableCell className="text-right">{data.date}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>合計人数</TableCell>
          <TableCell className="text-right">x人</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  )
}
