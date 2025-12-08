import React from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  AreaChart, Area
} from 'recharts';
import { motion } from 'framer-motion';
import { TrendingDown, TrendingUp, AlertTriangle, CheckCircle, Database, Server, Clock } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const incidentData = [
  { name: 'Baseline', mtta: 100, mtti: 100, mttr: 100 },
  { name: 'Automated', mtta: 10, mtti: 50, mttr: 20 },
];

const rtoData = [
  { time: '00:00', rto: 100, latency: 20 },
  { time: '04:00', rto: 95, latency: 25 },
  { time: '08:00', rto: 80, latency: 120 }, // Incident Start
  { time: '08:05', rto: 40, latency: 40 },  // Recovery Actions
  { time: '08:10', rto: 20, latency: 22 },  // Stabilized
  { time: '12:00', rto: 20, latency: 20 },
];

const StatCard: React.FC<{ 
  label: string; 
  value: string; 
  subValue: string; 
  icon: React.ReactNode; 
  trend?: 'up' | 'down' | 'neutral';
  color: string 
}> = ({ label, value, subValue, icon, trend, color }) => (
  <motion.div 
    whileHover={{ scale: 1.02 }}
    className="bg-sre-card/50 backdrop-blur-sm border border-slate-700 p-4 rounded-sm flex items-start justify-between group"
  >
    <div>
      <div className="flex items-center gap-2 text-slate-400 text-xs font-mono uppercase tracking-wider mb-1">
        {icon} {label}
      </div>
      <div className="text-2xl font-bold text-white font-mono group-hover:text-sre-primary transition-colors">{value}</div>
      <div className={`text-xs mt-1 ${trend === 'up' ? 'text-green-400' : trend === 'down' ? 'text-red-400' : 'text-slate-500'}`}>
        {subValue}
      </div>
    </div>
    {trend && (
      <div className={`p-1 rounded bg-slate-800 ${trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
        {trend === 'up' ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
      </div>
    )}
  </motion.div>
);

const PanelHeader: React.FC<{ title: string; query: string }> = ({ title, query }) => (
  <div className="flex justify-between items-center mb-4 border-b border-slate-800 pb-2">
    <div className="flex items-center gap-2">
      <span className="w-1 h-4 bg-sre-warning"></span>
      <h3 className="text-sm font-bold text-slate-200 uppercase">{title}</h3>
    </div>
    <div className="hidden md:block font-mono text-[10px] text-slate-500 bg-slate-900 px-2 py-1 rounded border border-slate-800">
      {query}
    </div>
  </div>
);

const ImpactDashboard: React.FC = () => {
  const { content } = useLanguage();
  const ui = content.ui.impact;

  return (
    <section className="w-full px-6 md:px-12 lg:px-24 py-16 bg-[#050a14] relative">
      {/* Section Header */}
      <div className="flex flex-col mb-12 border-l-4 border-sre-primary pl-6">
        <h2 className="text-3xl font-bold text-white mb-2 flex items-center">
          <Database className="mr-3 text-sre-primary" />
          {ui.title}
        </h2>
        <p className="text-slate-400 font-mono text-sm">
          {ui.subtitle}
        </p>
      </div>

      {/* Top Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatCard 
          label={ui.metrics.mttr.label}
          value="-80%" 
          subValue={ui.metrics.mttr.sub}
          icon={<Clock size={12}/>} 
          trend="down"
          color="green"
        />
        <StatCard 
          label={ui.metrics.precision.label}
          value="98.5%" 
          subValue={ui.metrics.precision.sub}
          icon={<AlertTriangle size={12}/>} 
          trend="up"
          color="blue"
        />
        <StatCard 
          label={ui.metrics.recovery.label} 
          value="5 min" 
          subValue={ui.metrics.recovery.sub}
          icon={<Server size={12}/>} 
          trend="down"
          color="yellow"
        />
        <StatCard 
          label={ui.metrics.noise.label}
          value="40%" 
          subValue={ui.metrics.noise.sub}
          icon={<CheckCircle size={12}/>} 
          trend="down"
          color="purple"
        />
      </div>

      {/* Main Dashboards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Panel 1: Incident Efficiency */}
        <motion.div 
          className="bg-[#0b1221] border border-slate-700 rounded-sm p-5 shadow-2xl relative overflow-hidden"
          whileHover={{ borderColor: '#38bdf8' }}
        >
          {/* Decorative corner */}
          <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-sre-primary/50"></div>

          <PanelHeader title={ui.charts.incident} query="avg(mttr) by (stage)" />
          
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={incidentData} layout="vertical" margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" horizontal={false} />
                <XAxis type="number" stroke="#475569" fontSize={10} tickLine={false} />
                <YAxis dataKey="name" type="category" stroke="#94a3b8" width={60} fontSize={12} tickLine={false} />
                <Tooltip 
                    contentStyle={{ backgroundColor: '#020617', borderColor: '#334155', color: '#fff', fontSize: '12px' }}
                    itemStyle={{ color: '#fff' }}
                    cursor={{fill: 'rgba(56, 189, 248, 0.1)'}}
                />
                <Bar dataKey="mtta" name={ui.charts.ack} stackId="a" fill="#0ea5e9" barSize={24} />
                <Bar dataKey="mtti" name={ui.charts.identify} stackId="a" fill="#6366f1" />
                <Bar dataKey="mttr" name={ui.charts.resolve} stackId="a" fill="#10b981" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="flex gap-6 mt-4 justify-start text-[10px] font-mono text-slate-400 border-t border-slate-800 pt-3">
             <div className="flex items-center"><div className="w-2 h-2 bg-sky-500 mr-2 rounded-full"></div>{ui.charts.ack}</div>
             <div className="flex items-center"><div className="w-2 h-2 bg-indigo-500 mr-2 rounded-full"></div>{ui.charts.identify}</div>
             <div className="flex items-center"><div className="w-2 h-2 bg-emerald-500 mr-2 rounded-full"></div>{ui.charts.resolve}</div>
          </div>
        </motion.div>

        {/* Panel 2: Disaster Recovery / Latency */}
        <motion.div 
          className="bg-[#0b1221] border border-slate-700 rounded-sm p-5 shadow-2xl relative"
          whileHover={{ borderColor: '#eab308' }}
        >
          <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-yellow-500/50"></div>
          <PanelHeader title={ui.charts.rto} query="histogram_quantile(0.99, rate(rto[5m]))" />

          <div className="h-64 w-full flex items-center justify-center relative">
             <ResponsiveContainer width="100%" height="100%">
               <AreaChart data={rtoData}>
                  <defs>
                    <linearGradient id="colorRto" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#eab308" stopOpacity={0.2}/>
                      <stop offset="95%" stopColor="#eab308" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorLat" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#38bdf8" stopOpacity={0.2}/>
                      <stop offset="95%" stopColor="#38bdf8" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                  <XAxis dataKey="time" stroke="#475569" fontSize={10} tickLine={false} axisLine={false} />
                  <YAxis stroke="#475569" fontSize={10} tickLine={false} axisLine={false} />
                  <Tooltip contentStyle={{ backgroundColor: '#020617', borderColor: '#334155', color: '#fff', fontSize: '12px' }} />
                  
                  {/* Two synced metrics */}
                  <Area type="monotone" dataKey="rto" stroke="#eab308" strokeWidth={2} fillOpacity={1} fill="url(#colorRto)" name="Recovery Time" />
                  <Area type="monotone" dataKey="latency" stroke="#38bdf8" strokeWidth={2} strokeDasharray="5 5" fillOpacity={1} fill="url(#colorLat)" name="Latency (ms)" />
               </AreaChart>
             </ResponsiveContainer>
          </div>
          <div className="flex justify-between items-center mt-4 text-[10px] font-mono text-slate-500 border-t border-slate-800 pt-3">
             <span>{ui.charts.window}</span>
             <span className="text-yellow-500 flex items-center gap-1"><AlertTriangle size={10} /> {ui.charts.trigger}</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default ImpactDashboard;