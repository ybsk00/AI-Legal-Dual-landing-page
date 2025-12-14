"use client"

import { ConsultationForm } from "@/components/consultation-form"
import { WireframeMesh } from "@/components/WireframeMesh"
import { GlassCard, GlassButton, SectionTitle } from "@/components/GlassCard"
import {
  Search,
  FileText,
  Bot,
  TrendingUp,
  Clock,
  Scale,
  MessageCircle,
  Shield,
  Target,
  Zap,
  CheckCircle,
  XCircle,
  ArrowRight,
  Users,
  Briefcase,
  FileCheck,
  Filter,
  Lightbulb,
  Gem,
  Sparkles,
  Timer,
  FolderOpen,
  CalendarCheck,
  AlertCircle,
  Phone,
  Mail,
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

  const scrollToForm = () => {
    document.getElementById("consultation-form")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <main className="min-h-screen relative">
      {/* 3D Wireframe Mesh Background */}
      <WireframeMesh />

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4 py-20">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-sm font-medium text-blue-400 bg-blue-500/10 border border-blue-500/20 rounded-full backdrop-blur-sm animate-fade-in-up">
              <Zap className="w-4 h-4" />
              <span>AI 시대 로펌 마케팅 전환</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight animate-fade-in-up break-keep" style={{ animationDelay: "0.1s" }}>
              사람들은 이제 검색이 아니라
              <br />
              <span className="text-gradient">AI에게 먼저 묻고</span> 변호사를 고릅니다
            </h1>

            <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed animate-fade-in-up break-keep" style={{ animationDelay: "0.2s" }}>
              블로그·지식인 중심 마케팅은 끝났습니다.
              <br />
              "AI에게 먼저 물어보는" 이 대화를
              <br />
              우리 로펌 전용 AI 퍼널로 가져오는 시스템입니다.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <GlassButton size="xl" onClick={scrollToForm} className="w-full sm:w-auto">
                무료 컨설팅 신청하기
              </GlassButton>
              <p className="text-sm text-gray-500">
                AI가 먼저 신뢰를 만들고, 로펌은 정리된 사건만 상담합니다.
              </p>
            </div>

            {/* Hero Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <GlassCard className="p-6 text-left">
                <div className="icon-glass w-12 h-12 flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">변화된 사용자 행동</h3>
                <p className="text-sm text-gray-400 break-keep">
                  검색 → AI 대화 → 변호사 선택
                  <br />
                  이미 사용자 행동은 이렇게 바뀌었습니다.
                </p>
              </GlassCard>

              <GlassCard className="p-6 text-left">
                <div className="icon-glass w-12 h-12 flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">로펌 전용 AI의 역할</h3>
                <p className="text-sm text-gray-400 break-keep">
                  AI가 의뢰인의 말을 듣고, 정보를 정리하고, 신뢰를 만듭니다.
                </p>
              </GlassCard>

              <GlassCard className="p-6 text-left">
                <div className="icon-glass w-12 h-12 flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">AI 법률 2중 퍼널</h3>
                <p className="text-sm text-gray-400 break-keep">
                  익명 상담 AI로 유입을 모으고, 사건정리 AI로 상담까지 연결합니다.
                </p>
              </GlassCard>
            </div>
          </div>
        </section>

        {/* Section 1: 변화된 시장 환경 */}
        <section className="py-20 md:py-32 px-4">
          <div className="max-w-6xl mx-auto">
            <SectionTitle
              badge="MARKET CHANGE"
              title="의뢰인이 변호사를 찾는 방법이"
              highlight="완전히 바뀌었습니다"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <GlassCard className="p-8 text-center">
                <div className="icon-glass w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Search className="w-8 h-8 text-gray-400" />
                </div>
                <span className="text-sm text-blue-400 font-medium">초기</span>
                <h3 className="text-xl font-bold text-white mt-2 mb-4">검색 광고</h3>
                <p className="text-sm text-gray-400 break-keep">
                  키워드 광고 경쟁은 심해지고, 비용은 계속 오릅니다. 광고만으로는 신뢰를 얻기 어렵습니다.
                </p>
              </GlassCard>

              <GlassCard className="p-8 text-center relative">
                <div className="absolute top-1/2 left-0 w-full flex justify-between px-4 -translate-y-1/2 pointer-events-none hidden md:flex">
                  <ArrowRight className="w-6 h-6 text-blue-500/50 -ml-10" />
                  <ArrowRight className="w-6 h-6 text-blue-500/50 -mr-10" />
                </div>
                <div className="icon-glass w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <FileText className="w-8 h-8 text-gray-400" />
                </div>
                <span className="text-sm text-blue-400 font-medium">과거</span>
                <h3 className="text-xl font-bold text-white mt-2 mb-4">블로그</h3>
                <p className="text-sm text-gray-400 break-keep">
                  네이버 검색 방식이 계속 바뀌면서, 블로그 글이 잘 보일지 예측하기가 불가능해졌습니다.
                </p>
              </GlassCard>

              <GlassCard variant="highlight" className="p-8 text-center">
                <div className="icon-glass w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Bot className="w-8 h-8 text-blue-400" />
                </div>
                <span className="text-sm text-cyan-400 font-medium">현재</span>
                <h3 className="text-xl font-bold text-white mt-2 mb-4">AI에게 질문</h3>
                <p className="text-sm text-gray-300 break-keep">
                  사람들은 이제 '이런 일로 소송할 수 있나요?' 같은 질문을 변호사보다 AI에게 먼저 물어봅니다.
                </p>
              </GlassCard>
            </div>

            <GlassCard variant="highlight" className="p-6 md:p-8 text-center max-w-4xl mx-auto">
              <p className="text-lg md:text-xl font-medium text-white break-keep">
                이제 고객이 있는 곳, 즉 <span className="text-gradient">'AI 대화'</span> 안으로 들어가야 합니다.
              </p>
            </GlassCard>
          </div>
        </section>

        {/* Section 2: 법무법인의 4가지 어려움 */}
        <section className="py-20 md:py-32 px-4">
          <div className="max-w-6xl mx-auto">
            <SectionTitle
              badge="CHALLENGES"
              title="그래서 지금, 법무법인은"
              highlight="4가지 어려움을 겪고 있습니다"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <GlassCard className="p-8">
                <div className="flex items-start gap-4">
                  <div className="icon-glass w-14 h-14 flex items-center justify-center shrink-0">
                    <TrendingUp className="w-7 h-7 text-red-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">광고비 부담</h3>
                    <p className="text-gray-400 break-keep leading-relaxed">
                      법률 마케팅 비용은 4년 새 127%나 올랐지만, 어떤 광고가 실제 수임으로 이어지는지 알기 어렵습니다.
                    </p>
                  </div>
                </div>
              </GlassCard>

              <GlassCard className="p-8">
                <div className="flex items-start gap-4">
                  <div className="icon-glass w-14 h-14 flex items-center justify-center shrink-0">
                    <MessageCircle className="w-7 h-7 text-orange-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">끝없는 초기 상담</h3>
                    <p className="text-gray-400 break-keep leading-relaxed">
                      문의 내용은 제각각인데, 사실관계를 파악하는 데에만 변호사님과 실무진의 시간이 너무 많이 쓰입니다.
                    </p>
                  </div>
                </div>
              </GlassCard>

              <GlassCard className="p-8">
                <div className="flex items-start gap-4">
                  <div className="icon-glass w-14 h-14 flex items-center justify-center shrink-0">
                    <Scale className="w-7 h-7 text-yellow-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">어떤 사건에 집중할까?</h3>
                    <p className="text-gray-400 break-keep leading-relaxed">
                      사건의 중요도, 시급성, 증거 유무를 미리 알기 어려워 어떤 상담에 먼저 집중해야 할지 판단하기 힘듭니다.
                    </p>
                  </div>
                </div>
              </GlassCard>

              <GlassCard className="p-8">
                <div className="flex items-start gap-4">
                  <div className="icon-glass w-14 h-14 flex items-center justify-center shrink-0">
                    <FileText className="w-7 h-7 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">예측 안 되는 블로그</h3>
                    <p className="text-gray-400 break-keep leading-relaxed">
                      큰 비용을 들여 블로그를 운영해도, 검색 결과에서 언제 사라질지 몰라 불안정합니다.
                    </p>
                  </div>
                </div>
              </GlassCard>
            </div>
          </div>
        </section>

        {/* Section 3: 블로그가 정답이 아닌 이유 */}
        <section className="py-20 md:py-32 px-4">
          <div className="max-w-6xl mx-auto">
            <SectionTitle
              badge="INSIGHT"
              title="더 이상 '블로그'가"
              highlight="정답이 아닌 이유"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <GlassCard className="p-8">
                <span className="text-sm text-gray-500 font-medium">과거</span>
                <h3 className="text-2xl font-bold text-white mt-2 mb-4">키워드 기반 상위노출</h3>
                <p className="text-gray-400 break-keep leading-relaxed">
                  과거에는 키워드만 잘 맞추면 통하는 '상위노출 공식'이 있었습니다.
                </p>
              </GlassCard>

              <GlassCard variant="highlight" className="p-8">
                <span className="text-sm text-blue-400 font-medium">현재</span>
                <h3 className="text-2xl font-bold text-white mt-2 mb-4">AI 기반 평가 시스템</h3>
                <p className="text-gray-300 break-keep leading-relaxed">
                  하지만, 이제 네이버와 구글의 평가 기준이 <span className="text-blue-400 font-semibold">AI 기반으로 완전히 바뀌</span>어 과거의 방식은 통하지 않을 뿐만 아니라, <span className="text-red-400 font-semibold">오히려 위험합니다.</span>
                </p>
              </GlassCard>
            </div>

            <GlassCard className="p-8 text-center max-w-4xl mx-auto">
              <p className="text-lg text-gray-300 mb-4 break-keep">
                역설적으로, 블로그를 살리려면
                <br />
                <span className="text-white font-semibold">블로그 밖의 자산이 필수</span>가 되었습니다.
              </p>
              <p className="text-gray-400 break-keep">
                자사 웹사이트의 품질과 신뢰 설계가 블로그 노출의 전제 조건이 되는 시대입니다.
              </p>
            </GlassCard>
          </div>
        </section>

        {/* Section 4: 루미브리즈의 해결책 */}
        <section className="py-20 md:py-32 px-4">
          <div className="max-w-6xl mx-auto">
            <SectionTitle
              badge="SOLUTION"
              title="루미브리즈의 제안:"
              highlight="'2단계 AI 해결책'"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <GlassCard variant="feature" className="p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center mx-auto mb-6 border-2 border-blue-500/30">
                  <span className="text-2xl font-bold text-blue-400">1</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">법률 정보 AI</h3>
                <p className="text-sm text-blue-400 mb-4">웹사이트 방문객을 위한</p>
                <p className="text-gray-400 text-sm break-keep">
                  법률 정보에 대한 궁금증을 풀어주고, 자연스럽게 다음 단계로 안내합니다.
                </p>
              </GlassCard>

              <div className="flex items-center justify-center">
                <ArrowRight className="w-10 h-10 text-blue-500/50 rotate-90 md:rotate-0" />
              </div>

              <GlassCard variant="feature" className="p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-indigo-500/20 flex items-center justify-center mx-auto mb-6 border-2 border-indigo-500/30">
                  <span className="text-2xl font-bold text-indigo-400">2</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">사건 정리 AI</h3>
                <p className="text-sm text-indigo-400 mb-4">변호사님을 위한</p>
                <p className="text-gray-400 text-sm break-keep">
                  상담 전, 사건의 핵심을 미리 파악하고 정리해주는 똑똑한 비서 역할을 합니다.
                </p>
              </GlassCard>
            </div>

            <GlassCard variant="highlight" className="p-8 text-center max-w-4xl mx-auto animate-pulse-glow">
              <div className="flex items-center justify-center gap-4 mb-4">
                <Users className="w-8 h-8 text-cyan-400" />
                <ArrowRight className="w-6 h-6 text-gray-500" />
                <Briefcase className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">좋은 의뢰인과 준비된 상담</h3>
              <p className="text-gray-300 break-keep">
                변호사법을 철저히 지키면서, 더 많은 의뢰인을 만나는 가장 안전한 방법입니다.
              </p>
            </GlassCard>
          </div>
        </section>

        {/* Section 5: 변호사법 준수 원칙 */}
        <section className="py-20 md:py-32 px-4">
          <div className="max-w-6xl mx-auto">
            <SectionTitle
              badge="COMPLIANCE"
              title="가장 중요한 원칙:"
              highlight="변호사법을 철저히 준수합니다"
              subtitle="저희 AI는 법률 서비스를 제공하는 'AI 변호사'가 아닙니다. 변호사님의 업무를 돕는 '보조 도구'입니다."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <GlassCard className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <CheckCircle className="w-8 h-8 text-green-400" />
                  <h3 className="text-xl font-bold text-white">AI가 하는 일</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    "일반 법률 정보 및 절차 안내",
                    "방문객의 상황이 어떤 법률 분야에 해당하는지 분류",
                    "상담 전 준비해야 할 자료나 질문 목록 제공",
                    "변호사님을 위해 상담 내용을 미리 요약 및 정리",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                      <span className="text-gray-300 break-keep">{item}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>

              <GlassCard className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <XCircle className="w-8 h-8 text-red-400" />
                  <h3 className="text-xl font-bold text-white">AI가 절대 하지 않는 일</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    "'소송하면 이깁니다'와 같은 승패 예측",
                    "'합의금은 OOO원이 적절합니다' 같은 구체적인 금액 조언",
                    "변호사의 검토 없이 소장, 계약서 등 법률 문서를 자동으로 만들어 제공",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                      <span className="text-gray-300 break-keep">{item}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </div>
          </div>
        </section>

        {/* Section 6: AI 작동 플로우 */}
        <section className="py-20 md:py-32 px-4">
          <div className="max-w-6xl mx-auto">
            <SectionTitle
              badge="HOW IT WORKS"
              title="2단계 AI는"
              highlight="이렇게 작동합니다"
            />

            <div className="space-y-6">
              {[
                {
                  step: 1,
                  icon: Bot,
                  title: "방문객이 웹사이트에서 '법률 정보 AI'를 만납니다",
                  description: "방문객은 로그인을 하지 않은 상태에서 궁금한 점을 질문합니다. AI는 일반적인 법률 정보와 절차를 안내합니다.",
                  example: "(예: '전세금 반환 절차는 어떻게 되나요?')",
                  color: "blue",
                },
                {
                  step: 2,
                  icon: MessageCircle,
                  title: "방문객이 상담을 위해 정보를 입력합니다",
                  description: "방문객이 상담을 원하면, AI가 사건의 기본적인 사실관계를 체계적으로 질문하고 정리합니다.",
                  highlight: "더 자세한 내용은 변호사님과 상담이 필요합니다.",
                  color: "indigo",
                },
                {
                  step: 3,
                  icon: FileCheck,
                  title: "변호사님은 '사건 정리 AI'로 요약된 보고서를 받습니다",
                  description: "변호사님은 상담 전에 사건의 핵심 쟁점, 증거 목록 등이 담긴 요약 보고서를 확인합니다. AI는 관련 판례나 법령을 찾아주는 보조 역할도 수행합니다.",
                  highlight: "변호사님께 전달",
                  color: "purple",
                },
                {
                  step: 4,
                  icon: Users,
                  title: "준비된 상태에서 의뢰인과 상담합니다",
                  description: "핵심을 미리 파악했기 때문에 훨씬 깊이 있고 효율적인 상담이 가능해집니다.",
                  color: "cyan",
                },
              ].map((item, index) => (
                <GlassCard key={index} className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row items-start gap-6">
                    <div className={`w-16 h-16 rounded-2xl bg-${item.color}-500/20 flex items-center justify-center shrink-0 border border-${item.color}-500/30`}>
                      <item.icon className={`w-8 h-8 text-${item.color}-400`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className={`text-sm font-bold text-${item.color}-400`}>STEP {item.step}</span>
                        {item.highlight && (
                          <span className="text-xs px-3 py-1 bg-green-500/20 text-green-400 rounded-full border border-green-500/30">
                            {item.highlight}
                          </span>
                        )}
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3 break-keep">{item.title}</h3>
                      <p className="text-gray-400 break-keep leading-relaxed">{item.description}</p>
                      {item.example && (
                        <p className="text-gray-500 text-sm mt-2">{item.example}</p>
                      )}
                    </div>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>

        {/* Section 7: 1단계 상세 기능 */}
        <section className="py-20 md:py-32 px-4">
          <div className="max-w-6xl mx-auto">
            <SectionTitle
              badge="STEP 1"
              title="1단계: '법률 정보 AI'가"
              highlight="좋은 의뢰인을 알아서 모아줍니다"
              subtitle="법률 정보 검색으로 들어온 잠재 고객을 놓치지 않고 상담까지 연결합니다."
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <GlassCard className="p-8 text-center">
                <div className="icon-glass w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <Clock className="w-10 h-10 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">24시간 첫 응대</h3>
                <p className="text-gray-400 break-keep leading-relaxed">
                  밤이나 주말에도 잠재 의뢰인의 첫 질문에 즉시 답하며, 문의를 놓치지 않습니다.
                </p>
              </GlassCard>

              <GlassCard className="p-8 text-center">
                <div className="icon-glass w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <MessageCircle className="w-10 h-10 text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">자연스러운 상담 유도</h3>
                <p className="text-gray-400 break-keep leading-relaxed">
                  방문객의 궁금증을 해결해주면서 '더 자세한 내용은 전문가인 변호사님과 직접 이야기해보세요'라며 자연스럽게 상담을 권합니다.
                </p>
              </GlassCard>

              <GlassCard className="p-8 text-center">
                <div className="icon-glass w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-10 h-10 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">안전한 정보 제공</h3>
                <p className="text-gray-400 break-keep leading-relaxed">
                  법적 조언이 아닌, 공개된 법령과 판례에 기반한 일반 정보만 제공합니다. 모든 답변 하단에는 '이 내용은 법률 자문이 아니며, 변호사와 상담이 필요합니다'라는 안내 문구가 항상 표시됩니다.
                </p>
              </GlassCard>
            </div>
          </div>
        </section>

        {/* Section 8: 2단계 상세 기능 */}
        <section className="py-20 md:py-32 px-4">
          <div className="max-w-6xl mx-auto">
            <SectionTitle
              badge="STEP 2"
              title="2단계: '사건 정리 AI'는"
              highlight="변호사님의 똑똑한 비서입니다"
              subtitle="상담 전, 모든 준비를 끝내 변호사님의 시간을 아껴드립니다."
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <GlassCard className="p-8 text-center">
                <div className="icon-glass w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <FileCheck className="w-10 h-10 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">상담 전 요약 보고서</h3>
                <p className="text-gray-400 break-keep leading-relaxed">
                  상담 30분을 사건 파악에 쓰는 대신, AI가 미리 정리한 요약본으로 핵심부터 바로 이야기할 수 있습니다.
                </p>
              </GlassCard>

              <GlassCard className="p-8 text-center">
                <div className="icon-glass w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <Filter className="w-10 h-10 text-indigo-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">사건 중요도 자동 분류</h3>
                <p className="text-gray-400 break-keep leading-relaxed">
                  입력된 정보를 바탕으로 사건의 예상 가치, 시급성 등을 분석해 '긴급/중요/일반'으로 분류해줍니다. 변호사님은 중요한 사건에 먼저 집중할 수 있습니다.
                </p>
              </GlassCard>

              <GlassCard className="p-8 text-center">
                <div className="icon-glass w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <Lightbulb className="w-10 h-10 text-yellow-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">초안 문서 및 자료 준비</h3>
                <p className="text-gray-400 break-keep leading-relaxed">
                  변호사님의 지시에 따라 관련 판례를 찾고, 소장이나 답변서의 초안을 작성하여 업무 시간을 획기적으로 줄여줍니다. (최종 검토와 수정은 변호사님이 직접 합니다.)
                </p>
              </GlassCard>
            </div>
          </div>
        </section>

        {/* Section 9: 기대 효과 1 */}
        <section className="py-20 md:py-32 px-4">
          <div className="max-w-6xl mx-auto">
            <SectionTitle
              badge="BENEFITS 1"
              title="기대 효과 1: 마케팅 비용은 줄고,"
              highlight="좋은 의뢰인은 늘어납니다"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <GlassCard className="p-8 text-center">
                <div className="icon-glass w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <Target className="w-10 h-10 text-red-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">광고 효과 극대화</h3>
                <p className="text-gray-400 break-keep leading-relaxed">
                  어떤 광고를 통해 들어온 문의가 실제 수임까지 이어졌는지 데이터로 명확하게 보여줍니다. 효과 없는 광고를 줄이고, 효과 있는 곳에 집중할 수 있습니다.
                </p>
              </GlassCard>

              <GlassCard className="p-8 text-center">
                <div className="icon-glass w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <Gem className="w-10 h-10 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">수임 가능성 높은 의뢰인 선별</h3>
                <p className="text-gray-400 break-keep leading-relaxed">
                  AI가 1차로 사건을 분류해주기 때문에, 수임 가능성이 높은 '진짜 고객'에게 변호사님의 소중한 시간을 집중할 수 있습니다.
                </p>
              </GlassCard>

              <GlassCard className="p-8 text-center">
                <div className="icon-glass w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <Sparkles className="w-10 h-10 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">웹사이트를 떠나지 않는 고객</h3>
                <p className="text-gray-400 break-keep leading-relaxed">
                  방문객이 필요한 정보를 얻고 다음 단계(상담)까지 한 곳에서 해결할 수 있어, 다른 곳으로 이탈하지 않고 우리 법무법인의 고객이 될 확률이 높아집니다.
                </p>
              </GlassCard>
            </div>
          </div>
        </section>

        {/* Section 10: 기대 효과 2 */}
        <section className="py-20 md:py-32 px-4">
          <div className="max-w-6xl mx-auto">
            <SectionTitle
              badge="BENEFITS 2"
              title="기대 효과 2: 반복 업무가 줄고,"
              highlight="변호사님은 중요한 일에 집중합니다"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <GlassCard className="p-8 text-center">
                <div className="icon-glass w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <Timer className="w-10 h-10 text-amber-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">변호사 시간 절약</h3>
                <p className="text-gray-400 break-keep leading-relaxed">
                  사실관계 파악, 사건 요약, 기초 자료 검색 등 AI가 미리 처리해, 변호사님은 법리 검토와 같이 가장 중요한 핵심 업무에만 집중할 수 있습니다.
                </p>
              </GlassCard>

              <GlassCard className="p-8 text-center">
                <div className="icon-glass w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <FolderOpen className="w-10 h-10 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">체계적인 상담 기록</h3>
                <p className="text-gray-400 break-keep leading-relaxed">
                  모든 초기 상담 내용이 동일한 형식으로 정리되고 저장되어, 나중에 찾아보거나 다른 변호사와 협업하기가 매우 편리해집니다.
                </p>
              </GlassCard>

              <GlassCard className="p-8 text-center">
                <div className="icon-glass w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <CalendarCheck className="w-10 h-10 text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">'노쇼' 감소</h3>
                <p className="text-gray-400 break-keep leading-relaxed">
                  AI와 대화하며 상담을 예약한 고객은 자신의 사건에 더 진지하게 임하게 되어, 예약 후 나타나지 않는 '노쇼' 비율이 눈에 띄게 줄어듭니다.
                </p>
              </GlassCard>
            </div>
          </div>
        </section>

        {/* Section 11: 도입 프로세스 (CTA) */}
        <section className="py-20 md:py-32 px-4">
          <div className="max-w-4xl mx-auto">
            <SectionTitle
              badge="GET STARTED"
              title="시작은 간단합니다"
              subtitle="다음 단계를 위해 함께 논의할 내용을 제안합니다."
            />

            <GlassCard className="p-8 md:p-12">
              <div className="space-y-8">
                {[
                  {
                    title: "시험 운영 범위 정하기",
                    desc: "어떤 종류의 사건을 대상으로 먼저 시작해볼지 결정합니다.",
                  },
                  {
                    title: "중요 사건 기준 설정하기",
                    desc: "'긴급/중요/일반'을 나누는 우리 법무법인만의 기준을 함께 만듭니다.",
                  },
                  {
                    title: "법률적 안전장치 최종 검토",
                    desc: "변호사님께서 직접 저희 AI의 안내 문구와 작동 방식을 보시고, 변호사법 준수 여부를 최종 점검합니다.",
                  },
                  {
                    title: "첫 미팅 날짜 정하기",
                    desc: "위 내용들을 논의하기 위한 첫 미팅 일정을 잡습니다.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center shrink-0 border border-green-500/30">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">{item.title}</h4>
                      <p className="text-gray-400 break-keep">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 text-center">
                <GlassButton size="xl" onClick={scrollToForm} className="animate-pulse-glow">
                  무료 컨설팅 신청하기
                </GlassButton>
              </div>
            </GlassCard>
          </div>
        </section>

        {/* 상담 신청 폼 */}
        <section id="consultation-form" className="py-20 md:py-32 px-4">
          <div className="max-w-4xl mx-auto">
            <SectionTitle
              badge="CONTACT"
              title="무료 컨설팅 및 데모 신청하기"
              subtitle="빠르게 연락드리고 상담을 해드리도록 하겠습니다"
            />

            <ConsultationForm />
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/10 py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <GlassCard className="p-6 mb-8">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
                <p className="text-sm text-orange-300">
                  본 서비스는 법률 자문이 아니며, 구체적인 법률 판단은 변호사 상담이 필수입니다.
                </p>
              </div>
            </GlassCard>

            <div className="text-center space-y-4">
              <h3 className="text-xl font-bold text-white">주식회사 루미브리즈</h3>
              <p className="text-gray-400">대표 유범석</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="mailto:lumibreeze00@gmail.com" className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors">
                  <Mail className="w-4 h-4" />
                  lumibreeze00@gmail.com
                </a>
                <a href="tel:010-8761-4598" className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors">
                  <Phone className="w-4 h-4" />
                  010-8761-4598
                </a>
              </div>
              <p className="text-sm text-gray-500 mt-8">
                © 2024 Lumibreeze. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </main>
  )
}
