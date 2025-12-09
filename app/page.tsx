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
            <source src="/1.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="container relative z-10 mx-auto px-4 py-20 md:py-32 text-white">
          <div className="text-center max-w-5xl mx-auto space-y-8">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/20 text-white rounded-full text-lg font-medium backdrop-blur-sm border border-white/20">
              <Zap className="w-5 h-5" />
              <span>AI 시대 로펌 마케팅 전환</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance leading-tight py-2 drop-shadow-lg break-keep">
              사람들은 이제 검색이 아니라
              <br />
              <span className="text-primary-foreground">AI에게 먼저 묻고</span> 변호사를 고릅니다
            </h1>

            <p className="text-xl md:text-2xl text-white/90 text-balance max-w-3xl mx-auto leading-relaxed drop-shadow-md break-keep">
              블로그·지식인 중심 마케팅은 끝났습니다.
              <br />
              “AI에게 먼저 물어보는” 이 대화를
              <br />
              우리 로펌 전용 AI 퍼널로 가져오는 시스템입니다.
            </p>

            <div className="flex flex-col items-center gap-4 pt-4">
              <button
                onClick={() => document.getElementById('consultation-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-primary text-primary-foreground text-lg font-bold rounded-full hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                무료 컨설팅 신청하기
              </button>
              <p className="text-sm md:text-base font-medium text-white/80 drop-shadow-sm break-keep">
                AI가 먼저 신뢰를 만들고, 로펌은 정리된 사건만 상담합니다.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4 md:gap-6 pt-12 text-left">
              <div className="p-6 bg-black/40 backdrop-blur-md rounded-xl border border-white/10 shadow-sm hover:bg-black/50 transition-colors">
                <h3 className="font-bold text-lg mb-2 flex items-center gap-2 text-white break-keep">
                  <TrendingUp className="w-5 h-5 text-primary-foreground" />
                  변화된 사용자 행동
                </h3>
                <p className="text-white/80 text-sm break-keep">
                  검색 → AI 대화 → 변호사 선택
                  <br />
                  이미 사용자 행동은 이렇게 바뀌었습니다.
                </p>
              </div>
              <div className="p-6 bg-black/40 backdrop-blur-md rounded-xl border border-white/10 shadow-sm hover:bg-black/50 transition-colors">
                <h3 className="font-bold text-lg mb-2 flex items-center gap-2 text-white break-keep">
                  <Target className="w-5 h-5 text-primary-foreground" />
                  로펌 전용 AI의 역할
                </h3>
                <p className="text-white/80 text-sm break-keep">
                  AI가 의뢰인의 말을 듣고, 정보를 정리하고, 신뢰를 만듭니다. 이 역할을 플랫폼이 아닌 우리 로펌의 AI가 해야 합니다.
                </p>
              </div>
              <div className="p-6 bg-black/40 backdrop-blur-md rounded-xl border border-white/10 shadow-sm hover:bg-black/50 transition-colors">
                <h3 className="font-bold text-lg mb-2 flex items-center gap-2 text-white break-keep">
                  <Zap className="w-5 h-5 text-primary-foreground" />
                  AI 법률 2중 퍼널
                </h3>
                <p className="text-white/80 text-sm break-keep">
                  익명 상담 AI로 유입을 모으고,
                  <br />
                  로그인 사건정리 AI로 상담·수임까지 자동 연결합니다.
                </p>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6 break-keep">
                블로그·검색광고만으로는
                <br />
                이제 고가치 사건이 모이지 않습니다
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto break-keep">
                의뢰인은 글을 읽지 않고, AI에게 자신의 사정을 털어놓습니다.
                <br />
                그런데 그 대화의 주인공은 우리 로펌이 아니라 남의 AI입니다.
              </p>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4 break-keep">
                “검색 → AI 대화 → 변호사 선택”
                <br />
                이 흐름을 우리 로펌 퍼널로 바꿉니다
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto font-medium break-keep">
                AI가 먼저 듣고 정리하고 넘겨주는, 로펌 전용 2단계 퍼널입니다.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-32">
              {/* L1 Funnel */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-primary/10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Megaphone className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="text-2xl font-bold">퍼널 1 (L1)</h4>
                </div>
                <p className="text-slate-600 mb-4 font-medium text-lg">익명 생활법률 AI가 가볍게 대화를 시작하고 신뢰를 형성</p>
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
              </div>

              {/* L2 Funnel */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-primary/10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <ShieldCheck className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="text-2xl font-bold">퍼널 2 (L2)</h4>
                </div>
                <p className="text-slate-600 mb-4 font-medium text-lg">로그인 사건정리 AI가 정보를 구조화하고 상담·예약까지 연결</p>
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
              </div>
            </div>

            {/* Advantages Section */}
            <div className="bg-gradient-to-br from-slate-100 to-slate-50 rounded-2xl p-12">
              <div className="text-center mb-12">
                <h3 className="text-3xl md:text-4xl font-bold mb-4 break-keep">
                  AI가 신뢰를 만들고,
                  <br />
                  변호사는 정리된 사건만 보면 됩니다
                </h3>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
                  <h5 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <TrendingUp className="w-6 h-6 text-red-500" /> 압도적 전환율
                  </h5>
                  <p className="text-slate-600">
                    같은 광고비로도 상담 전환율 3~10배까지 노려볼 수 있는 구조
                  </p>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
                  <h5 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Target className="w-6 h-6 text-blue-500" /> AI 초진 처리
                  </h5>
                  <p className="text-slate-600">
                    초진·기초 질문은 AI가 처리하고, 의뢰인의 정보를 체계적으로 정리합니다.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
                  <h5 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Zap className="w-6 h-6 text-yellow-500" /> 핵심 업무 집중
                  </h5>
                  <p className="text-slate-600">
                    변호사는 판단·전략·협상 등 본질적인 고부가가치 업무에만 집중할 수 있습니다.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6 break-keep">
              “AI와 먼저 대화한 의뢰인”을
              <br />
              잡는 로펌과 놓치는 로펌
            </h2>
            <div className="space-y-4 text-xl text-slate-600 break-keep">
              <p>
                이미 의뢰인의 머릿속 흐름은
                <br />
                <span className="font-bold text-primary">검색 → AI 상담 → 변호사 선택</span>으로 바뀌었습니다.
              </p>
              <p>
                지금 우리 로펌 전용 AI를 갖추지 않으면,
                <br />
                고가치 사건의 첫 대화는 영원히 남의 시스템에서 시작됩니다.
              </p>
            </div>
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
                src="/images/legal-marketing-webtoon.png"
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
                src="https://www.youtube.com/embed/HPJx65CpVTI"
                title="LLM 기반 이중퍼널 병원 마케팅 솔루션"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>
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
