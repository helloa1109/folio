export interface InfoItem {
    id: number;
    imageUrl: string;
    title: string;
    description: string;
}
export const infoData: InfoItem[] = [
    {
        id: 1,
        imageUrl: 'https://picsum.photos/seed/1/400/300',
        title: '끊임없는 학습',
        description: '새로운 기술과 트렌드를 지속적으로 학습하여 서비스에 적용하는 것을 즐깁니다.',
    },
    {
        id: 2,
        imageUrl: 'https://picsum.photos/seed/2/400/300',
        title: '협업과 소통',
        description: '동료들과의 원활한 소통을 중요하게 생각하며, 함께 성장하는 환경을 추구합니다.',
    },
    {
        id: 3,
        imageUrl: 'https://picsum.photos/seed/3/400/300',
        title: '견고한 코드',
        description: '유지보수가 용이하고 확장 가능한 클린 코드를 작성하기 위해 항상 노력합니다.',
    },
];