import Image from 'next/image'
import { Inter } from 'next/font/google'
import Button from "./api/Button";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return <div class="bg-white">
    <Button/>
    <Button disabled={true}/>
  </div>;
}