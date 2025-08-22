import Image from 'next/image';

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 bg-white">
      <Image src="/icons/logo.svg" alt="다람쥐 로고" width={120} height={40} />

      <div className="flex items-center space-x-4 cursor-pointer transition-all duration-200 hover:color-blue-800">
        <Image src="/icons/bell.svg" alt="알림" width={24} height={24} />
        <Image src="/icons/human.svg" alt="프로필" width={32} height={32} />
      </div>
    </header>
  );
}