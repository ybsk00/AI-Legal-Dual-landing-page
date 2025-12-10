"use client"

import { ConsultationForm } from "@/components/consultation-form"
import { GeminiChat } from "@/components/gemini-chat"
import {
  TrendingUp,
  Target,
  Zap,
  Lock,
  AlertCircle,
  Users,
  Megaphone,
  RepeatIcon,
  ShieldCheck,
  Clock,
} from "lucide-react"
import { useEffect } from "react"
import { sendMetaConversionEvent, getMetaBrowserId, getMetaClickId } from "@/lib/meta-conversion"
import { Container, Title, Text, Button, Badge, SimpleGrid, Card, ThemeIcon, Stack, Group, List, AspectRatio, Image } from "@mantine/core"

export default function Home() {
  useEffect(() => {
    const sendViewContentEvent = async () => {
      try {
        await sendMetaConversionEvent({
          eventName: "ViewContent",
          eventSourceUrl: window.location.href,
          userAgent: navigator.userAgent,
          fbp: getMetaBrowserId() ?? undefined,
          fbc: getMetaClickId() ?? undefined,
        })
        console.log("[v0] Meta Conversions API ViewContent event sent")
      } catch (error) {
        console.error("[v0] Meta Conversions API ViewContent error:", error)
      }
    }

    sendViewContentEvent()
  }, [])

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden border-b">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/2.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <Container size="xl" className="relative z-10 py-20 md:py-32 text-white">
          <Stack align="center" gap="xl" className="text-center max-w-5xl mx-auto">
            <Badge
              size="xl"
              variant="gradient"
              gradient={{ from: 'indigo', to: 'cyan' }}
              className="px-6 py-4 text-lg font-medium backdrop-blur-sm"
            >
              <Group gap="xs">
                <Zap className="w-5 h-5" />
                <span>AI 시대 로펌 마케팅 전환</span>
              </Group>
            </Badge>

            <Title order={1} className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance leading-tight py-2 drop-shadow-lg break-keep text-white">
              사람들은 이제 검색이 아니라
              <br />
              <Text span inherit variant="gradient" gradient={{ from: 'blue.2', to: 'cyan.2' }}>AI에게 먼저 묻고</Text> 변호사를 고릅니다
            </Title>

            <Text size="xl" className="text-white/90 text-balance max-w-3xl mx-auto leading-relaxed drop-shadow-md break-keep">
              블로그·지식인 중심 마케팅은 끝났습니다.
              <br />
              “AI에게 먼저 물어보는” 이 대화를
              <br />
              우리 로펌 전용 AI 퍼널로 가져오는 시스템입니다.
            </Text>

            <Stack align="center" gap="md" pt="md">
              <Button
                size="xl"
                radius="xl"
                variant="gradient"
                gradient={{ from: 'blue', to: 'cyan' }}
                onClick={() => document.getElementById('consultation-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 h-16 text-lg font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all"
              >
                무료 컨설팅 신청하기
              </Button>
              <Text size="sm" className="font-medium text-white/80 drop-shadow-sm break-keep">
                AI가 먼저 신뢰를 만들고, 로펌은 정리된 사건만 상담합니다.
              </Text>
            </Stack>

            <SimpleGrid cols={{ base: 1, md: 3 }} spacing="lg" className="pt-12 w-full text-left">
              <Card padding="lg" radius="md" className="bg-black/40 backdrop-blur-md border-white/10 hover:bg-black/50 transition-colors">
                <Stack gap="xs">
                  <Group gap="xs" className="text-white">
                    <ThemeIcon variant="light" color="cyan" radius="xl">
                      <TrendingUp className="w-4 h-4" />
                    </ThemeIcon>
                    <Text fw={700} size="lg">변화된 사용자 행동</Text>
                  </Group>
                  <Text size="sm" className="text-white/80 break-keep">
                    검색 → AI 대화 → 변호사 선택
                    <br />
                    이미 사용자 행동은 이렇게 바뀌었습니다.
                  </Text>
                </Stack>
              </Card>

              <Card padding="lg" radius="md" className="bg-black/40 backdrop-blur-md border-white/10 hover:bg-black/50 transition-colors">
                <Stack gap="xs">
                  <Group gap="xs" className="text-white">
                    <ThemeIcon variant="light" color="cyan" radius="xl">
                      <Target className="w-4 h-4" />
                    </ThemeIcon>
                    <Text fw={700} size="lg">로펌 전용 AI의 역할</Text>
                  </Group>
                  <Text size="sm" className="text-white/80 break-keep">
                    AI가 의뢰인의 말을 듣고, 정보를 정리하고, 신뢰를 만듭니다. 이 역할을 플랫폼이 아닌 우리 로펌의 AI가 해야 합니다.
                  </Text>
                </Stack>
              </Card>

              <Card padding="lg" radius="md" className="bg-black/40 backdrop-blur-md border-white/10 hover:bg-black/50 transition-colors">
                <Stack gap="xs">
                  <Group gap="xs" className="text-white">
                    <ThemeIcon variant="light" color="cyan" radius="xl">
                      <Zap className="w-4 h-4" />
                    </ThemeIcon>
                    <Text fw={700} size="lg">AI 법률 2중 퍼널</Text>
                  </Group>
                  <Text size="sm" className="text-white/80 break-keep">
                    익명 상담 AI로 유입을 모으고,
                    <br />
                    로그인 사건정리 AI로 상담·수임까지 자동 연결합니다.
                  </Text>
                </Stack>
              </Card>
            </SimpleGrid>
          </Stack>
        </Container>
      </section>

      {/* Problem Section */}
      {/* Problem Section */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-slate-50 to-white">
        <Container size="xl">
          <Stack align="center" gap="xl" mb={64} className="text-center">
            <Title order={2} className="text-3xl md:text-4xl font-bold break-keep">
              블로그·검색광고만으로는
              <br />
              이제 고가치 사건이 모이지 않습니다
            </Title>
            <Text size="xl" c="dimmed" className="max-w-3xl mx-auto break-keep">
              의뢰인은 글을 읽지 않고, AI에게 자신의 사정을 털어놓습니다.
              <br />
              그런데 그 대화의 주인공은 우리 로펌이 아니라 남의 AI입니다.
            </Text>
          </Stack>

          <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mb={96}>
            <Card padding="xl" radius="md" withBorder shadow="sm">
              <Stack align="start" gap="md">
                <ThemeIcon size={48} radius="xl" color="red" variant="light">
                  <AlertCircle className="w-6 h-6" />
                </ThemeIcon>
                <Title order={3} size="h4">1. 블로그/검색광고의 한계</Title>
                <List spacing="sm" size="sm" center icon={<ThemeIcon color="gray" size={6} radius="xl"><span /></ThemeIcon>}>
                  <List.Item>검색량은 많지만 실질적 자문 불가능</List.Item>
                  <List.Item>상담 전 정보 부족으로 낮은 전환율</List.Item>
                  <List.Item>치열한 경쟁으로 클릭 단가만 상승</List.Item>
                </List>
              </Stack>
            </Card>

            <Card padding="xl" radius="md" withBorder shadow="sm">
              <Stack align="start" gap="md">
                <ThemeIcon size={48} radius="xl" color="orange" variant="light">
                  <Lock className="w-6 h-6" />
                </ThemeIcon>
                <Title order={3} size="h4">2. 광고 규제 문제</Title>
                <List spacing="sm" size="sm" center icon={<ThemeIcon color="gray" size={6} radius="xl"><span /></ThemeIcon>}>
                  <List.Item>"승소율", "최고" 등 표현 금지</List.Item>
                  <List.Item>화려한 카피 불가로 광고 효율 한계</List.Item>
                  <List.Item>변호사 직접 추천·선정 금지</List.Item>
                </List>
              </Stack>
            </Card>

            <Card padding="xl" radius="md" withBorder shadow="sm">
              <Stack align="start" gap="md">
                <ThemeIcon size={48} radius="xl" color="yellow" variant="light">
                  <Clock className="w-6 h-6" />
                </ThemeIcon>
                <Title order={3} size="h4">3. 상담 전 소모적 비용</Title>
                <List spacing="sm" size="sm" center icon={<ThemeIcon color="gray" size={6} radius="xl"><span /></ThemeIcon>}>
                  <List.Item>의뢰인의 낮은 사건 설명 능력</List.Item>
                  <List.Item>사실관계 파악에 상담 시간 70% 소모</List.Item>
                  <List.Item>단순 문의 폭증으로 응대 피로도 증가</List.Item>
                </List>
              </Stack>
            </Card>
          </SimpleGrid>

          {/* Solution Section - AI Dual Funnel */}
          <Stack align="center" gap="xl" mb={64} className="text-center">
            <Title order={2} className="text-3xl md:text-4xl font-bold break-keep">
              “검색 → AI 대화 → 변호사 선택”
              <br />
              이 흐름을 우리 로펌 퍼널로 바꿉니다
            </Title>
            <Text size="lg" c="dimmed" className="max-w-3xl mx-auto font-medium break-keep">
              AI가 먼저 듣고 정리하고 넘겨주는, 로펌 전용 2단계 퍼널입니다.
            </Text>
          </Stack>

          <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl" mb={128}>
            {/* L1 Funnel */}
            <Card padding="xl" radius="lg" withBorder shadow="md" className="border-primary/20">
              <Stack gap="md">
                <Group>
                  <ThemeIcon size={48} radius="xl" variant="light">
                    <Megaphone className="w-6 h-6" />
                  </ThemeIcon>
                  <Title order={3}>퍼널 1 (L1)</Title>
                </Group>
                <Text size="lg" fw={500} c="dimmed">익명 생활법률 AI가 가볍게 대화를 시작하고 신뢰를 형성</Text>
                <List spacing="sm" icon={<ThemeIcon color="yellow" size={20} radius="xl"><Zap size={12} /></ThemeIcon>}>
                  <List.Item>AI 사건 유형 자동 분류 (회생, 형사, 이혼 등)</List.Item>
                  <List.Item>필요한 자료 및 기본 체크리스트 제공</List.Item>
                  <List.Item icon={<ThemeIcon color="green" size={20} radius="xl"><ShieldCheck size={12} /></ThemeIcon>}>
                    판단, 승소, 전략 미제공 (규제 완전 준수)
                  </List.Item>
                </List>
              </Stack>
            </Card>

            {/* L2 Funnel */}
            <Card padding="xl" radius="lg" withBorder shadow="md" className="border-primary/20">
              <Stack gap="md">
                <Group>
                  <ThemeIcon size={48} radius="xl" variant="light">
                    <ShieldCheck className="w-6 h-6" />
                  </ThemeIcon>
                  <Title order={3}>퍼널 2 (L2)</Title>
                </Group>
                <Text size="lg" fw={500} c="dimmed">로그인 사건정리 AI가 정보를 구조화하고 상담·예약까지 연결</Text>
                <List spacing="sm" icon={<ThemeIcon color="blue" size={20} radius="xl"><Zap size={12} /></ThemeIcon>}>
                  <List.Item>AI가 사실관계를 JSON 구조화하여 정리</List.Item>
                  <List.Item>"정리된 사건 개요" 및 타임라인 자동 생성</List.Item>
                  <List.Item icon={<ThemeIcon color="green" size={20} radius="xl"><ShieldCheck size={12} /></ThemeIcon>}>
                    사무실 단일 CRM으로 전달 (변호사법 준수)
                  </List.Item>
                </List>
              </Stack>
            </Card>
          </SimpleGrid>

          {/* Advantages Section */}
          <Card padding={48} radius="xl" className="bg-gradient-to-br from-slate-100 to-slate-50">
            <Stack align="center" gap="xl" mb={48} className="text-center">
              <Title order={3} className="text-3xl md:text-4xl font-bold break-keep">
                AI가 신뢰를 만들고,
                <br />
                변호사는 정리된 사건만 보면 됩니다
              </Title>
            </Stack>

            <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl">
              <Card padding="xl" radius="md" withBorder>
                <Stack gap="md">
                  <Group>
                    <ThemeIcon color="red" variant="light" size="lg"><TrendingUp size={20} /></ThemeIcon>
                    <Text fw={700} size="lg">압도적 전환율</Text>
                  </Group>
                  <Text size="sm" c="dimmed">
                    같은 광고비로도 상담 전환율 3~10배까지 노려볼 수 있는 구조
                  </Text>
                </Stack>
              </Card>
              <Card padding="xl" radius="md" withBorder>
                <Stack gap="md">
                  <Group>
                    <ThemeIcon color="blue" variant="light" size="lg"><Target size={20} /></ThemeIcon>
                    <Text fw={700} size="lg">AI 초진 처리</Text>
                  </Group>
                  <Text size="sm" c="dimmed">
                    초진·기초 질문은 AI가 처리하고, 의뢰인의 정보를 체계적으로 정리합니다.
                  </Text>
                </Stack>
              </Card>
              <Card padding="xl" radius="md" withBorder>
                <Stack gap="md">
                  <Group>
                    <ThemeIcon color="yellow" variant="light" size="lg"><Zap size={20} /></ThemeIcon>
                    <Text fw={700} size="lg">핵심 업무 집중</Text>
                  </Group>
                  <Text size="sm" c="dimmed">
                    변호사는 판단·전략·협상 등 본질적인 고부가가치 업무에만 집중할 수 있습니다.
                  </Text>
                </Stack>
              </Card>
            </SimpleGrid>
          </Card>
        </Container>
      </section>

      {/* Necessity Section */}
      {/* Necessity Section */}
      <section className="py-24 bg-white border-t">
        <Container size="xl">
          <Stack align="center" gap="xl" mb={64} className="text-center">
            <Title order={2} className="text-3xl md:text-4xl font-bold break-keep">
              “AI와 먼저 대화한 의뢰인”을
              <br />
              잡는 로펌과 놓치는 로펌
            </Title>
            <Stack gap="xs">
              <Text size="xl" c="dimmed" className="break-keep">
                이미 의뢰인의 머릿속 흐름은
                <br />
                <Text span fw={700} c="blue">검색 → AI 상담 → 변호사 선택</Text>으로 바뀌었습니다.
              </Text>
              <Text size="xl" c="dimmed" className="break-keep">
                지금 우리 로펌 전용 AI를 갖추지 않으면,
                <br />
                고가치 사건의 첫 대화는 영원히 남의 시스템에서 시작됩니다.
              </Text>
            </Stack>
          </Stack>

          <Stack gap="lg" maw={1024} mx="auto">
            <Card padding="xl" radius="md" className="bg-slate-50">
              <Group align="start" wrap="nowrap">
                <ThemeIcon size={48} radius="xl" color="blue" variant="light">
                  <Users className="w-6 h-6" />
                </ThemeIcon>
                <div>
                  <Title order={4} size="h3" mb="xs">사건의 90%는 "기초 정보 파악"에서 이탈합니다</Title>
                  <Text c="dimmed">
                    의뢰인은 자신의 문제를 명확히 설명하지 못해 상담 전 이탈합니다. 라이트 AI가 이를 대신 정리해주면 상담 준비도가 폭발적으로 증가합니다.
                  </Text>
                </div>
              </Group>
            </Card>

            <Card padding="xl" radius="md" className="bg-slate-50">
              <Group align="start" wrap="nowrap">
                <ThemeIcon size={48} radius="xl" color="green" variant="light">
                  <Clock className="w-6 h-6" />
                </ThemeIcon>
                <div>
                  <Title order={4} size="h3" mb="xs">변호사의 시간과 리소스는 제한적입니다</Title>
                  <Text c="dimmed">
                    초동 상담에 뺏기는 시간을 자동화하여, 변호사님은 사건 판단과 전략 수립이라는 본질적인 업무에 집중할 수 있습니다.
                  </Text>
                </div>
              </Group>
            </Card>

            <Card padding="xl" radius="md" className="bg-slate-50">
              <Group align="start" wrap="nowrap">
                <ThemeIcon size={48} radius="xl" color="purple" variant="light">
                  <TrendingUp className="w-6 h-6" />
                </ThemeIcon>
                <div>
                  <Title order={4} size="h3" mb="xs">경쟁 로펌 대비 압도적 디지털 전환</Title>
                  <Text c="dimmed">
                    단순 블로그 경쟁을 넘어, AI 기반 구조화 시스템을 선점함으로써 광고 경쟁력이 6개월~1년 단위로 벌어지게 됩니다.
                  </Text>
                </div>
              </Group>
            </Card>
          </Stack>
        </Container>
      </section>

      {/* Webtoon Section */}
      {/* Webtoon Section */}
      <section className="py-24 md:py-32 bg-background">
        <Container size="xl">
          <Stack align="center" gap="xl" mb={48} className="text-center">
            <Title order={2} className="text-3xl md:text-4xl font-bold">기존 법률 광고는 끝났습니다</Title>
            <Text size="lg" c="dimmed">AI 이중퍼널 시스템으로 변화하는 법률 시장의 미래</Text>
          </Stack>

          <Card radius="xl" shadow="xl" withBorder padding={0} style={{ overflow: 'hidden' }}>
            <Image
              src="/images/legal-marketing-webtoon.png"
              alt="AI 이중퍼널 시스템 웹툰"
              w="100%"
            />
          </Card>
        </Container>
      </section>

      {/* YouTube Video Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <Container size="lg">
          <Stack align="center" gap="xl" mb={32} className="text-center">
            <Title order={2} className="text-3xl md:text-4xl font-bold">솔루션 소개 영상</Title>
            <Text size="lg" c="dimmed">LLM 기반 이중퍼널 시스템을 영상으로 확인하세요</Text>
          </Stack>

          <Card radius="xl" shadow="xl" padding={0} bg="black" style={{ overflow: 'hidden' }}>
            <AspectRatio ratio={16 / 9}>
              <iframe
                src="https://www.youtube.com/embed/HPJx65CpVTI"
                title="LLM 기반 이중퍼널 병원 마케팅 솔루션"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                style={{ border: 0 }}
              />
            </AspectRatio>
          </Card>
        </Container>
      </section>

      {/* Gemini Chat Section */}
      {/* <section className="py-16 md:py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">24시간 마케팅 상담</h2>
            <p className="text-lg text-muted-foreground">혁신적인 법률 마케팅 방법에 대해서 궁금하신 점이 있으신가요? 무엇이든지 물어보세요</p>
          </div>
          <GeminiChat />
        </div>
      </section> */}

      {/* 상담 신청 폼 */}
      {/* 상담 신청 폼 */}
      <section id="consultation-form" className="py-16 md:py-20">
        <Container size="xl">
          <Stack align="center" gap="xl" mb={48} className="text-center">
            <Title order={2} className="text-3xl md:text-4xl font-bold">무료 컨설팅 및 데모 신청하기</Title>
            <Text size="lg" c="dimmed">빠르게 연락드리고 상담을 해드리도록 하겠습니다</Text>
          </Stack>

          <ConsultationForm />
        </Container>
      </section>

      {/* Footer */}
      <footer className="border-t bg-gray-50 py-12">
        <Container size="lg">
          <Stack gap="lg" align="center">
            <Card withBorder radius="md" p="md" bg="orange.0" className="border-orange-200">
              <Group gap="xs">
                <AlertCircle className="w-5 h-5 text-orange-600" />
                <Text size="sm" c="orange.9">본 서비스는 법률 자문이 아니며, 구체적인 법률 판단은 변호사 상담이 필수입니다.</Text>
              </Group>
            </Card>

            <Stack gap="xs" align="center" className="text-center">
              <Text fw={600} size="lg">주식회사 루미브리즈</Text>
              <Text size="sm" c="dimmed">대표 유범석</Text>
              <Group gap="md">
                <Text component="a" href="mailto:lumibreeze00@gmail.com" size="sm" c="blue" td="underline">
                  ✉ lumibreeze00@gmail.com
                </Text>
                <Text component="a" href="tel:010-8761-4598" size="sm" c="blue" td="underline">
                  📞 010-8761-4598
                </Text>
              </Group>
            </Stack>
          </Stack>
        </Container>
      </footer>
    </main>
  )
}
