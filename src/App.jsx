import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';
import { TrendingUp, Target, Users, Calendar, Award, CheckCircle2, DollarSign, Zap, AlertCircle } from 'lucide-react';

export default function OKRDashboard() {
  const [selectedQuarter, setSelectedQuarter] = useState('2025 Q4');
  
  const companyObjective = {
    title: "견고한 운영 효율화를 통해 핵심 비즈니스 영역의 수익성을 극대화한다",
    progress: 67,
    keyResults: [
      { 
        id: 'KR1', 
        name: '신규 매출 인사이트 발굴', 
        progress: 58,
        status: 'on-track',
        detail: '신규 채널 및 기회 발굴'
      },
      { 
        id: 'KR2', 
        name: '세일즈 영역 효율 개선', 
        progress: 72,
        status: 'on-track',
        detail: '프로세스 최적화 진행 중'
      },
      { 
        id: 'KR3', 
        name: '공헌이익 3분기 대비 성장', 
        progress: 71,
        status: 'on-track',
        detail: '목표 달성 가능',
        target: '15% 성장',
        current: '10.7% 성장'
      }
    ]
  };

  const teams = [
    {
      name: '영업팀',
      icon: '💼',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      progress: 65,
      keyResults: [
        { 
          id: 'KR1', 
          name: '신규 매출 인사이트 발굴',
          detail: '슬룸 홈쇼핑 진입으로 매출 달성 가능성 체크',
          progress: 55,
          current: '시장 조사 완료, 협상 진행 중',
          target: '슬룸 홈쇼핑 입점 확정 및 매출 OOO원',
          status: 'on-track'
        },
        { 
          id: 'KR2', 
          name: '세일즈 영역 효율 개선',
          detail: '영업 프로세스 자동화 및 리드 전환율 향상',
          progress: 68,
          current: '전환율 12% (기존 10%)',
          target: '전환율 15%',
          status: 'on-track'
        },
        { 
          id: 'KR3', 
          name: '공헌이익 3분기 대비 성장',
          detail: '영업팀 공헌이익 개선',
          progress: 72,
          current: '11.5% 성장',
          target: '15% 성장',
          status: 'on-track'
        }
      ]
    },
    {
      name: 'D2C팀',
      icon: '🛍️',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
      progress: 71,
      keyResults: [
        { 
          id: 'KR1', 
          name: '자사몰 매출 전년 대비 120% 달성',
          detail: '온라인 직접 판매 채널 강화',
          progress: 68,
          current: '전년 대비 108%',
          target: '전년 대비 120%',
          status: 'on-track'
        },
        { 
          id: 'KR2', 
          name: 'CAC 20% 절감',
          detail: '고객 획득 비용 최적화',
          progress: 82,
          current: '16% 절감',
          target: '20% 절감',
          status: 'on-track'
        },
        { 
          id: 'KR3', 
          name: 'LTV 30% 증가',
          detail: '고객 생애 가치 향상',
          progress: 63,
          current: '19% 증가',
          target: '30% 증가',
          status: 'at-risk'
        }
      ]
    },
    {
      name: 'BM팀',
      icon: '📊',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      progress: 69,
      keyResults: [
        { 
          id: 'KR1', 
          name: '신규 비즈니스 모델 2개 검증',
          detail: '신규 수익원 발굴 및 테스트',
          progress: 50,
          current: '1개 검증 완료',
          target: '2개 검증 완료',
          status: 'on-track'
        },
        { 
          id: 'KR2', 
          name: '파트너십 5개 체결',
          detail: '전략적 제휴 확대',
          progress: 80,
          current: '4개 체결',
          target: '5개 체결',
          status: 'on-track'
        },
        { 
          id: 'KR3', 
          name: '신규 채널 매출 기여도 15%',
          detail: '신규 채널 매출 비중 확대',
          progress: 73,
          current: '11% 기여',
          target: '15% 기여',
          status: 'on-track'
        }
      ]
    },
    {
      name: '퍼포먼스팀',
      icon: '📈',
      color: 'from-pink-500 to-pink-600',
      bgColor: 'bg-pink-50',
      borderColor: 'border-pink-200',
      progress: 74,
      keyResults: [
        { 
          id: 'KR1', 
          name: 'ROAS 150% 달성',
          detail: '광고 수익률 개선',
          progress: 78,
          current: 'ROAS 142%',
          target: 'ROAS 150%',
          status: 'on-track'
        },
        { 
          id: 'KR2', 
          name: '광고비 효율 25% 개선',
          detail: '광고 운영 최적화',
          progress: 82,
          current: '21% 개선',
          target: '25% 개선',
          status: 'on-track'
        },
        { 
          id: 'KR3', 
          name: '신규 채널 테스트 3개 완료',
          detail: '성과 마케팅 채널 다각화',
          progress: 60,
          current: '2개 완료',
          target: '3개 완료',
          status: 'at-risk'
        }
      ]
    },
    {
      name: '콘텐츠팀',
      icon: '✍️',
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200',
      progress: 66,
      keyResults: [
        { 
          id: 'KR1', 
          name: '월평균 조회수 500만 달성',
          detail: '콘텐츠 도달률 향상',
          progress: 64,
          current: '월 320만',
          target: '월 500만',
          status: 'at-risk'
        },
        { 
          id: 'KR2', 
          name: '콘텐츠 전환율 8% 달성',
          detail: '콘텐츠 품질 및 전환 최적화',
          progress: 75,
          current: '6.8%',
          target: '8%',
          status: 'on-track'
        },
        { 
          id: 'KR3', 
          name: '바이럴 콘텐츠 월 3개 제작',
          detail: '고품질 바이럴 콘텐츠 생산',
          progress: 58,
          current: '월 2개',
          target: '월 3개',
          status: 'at-risk'
        }
      ]
    },
    {
      name: '글로벌실',
      icon: '🌏',
      color: 'from-cyan-500 to-cyan-600',
      bgColor: 'bg-cyan-50',
      borderColor: 'border-cyan-200',
      progress: 62,
      keyResults: [
        { 
          id: 'KR1', 
          name: '해외 매출 전년 대비 200% 달성',
          detail: '글로벌 시장 확대',
          progress: 58,
          current: '전년 대비 148%',
          target: '전년 대비 200%',
          status: 'at-risk'
        },
        { 
          id: 'KR2', 
          name: '신규 국가 3개 진출',
          detail: '시장 다각화',
          progress: 67,
          current: '2개 진출',
          target: '3개 진출',
          status: 'on-track'
        },
        { 
          id: 'KR3', 
          name: '현지화 프로젝트 5개 완료',
          detail: '제품 및 마케팅 현지화',
          progress: 60,
          current: '3개 완료',
          target: '5개 완료',
          status: 'on-track'
        }
      ]
    },
    {
      name: 'CS팀',
      icon: '💬',
      color: 'from-teal-500 to-teal-600',
      bgColor: 'bg-teal-50',
      borderColor: 'border-teal-200',
      progress: 78,
      keyResults: [
        { 
          id: 'KR1', 
          name: 'CSAT 90점 달성',
          detail: '고객 만족도 향상',
          progress: 85,
          current: '88점',
          target: '90점',
          status: 'on-track'
        },
        { 
          id: 'KR2', 
          name: '응답 시간 30분 이내',
          detail: '고객 응대 속도 개선',
          progress: 82,
          current: '평균 35분',
          target: '평균 30분',
          status: 'on-track'
        },
        { 
          id: 'KR3', 
          name: '1차 해결률 80% 달성',
          detail: '문의 처리 효율화',
          progress: 67,
          current: '72%',
          target: '80%',
          status: 'at-risk'
        }
      ]
    },
    {
      name: 'HR팀',
      icon: '👥',
      color: 'from-violet-500 to-violet-600',
      bgColor: 'bg-violet-50',
      borderColor: 'border-violet-200',
      progress: 73,
      keyResults: [
        { 
          id: 'KR1', 
          name: '핵심 인재 유지율 95% 달성',
          detail: '우수 인재 이탈 방지',
          progress: 88,
          current: '93%',
          target: '95%',
          status: 'on-track'
        },
        { 
          id: 'KR2', 
          name: '직원 만족도 85점 달성',
          detail: '조직 문화 개선',
          progress: 70,
          current: '82점',
          target: '85점',
          status: 'on-track'
        },
        { 
          id: 'KR3', 
          name: '핵심 포지션 채용 100% 완료',
          detail: '인력 충원 계획 달성',
          progress: 60,
          current: '12명/20명',
          target: '20명',
          status: 'at-risk'
        }
      ]
    },
    {
      name: '브랜드실',
      icon: '✨',
      color: 'from-rose-500 to-rose-600',
      bgColor: 'bg-rose-50',
      borderColor: 'border-rose-200',
      progress: 68,
      keyResults: [
        { 
          id: 'KR1', 
          name: '브랜드 인지도 40% 달성',
          detail: 'TOM(Top of Mind) 지표 개선',
          progress: 65,
          current: '34%',
          target: '40%',
          status: 'at-risk'
        },
        { 
          id: 'KR2', 
          name: 'PR 노출 월 50건 달성',
          detail: '언론 및 미디어 노출 확대',
          progress: 78,
          current: '월 44건',
          target: '월 50건',
          status: 'on-track'
        },
        { 
          id: 'KR3', 
          name: '브랜드 캠페인 4개 런칭',
          detail: '통합 브랜드 캠페인 실행',
          progress: 62,
          current: '2개 완료',
          target: '4개 완료',
          status: 'at-risk'
        }
      ]
    },
    {
      name: 'SCM팀',
      icon: '📦',
      color: 'from-amber-500 to-amber-600',
      bgColor: 'bg-amber-50',
      borderColor: 'border-amber-200',
      progress: 76,
      keyResults: [
        { 
          id: 'KR1', 
          name: '재고 회전율 20% 개선',
          detail: '재고 관리 효율화',
          progress: 82,
          current: '17% 개선',
          target: '20% 개선',
          status: 'on-track'
        },
        { 
          id: 'KR2', 
          name: '배송 리드타임 3일 이내',
          detail: '물류 프로세스 최적화',
          progress: 75,
          current: '평균 3.5일',
          target: '평균 3일',
          status: 'on-track'
        },
        { 
          id: 'KR3', 
          name: '물류 비용 15% 절감',
          detail: '운영 비용 최적화',
          progress: 70,
          current: '11% 절감',
          target: '15% 절감',
          status: 'on-track'
        }
      ]
    }
  ];

  const companyProgress = {
    daysRemaining: 21,
    totalDays: 91,
    timeProgress: 77,
    overallProgress: 67
  };

  const teamProgressData = teams.map(team => ({
    name: team.name,
    progress: team.progress
  }));

  const getStatusBadge = (status) => {
    if (status === 'on-track') {
      return <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full font-semibold">정상</span>;
    } else if (status === 'at-risk') {
      return <span className="px-2 py-1 bg-yellow-100 text-yellow-700 text-xs rounded-full font-semibold">주의</span>;
    } else {
      return <span className="px-2 py-1 bg-red-100 text-red-700 text-xs rounded-full font-semibold">위험</span>;
    }
  };

  const getProgressColor = (progress) => {
    if (progress >= 70) return 'bg-green-500';
    if (progress >= 40) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-6">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-xl shadow-lg">
              <Target className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-slate-800">전사 OKR 대시보드</h1>
              <p className="text-slate-600 mt-1">2025년 4분기 목표 달성 현황</p>
            </div>
          </div>
          <select 
            value={selectedQuarter}
            onChange={(e) => setSelectedQuarter(e.target.value)}
            className="px-5 py-2.5 border-2 border-slate-300 rounded-xl bg-white font-semibold text-slate-700 shadow-sm hover:border-blue-400 transition-colors"
          >
            <option>2025 Q4</option>
            <option>2025 Q3</option>
            <option>2025 Q2</option>
          </select>
        </div>
      </div>

      {/* Company Objective */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-2xl p-8 mb-6 text-white">
        <div className="flex items-start gap-4 mb-6">
          <Award className="w-10 h-10 flex-shrink-0 mt-1" />
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-2">전사 목표 (Company Objective)</h2>
            <p className="text-lg opacity-95">{companyObjective.title}</p>
          </div>
          <div className="text-right">
            <div className="text-4xl font-bold">{companyObjective.progress}%</div>
            <div className="text-sm opacity-90 mt-1">전체 진행률</div>
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-4">
          {companyObjective.keyResults.map((kr, idx) => (
            <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-sm">{kr.id}</span>
                <span className="text-2xl font-bold">{kr.progress}%</span>
              </div>
              <p className="font-semibold mb-2">{kr.name}</p>
              <p className="text-xs opacity-90 mb-3">{kr.detail}</p>
              {kr.target && (
                <div className="text-xs space-y-1">
                  <div className="flex justify-between">
                    <span className="opacity-90">현재:</span>
                    <span className="font-semibold">{kr.current}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="opacity-90">목표:</span>
                    <span className="font-semibold">{kr.target}</span>
                  </div>
                </div>
              )}
              <div className="w-full bg-white/20 rounded-full h-2 mt-3">
                <div className="bg-white h-2 rounded-full" style={{width: `${kr.progress}%`}}></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-xl shadow-lg p-5 border-2 border-blue-200">
          <div className="flex items-center gap-3 mb-2">
            <Calendar className="w-5 h-5 text-blue-600" />
            <p className="text-sm font-semibold text-slate-700">남은 기간</p>
          </div>
          <p className="text-3xl font-bold text-slate-800">{companyProgress.daysRemaining}일</p>
          <p className="text-sm text-slate-600 mt-1">/ {companyProgress.totalDays}일</p>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-5 border-2 border-green-200">
          <div className="flex items-center gap-3 mb-2">
            <TrendingUp className="w-5 h-5 text-green-600" />
            <p className="text-sm font-semibold text-slate-700">시간 진행률</p>
          </div>
          <p className="text-3xl font-bold text-slate-800">{companyProgress.timeProgress}%</p>
          <div className="w-full bg-slate-200 rounded-full h-2 mt-2">
            <div className="bg-green-500 h-2 rounded-full" style={{width: `${companyProgress.timeProgress}%`}}></div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-5 border-2 border-purple-200">
          <div className="flex items-center gap-3 mb-2">
            <Target className="w-5 h-5 text-purple-600" />
            <p className="text-sm font-semibold text-slate-700">전체 진행률</p>
          </div>
          <p className="text-3xl font-bold text-slate-800">{companyProgress.overallProgress}%</p>
          <div className="w-full bg-slate-200 rounded-full h-2 mt-2">
            <div className="bg-purple-500 h-2 rounded-full" style={{width: `${companyProgress.overallProgress}%`}}></div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-5 border-2 border-orange-200">
          <div className="flex items-center gap-3 mb-2">
            <Users className="w-5 h-5 text-orange-600" />
            <p className="text-sm font-semibold text-slate-700">참여 팀</p>
          </div>
          <p className="text-3xl font-bold text-slate-800">{teams.length}팀</p>
          <p className="text-sm text-slate-600 mt-1">활동 중</p>
        </div>
      </div>

      {/* Team Progress Chart */}
      <div className="bg-white rounded-2xl shadow-xl p-6 mb-6 border border-slate-200">
        <h3 className="text-xl font-bold text-slate-800 mb-4">팀별 진행률 현황</h3>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={teamProgressData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis dataKey="name" tick={{fill: '#475569', fontSize: 11}} />
            <YAxis tick={{fill: '#475569', fontSize: 11}} domain={[0, 100]} />
            <Tooltip 
              contentStyle={{backgroundColor: '#fff', border: '2px solid #e2e8f0', borderRadius: '8px'}}
              formatter={(value) => `${value}%`}
            />
            <Bar dataKey="progress" fill="#3b82f6" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Team Details Grid */}
      <div className="grid grid-cols-2 gap-6">
        {teams.map((team, idx) => (
          <div key={idx} className={`bg-white rounded-2xl shadow-xl overflow-hidden border-2 ${team.borderColor}`}>
            <div className={`bg-gradient-to-r ${team.color} p-5 text-white`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{team.icon}</span>
                  <div>
                    <h3 className="text-xl font-bold">{team.name}</h3>
                    <p className="text-sm opacity-90">Key Results Progress</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold">{team.progress}%</div>
                  <div className="text-xs opacity-90">평균 진행률</div>
                </div>
              </div>
            </div>
            
            <div className="p-5 space-y-4">
              {team.keyResults.map((kr, krIdx) => (
                <div key={krIdx} className={`${team.bgColor} rounded-xl p-4 border ${team.borderColor}`}>
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-bold text-slate-600">{kr.id}</span>
                        {getStatusBadge(kr.status)}
                      </div>
                      <h4 className="font-bold text-slate-800 text-sm mb-1">{kr.name}</h4>
                      <p className="text-xs text-slate-600">{kr.detail}</p>
                    </div>
                    <div className="text-2xl font-bold text-slate-800 ml-3">{kr.progress}%</div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${getProgressColor(kr.progress)}`}
                        style={{width: `${kr.progress}%`}}
                      ></div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="bg-white/70 rounded p-2">
                        <div className="text-slate-600 mb-0.5">현재</div>
                        <div className="font-semibold text-slate-800">{kr.current}</div>
                      </div>
                      <div className="bg-white/70 rounded p-2">
                        <div className="text-slate-600 mb-0.5">목표</div>
                        <div className="font-semibold text-slate-800">{kr.target}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-8 text-center text-slate-600 text-sm bg-white rounded-xl p-4 shadow">
        <p className="font-semibold">마지막 업데이트: {new Date().toLocaleDateString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' })}</p>
        <p className="text-xs mt-1 text-slate-500">다음 리뷰: 2025년 12월 마지막 주</p>
      </div>
    </div>
  );
}