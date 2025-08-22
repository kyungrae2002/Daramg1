import Image from 'next/image';
import Header from '@/components/Header.jsx'; // 방금 만든 헤더 컴포넌트

const menuItems = [
  {
    icon: '/icons/message.svg',
    title: '작곡가별 토크룸',
    description: '같은 작곡가를 사랑하는 사람들과 공감을 나누는 공간',
  },
  {
    icon: '/icons/music.svg',
    title: '다람쥐의 큐레이션',
    description: '나만의 이야기와 위로를 담아 클래식을 추천하는 공간',
  },
  {
    icon: '/icons/talkIcon.svg',
    title: '자유 토크룸',
    description: '클래식에 대한 자유로운 이야기와 소통의 공간',
  },
];

export default function HomePage() {
  return (
    <div className="max-w-md w-full mx-auto">
      {/* 2. <main> (흰색 배경 판) */}
      <main className="min-h-screen bg-white shadow-lg">
        <Header />
        
        {/* 3. div (안쪽 여백) */}
        <div className="p-4">
        
          {/* 4. div (카드들을 담는 투명한 정리 상자) */}
          <div className="space-y-6">
          
            {/* 5. 카드들 */}
            <div className="w-full h-48 bg-gray-200 rounded-2xl flex items-center justify-center text-gray-400 font-semibold">
              IMAGE
            </div>
            
            <div className="flex items-center p-5 bg-gray-50 rounded-2xl cursor-pointer transition-all duration-200 hover:shadow-lg hover:-translate-y-1">
              <Image src={menuItems[0].icon} alt={menuItems[0].title} width={40} height={40} />
              <div className="ml-4 flex-grow">
                <h2 className="font-bold text-lg text-gray-400 transition-colors duration-200 hover:text-blue-800">{menuItems[0].title}</h2>
                <p className="text-sm text-gray-500">{menuItems[0].description}</p>
              </div>
              <span className="text-gray-400">&gt;</span>
            </div>
            
            <div className="flex items-center p-5 bg-gray-50 rounded-2xl cursor-pointer transition-all duration-200 hover:shadow-lg hover:-translate-y-1">
              <Image src={menuItems[1].icon} alt={menuItems[1].title} width={40} height={40} />
              <div className="ml-4 flex-grow">
                <h2 className="font-bold text-lg text-gray-400 transition-colors duration-200 hover:text-blue-800">{menuItems[1].title}</h2>
                <p className="text-sm text-gray-500">{menuItems[1].description}</p>
              </div>
              <span className="text-gray-400">&gt;</span>
            </div>
            
            <div className="flex items-center p-5 bg-gray-50 rounded-2xl cursor-pointer transition-all duration-200 hover:shadow-lg hover:-translate-y-1">
              <Image src={menuItems[2].icon} alt={menuItems[2].title} width={40} height={40} />
              <div className="ml-4 flex-grow">
                <h2 className="font-bold text-lg text-gray-400 transition-colors duration-200 hover:text-blue-800">{menuItems[2].title}</h2>
                <p className="text-sm text-gray-500">{menuItems[2].description}</p>
              </div>
              <span className="text-gray-400">&gt;</span>
            </div>
            
          </div>
        </div>
      </main>
    </div>
  );
}