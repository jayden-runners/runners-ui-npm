import { Button, Card, Input } from "@/stories"
import Header from "./_components/header"
import HeaderFooterWrapper from "./_components/header-footer-wrapper"
import { CalendarIcon } from "@/public/icons"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeaderFooterWrapper>
          여기서 테스트
          <Card>
            <Input placeholder="test1" size="32" className="w-full" />
            <Input placeholder="test1" size="40" />
            <Input placeholder="test1" size="48" />
            <Input placeholder="test1" size="32" disabled />
            <Input placeholder="test1" size="40" disabled />
            <Input
              placeholder="test1"
              size="48"
              disabled
              suffix={<CalendarIcon className="size-6" />}
            />

            <Button loading>Submit</Button>
          </Card>
        </HeaderFooterWrapper>
      </main>
    </>
  )
}
