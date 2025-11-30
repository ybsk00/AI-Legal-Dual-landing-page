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
      <section className="bg-gradient-to-br from-primary/5 via-accent/5 to-background border-b">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
              <Zap className="w-4 h-4" />
              <span>법률 마케팅 혁신 솔루션</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance leading-snug py-2">
              AI 법률 이중퍼널 시스템
              <br />
              왜 기존 광고보다 압도적으로 유리한가?
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground text-balance">
              기존 법률 마케팅의 한계를 넘어서는 새로운 패러다임
            </p>

            <div className="flex flex-wrap justify-center gap-4 md:gap-6 pt-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-lg border">
                <Lock className="w-5 h-5 text-primary" />
                <span className="font-semibold">변호사법 100% 준수</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-lg border">
                <TrendingUp className="w-5 h-5 text-accent" />
                <span className="font-semibold">전환율 3~10배↑</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-lg border">
                <Target className="w-5 h-5 text-primary" />
                <span className="font-semibold">상담 준비 자동화</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                기존 법률 마케팅의 문제
                <br />
                <span className="text-muted-foreground text-2xl md:text-3xl">(의료 마케팅과 동일한 구조적 한계)</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-24">
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-6">
                  <AlertCircle className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">1. 블로그/검색광고의 한계</h3>
                <ul className="space-y-3 text-slate-600">
                  <li>• 검색량은 많지만 실질적 자문 불가능</li>
                  <li>• 상담 전 정보 부족으로 낮은 전환율</li>
                  <li>• 치열한 경쟁으로 클릭 단가만 상승</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                  <Lock className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">2. 광고 규제 문제</h3>
                <ul className="space-y-3 text-slate-600">
                  <li>• "승소율", "최고" 등 표현 금지</li>
                  <li>• 화려한 카피 불가로 광고 효율 한계</li>
                  <li>• 변호사 직접 추천·선정 금지</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-6">
                  <Clock className="w-6 h-6 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">3. 상담 전 소모적 비용</h3>
                <ul className="space-y-3 text-slate-600">
                  <li>• 의뢰인의 낮은 사건 설명 능력</li>
                  <li>• 사실관계 파악에 상담 시간 70% 소모</li>
                  <li>• 단순 문의 폭증으로 응대 피로도 증가</li>
                </ul>
              </div>
            </div>

            {/* Solution Section - AI Dual Funnel */}
            <div className="mb-24 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">왜 "AI 이중 퍼널 시스템"이 정답인가?</h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                기존 법률 마케팅의 문제를 완전히 해결하는 새로운 패러다임입니다.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-32">
              {/* L1 Funnel */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-primary/10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Megaphone className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="text-2xl font-bold">라이트 퍼널 (L1)</h4>
                </div>
                <p className="text-slate-600 mb-4 font-medium">익명·무자격 영역에서 최대 가치 제공</p>
                <ul className="space-y-3 text-slate-600 mb-6">
                  <li className="flex items-start gap-2">
                    <Zap className="w-5 h-5 text-yellow-500 shrink-0 mt-0.5" />
                    <span>AI 사건 유형 자동 분류 (회생, 형사, 이혼 등)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Zap className="w-5 h-5 text-yellow-500 shrink-0 mt-0.5" />
                    <span>필요한 자료 및 기본 체크리스트 제공</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ShieldCheck className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <span>판단, 승소, 전략 미제공 (규제 완전 준수)</span>
                  </li>
                </ul>
                <div className="p-4 bg-slate-50 rounded-xl text-sm text-slate-500">
                  👉 기존 블로그·검색 광고가 절대 해줄 수 없는 사용자 문제 인식 단계의 도우미 역할 수행
                </div>
              </div>

              {/* L2 Funnel */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-primary/10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <ShieldCheck className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="text-2xl font-bold">전문 퍼널 (L2)</h4>
                </div>
                <p className="text-slate-600 mb-4 font-medium">로그인 후 전문 분석 + 상담 예약</p>
                <ul className="space-y-3 text-slate-600 mb-6">
                  <li className="flex items-start gap-2">
                    <Zap className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                    <span>AI가 사실관계를 JSON 구조화하여 정리</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Zap className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                    <span>"정리된 사건 개요" 및 타임라인 자동 생성</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ShieldCheck className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <span>사무실 단일 CRM으로 전달 (변호사법 준수)</span>
                  </li>
                </ul>
                <div className="p-4 bg-slate-50 rounded-xl text-sm text-slate-500">
                  👉 익명 정보 제공 → 분석 → 예약 → CRM으로 완전 전환되는 구조
                </div>
              </div>
            </div>

            {/* Advantages Section */}
            <div className="bg-gradient-to-br from-slate-100 to-slate-50 rounded-2xl p-12">
              <div className="text-center mb-12">
                <h3 className="text-3xl md:text-4xl font-bold mb-4">
                  이 시스템이 기존 광고 대비 압도적인 이유
                </h3>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h5 className="text-lg font-bold mb-3 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-red-500" /> 광고 효율 극대화
                  </h5>
                  <p className="text-slate-600 text-sm">
                    즉시 체류 유도 및 체크리스트 제공으로 기존 랜딩 대비 전환율 3~10배 상승
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h5 className="text-lg font-bold mb-3 flex items-center gap-2">
                    <Target className="w-5 h-5 text-blue-500" /> 상담 준비도 상승
                  </h5>
                  <p className="text-slate-600 text-sm">
                    변호사에게 "정리된 사건" 전달. 불필요한 질문 감소 및 상담 시간 단축
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h5 className="text-lg font-bold mb-3 flex items-center gap-2">
                    <Zap className="w-5 h-5 text-yellow-500" /> 업무 효율 증가
                  </h5>
                  <p className="text-slate-600 text-sm">
                    상담 준비 자동화로 하루 상담 처리량 증가 및 사무실 운영 효율 향상
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h5 className="text-lg font-bold mb-3 flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-green-500" /> 규제 완전 회피
                  </h5>
                  <p className="text-slate-600 text-sm">
                    자문 금지, 승소율 언급 금지 등 시스템적 차단으로 안심 도입 가능
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h5 className="text-lg font-bold mb-3 flex items-center gap-2">
                    <RepeatIcon className="w-5 h-5 text-purple-500" /> 지속 가능한 구조
                  </h5>
                  <p className="text-slate-600 text-sm">
                    비용 증가 없이도 시스템 고도화로 전환율이 자연스럽게 증가하는 구조
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Necessity Section */}
      <section className="py-24 bg-white border-t">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">왜 법률서비스에 반드시 도입해야 하는가?</h2>
          </div>

          <div className="space-y-8 max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row gap-6 items-start p-6 bg-slate-50 rounded-xl">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">사건의 90%는 "기초 정보 파악"에서 이탈합니다</h4>
                <p className="text-slate-600">
                  의뢰인은 자신의 문제를 명확히 설명하지 못해 상담 전 이탈합니다. 라이트 AI가 이를 대신 정리해주면 상담 준비도가 폭발적으로 증가합니다.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-start p-6 bg-slate-50 rounded-xl">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center shrink-0">
                <Clock className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">변호사의 시간과 리소스는 제한적입니다</h4>
                <p className="text-slate-600">
                  초동 상담에 뺏기는 시간을 자동화하여, 변호사님은 사건 판단과 전략 수립이라는 본질적인 업무에 집중할 수 있습니다.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-start p-6 bg-slate-50 rounded-xl">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center shrink-0">
                <TrendingUp className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">경쟁 로펌 대비 압도적 디지털 전환</h4>
                <p className="text-slate-600">
                  단순 블로그 경쟁을 넘어, AI 기반 구조화 시스템을 선점함으로써 광고 경쟁력이 6개월~1년 단위로 벌어지게 됩니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Webtoon Section */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">기존 법률 광고는 끝났습니다</h2>
              <p className="text-lg text-muted-foreground">AI 이중퍼널 시스템으로 변화하는 법률 시장의 미래</p>
            </div>

            <div className="rounded-xl overflow-hidden shadow-2xl bg-white dark:bg-card border">
              <img
                src="/images/legal-marketing-webtoon.jpg"
                alt="AI 이중퍼널 시스템 웹툰"
                className="w-full h-auto"
                width={1920}
                height={5480}
              />
            </div>
          </div>
        </div>
      </section>

      {/* YouTube Video Section */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">솔루션 소개 영상</h2>
              <p className="text-lg text-muted-foreground">LLM 기반 이중퍼널 시스템을 영상으로 확인하세요</p>
            </div>

            <div
              className="relative w-full rounded-xl overflow-hidden shadow-2xl bg-black"
              style={{ aspectRatio: "16/9" }}
            >
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/fnJzdvUiqn4"
                title="LLM 기반 이중퍼널 병원 마케팅 솔루션"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gemini Chat Section */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">24시간 마케팅 상담</h2>
            <p className="text-lg text-muted-foreground">혁신적인 법률 마케팅 방법에 대해서 궁금하신 점이 있으신가요? 무엇이든지 물어보세요</p>
          </div>
          <GeminiChat />
        </div>
      </section>

      {/* 상담 신청 폼 */}
      <section id="consultation-form" className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">무료 컨설팅 및 데모 신청하기</h2>
            <p className="text-lg text-muted-foreground">빠르게 연락드리고 상담을 해드리도록 하겠습니다</p>
          </div>

          <ConsultationForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/30 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="flex items-start gap-2 text-sm text-muted-foreground bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
              <AlertCircle className="w-5 h-5 text-amber-600 dark:text-amber-500 shrink-0 mt-0.5" />
              <p className="leading-relaxed">본 서비스는 법률 자문이 아니며, 구체적인 법률 판단은 변호사 상담이 필수입니다.</p>
            </div>

            <div className="text-center space-y-2">
              <p className="font-semibold text-lg">주식회사 루미브리즈</p>
              <p className="text-sm text-muted-foreground">대표 유범석</p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <a href="mailto:lumibreeze00@gmail.com" className="text-primary hover:underline">
                  ✉ lumibreeze00@gmail.com
                </a>
                <a href="tel:010-8761-4598" className="text-primary hover:underline">
                  📞 010-8761-4598
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
