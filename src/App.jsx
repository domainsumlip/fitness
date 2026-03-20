import { useState, useEffect } from "react";
import { ChevronDown, ChevronUp, Utensils, Activity, Calendar, Clock, Target, TrendingUp, Droplet, Moon, Zap, Eye, Heart } from "lucide-react";

function useWidth() {
  var _s = useState(window.innerWidth);
  var w = _s[0];
  var set = _s[1];
  useEffect(function() {
    function handle() { set(window.innerWidth); }
    window.addEventListener("resize", handle);
    return function() { window.removeEventListener("resize", handle); };
  }, []);
  return w;
}

var tabList = [
  { key: "body", label: "Body", full: "Body Analysis", icon: Target },
  { key: "nutrition", label: "Nutrition", full: "Nutrition", icon: Utensils },
  { key: "training", label: "Training", full: "Training", icon: Activity },
  { key: "roadmap", label: "Roadmap", full: "Roadmap", icon: Calendar },
  { key: "daily", label: "Daily", full: "Daily Plan", icon: Clock },
];

var accent = "#2563EB";
var accentLight = "#EFF6FF";
var bdr = "#E5E7EB";
var bgCard = "#FFFFFF";
var bgPage = "#F9FAFB";
var textP = "#111827";
var textS = "#6B7280";
var textM = "#9CA3AF";

function Section(props) {
  return (
    <div style={{ marginBottom: 28 }}>
      <h2 style={{ fontSize: 18, fontWeight: 700, color: textP, margin: "0 0 4px" }}>{props.title}</h2>
      {props.subtitle ? <p style={{ fontSize: 13, color: textS, margin: "0 0 14px", lineHeight: 1.5 }}>{props.subtitle}</p> : <div style={{ height: 10 }} />}
      {props.children}
    </div>
  );
}

function StatCard(props) {
  return (
    <div style={{ background: bgCard, border: "1px solid " + bdr, borderRadius: 10, padding: "12px 14px" }}>
      <div style={{ fontSize: 10, color: textM, fontWeight: 600, letterSpacing: 0.5, marginBottom: 3, textTransform: "uppercase" }}>{props.label}</div>
      <div style={{ fontSize: 16, fontWeight: 700, color: textP }}>{props.value}</div>
    </div>
  );
}

function InfoCard(props) {
  return (
    <div style={{ background: bgCard, border: "1px solid " + bdr, borderRadius: 10, padding: 14, borderLeft: "3px solid " + (props.ac || accent) }}>
      <div style={{ fontSize: 13, fontWeight: 700, color: textP, marginBottom: 5 }}>{props.title}</div>
      <div style={{ fontSize: 13, color: textS, lineHeight: 1.6 }}>{props.body}</div>
    </div>
  );
}

function Btn(props) {
  var bg = props.active ? (props.color || accent) : bgCard;
  var bc = props.active ? (props.color || accent) : bdr;
  var fg = props.active ? "#fff" : textS;
  return (
    <button onClick={props.onClick} style={{
      background: bg, border: "1px solid " + bc, color: fg,
      borderRadius: 8, padding: "7px 14px", cursor: "pointer",
      fontSize: 12, fontWeight: 600, whiteSpace: "nowrap",
    }}>{props.label}</button>
  );
}

/* ────── BODY ────── */
function BodySection() {
  var w = useWidth();
  var sm = w < 600;
  var stats = [
    ["Height", "6'3\" / 190.5 cm"], ["Weight", "200 lbs / 90.7 kg"],
    ["Frame", "Meso-Ectomorph"], ["Maintenance", "~3,050 cal/day"],
    ["Target Weight", "188-198 lbs"], ["Target BF%", "10-12%"],
    ["Muscle Ceiling", "~215-225 lbs"], ["Timeline", "12-16 months"],
  ];
  var advantages = [
    ["Stride Length", "Longer limbs cover more ground per stride. With proper mechanics your top-end speed exceeds most people from physics alone."],
    ["Force at Lever End", "Longer arms generate more force at the contact point. Reach advantage cannot be trained into a shorter person."],
    ["Wingspan", "Arm span likely matches or exceeds height. Elite for catching, blocking, or reaching in any sport."],
    ["Muscle Volume", "Longer muscles have higher total volume potential. Genetic ceiling for lean mass is higher in absolute terms."],
  ];
  var challenges = [
    ["Long Femurs + Squats", "Thigh bones force excessive forward lean in back squats. Bulgarian split squats and hip hinges suit your levers far better."],
    ["Hip Flexor Tightness", "Tall frames accumulate tightness faster, directly capping sprint speed and jump height. Daily hip mobility is non-optional."],
    ["Greater Joint Range", "More ROM per rep means more joint stress. Push-ups, dips, and pull-ups require stricter form at full extension."],
    ["Slower Acceleration", "Taller athletes take longer to reach top speed. The first 5 yards need specific acceleration drills to close this gap."],
  ];
  return (
    <div>
      <Section title="Stats at a Glance">
        <div style={{ display: "grid", gridTemplateColumns: sm ? "1fr 1fr" : "repeat(auto-fill, minmax(160px, 1fr))", gap: 8 }}>
          {stats.map(function(s, i) { return <StatCard key={i} label={s[0]} value={s[1]} />; })}
        </div>
      </Section>
      <Section title="Frame Advantages" subtitle="Built-in physical edges at 6'3 that shorter athletes cannot replicate.">
        <div style={{ display: "grid", gridTemplateColumns: sm ? "1fr" : "repeat(auto-fill, minmax(260px, 1fr))", gap: 8 }}>
          {advantages.map(function(a, i) { return <InfoCard key={i} title={a[0]} body={a[1]} ac="#16A34A" />; })}
        </div>
      </Section>
      <Section title="Frame Challenges" subtitle="Structural realities to train around, not weaknesses, just different mechanics.">
        <div style={{ display: "grid", gridTemplateColumns: sm ? "1fr" : "repeat(auto-fill, minmax(260px, 1fr))", gap: 8 }}>
          {challenges.map(function(c, i) { return <InfoCard key={i} title={c[0]} body={c[1]} ac="#DC2626" />; })}
        </div>
      </Section>
      <Section title="Composition Reality Check">
        <div style={{ background: accentLight, border: "1px solid #BFDBFE", borderRadius: 10, padding: sm ? 14 : 20, fontSize: 13, color: "#1E40AF", lineHeight: 1.75 }}>
          At 200 lbs and 6'3", you're likely between <strong>15-22% body fat</strong>. During transformation the scale may barely move while your body completely changes shape. Your target is <strong>188-198 lbs at 10-12% BF</strong>, carrying ~168-178 lbs lean mass. A lean 190 looks dramatically different from a soft 200. Your natural ceiling is ~<strong>215-225 lbs lean</strong>. Reaching 60% puts you at 195-205 lbs of elite athletic mass.
        </div>
      </Section>
    </div>
  );
}

/* ────── NUTRITION ────── */
function NutritionSection() {
  var w = useWidth();
  var sm = w < 600;
  var _s = useState("recomp");
  var goal = _s[0]; var setGoal = _s[1];
  var goals = {
    recomp: { label: "Recomp", cals: 3050, carbs: 320, protein: 195, fat: 85, desc: "Eat at maintenance. Build muscle and lose fat simultaneously. Slower but no sacrifice required. Best starting point." },
    cut: { label: "Cut", cals: 2650, carbs: 240, protein: 200, fat: 75, desc: "400 calorie deficit. Prioritizes fat loss while preserving muscle. Lose 0.5-1 lb/week. Keep protein high." },
    bulk: { label: "Lean Bulk", cals: 3350, carbs: 400, protein: 195, fat: 90, desc: "300 calorie surplus. Prioritizes muscle growth with minimal fat gain. Best when already under 15% BF." },
  };
  var sel = goals[goal];
  var meals = [
    { time: "7:00 AM", name: "Power Start", items: ["4 whole eggs", "1 cup oats + berries", "Black coffee"], p: 32, carb: 60, f: 22, cal: 550 },
    { time: "10:00 AM", name: "Protein Bridge", items: ["Greek yogurt", "Banana", "Handful almonds"], p: 20, carb: 35, f: 14, cal: 340 },
    { time: "12:30 PM", name: "Performance Fuel", items: ["200g chicken/beef", "1.5 cups rice", "Mixed vegetables"], p: 45, carb: 65, f: 18, cal: 600 },
    { time: "Pre-WO", name: "Training Fuel", items: ["1 cup oats", "Greek yogurt", "Banana"], p: 28, carb: 50, f: 5, cal: 360 },
    { time: "Post-WO", name: "Recovery Window", items: ["200g salmon/beef", "1.5 cups white rice", "Berries + electrolytes"], p: 45, carb: 60, f: 14, cal: 550 },
    { time: "8:00 PM", name: "Overnight Build", items: ["200g steak", "Sweet potato", "Greens + olive oil"], p: 45, carb: 45, f: 20, cal: 540 },
  ];
  var supps = [
    ["Creatine Monohydrate", "5g daily", "Most researched supplement. Increases explosive power and sprint speed."],
    ["Vitamin D3 + K2", "4,000 IU + 100mcg", "Critical for testosterone, bones, and immunity. Most tall athletes are deficient."],
    ["Magnesium Glycinate", "300-400mg before bed", "Dramatically improves deep sleep quality. Most people are deficient."],
    ["Omega-3 Fish Oil", "2-3g EPA+DHA", "Reduces inflammation and speeds recovery. Key for long-limbed athletes."],
    ["Caffeine", "200-300mg pre-train", "Proven power output increase. Cycle off 1 week/month."],
  ];
  var macroDisplay = [["Calories", sel.cals], ["Protein", sel.protein + "g"], ["Carbs", sel.carbs + "g"], ["Fat", sel.fat + "g"]];
  return (
    <div>
      <Section title="Calorie and Macro Targets" subtitle="Select your current goal to see adjusted targets.">
        <div style={{ display: "flex", gap: 8, marginBottom: 14, flexWrap: "wrap" }}>
          {Object.keys(goals).map(function(k) { return <Btn key={k} label={goals[k].label} active={goal === k} onClick={function() { setGoal(k); }} />; })}
        </div>
        <div style={{ background: bgCard, border: "1px solid " + bdr, borderRadius: 10, padding: sm ? 14 : 20 }}>
          <p style={{ fontSize: 13, color: textS, margin: "0 0 14px", lineHeight: 1.6 }}>{sel.desc}</p>
          <div style={{ display: "grid", gridTemplateColumns: sm ? "repeat(2, 1fr)" : "repeat(4, 1fr)", gap: 8 }}>
            {macroDisplay.map(function(item) {
              return (
                <div key={item[0]} style={{ textAlign: "center", background: bgPage, borderRadius: 8, padding: "10px 6px" }}>
                  <div style={{ fontSize: 10, color: textM, fontWeight: 600, textTransform: "uppercase", marginBottom: 2 }}>{item[0]}</div>
                  <div style={{ fontSize: 20, fontWeight: 700, color: accent }}>{item[1]}</div>
                </div>
              );
            })}
          </div>
        </div>
      </Section>
      <Section title="Full Day Meal Plan">
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {meals.map(function(m, i) {
            var macros = [["P", m.p + "g"], ["C", m.carb + "g"], ["F", m.f + "g"], ["Cal", m.cal]];
            return (
              <div key={i} style={{ background: bgCard, border: "1px solid " + bdr, borderRadius: 10, padding: sm ? "12px 12px" : "14px 16px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", flexWrap: "wrap", gap: 8, marginBottom: 6 }}>
                  <div>
                    <div style={{ fontSize: 11, color: accent, fontWeight: 700, marginBottom: 1 }}>{m.time}</div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: textP }}>{m.name}</div>
                  </div>
                  <div style={{ display: "flex", gap: sm ? 10 : 14 }}>
                    {macros.map(function(mc) {
                      return (
                        <div key={mc[0]} style={{ textAlign: "center" }}>
                          <div style={{ fontSize: 9, color: textM, fontWeight: 700 }}>{mc[0]}</div>
                          <div style={{ fontSize: 12, fontWeight: 600, color: textP }}>{mc[1]}</div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div style={{ fontSize: 12, color: textS }}>{m.items.join(" · ")}</div>
              </div>
            );
          })}
        </div>
      </Section>
      <Section title="Supplement Stack">
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {supps.map(function(s, i) {
            return (
              <div key={i} style={{ background: bgCard, border: "1px solid " + bdr, borderRadius: 10, padding: sm ? 12 : 16, display: "flex", gap: 12, alignItems: "start" }}>
                <div style={{ background: accentLight, borderRadius: 8, width: 32, height: 32, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, color: accent, fontSize: 13, flexShrink: 0 }}>{i + 1}</div>
                <div style={{ minWidth: 0 }}>
                  <div style={{ fontSize: 14, fontWeight: 700, color: textP }}>{s[0]}</div>
                  <div style={{ fontSize: 11, color: accent, fontWeight: 600, marginBottom: 3 }}>{s[1]}</div>
                  <div style={{ fontSize: 13, color: textS, lineHeight: 1.5 }}>{s[2]}</div>
                </div>
              </div>
            );
          })}
        </div>
      </Section>
    </div>
  );
}

/* ────── TRAINING ────── */
function TrainingSection() {
  var w = useWidth();
  var sm = w < 600;
  var tagColors = { SWAP: "#DC2626", ADD: "#16A34A", ADJUST: "#D97706", PRIORITIZE: "#7C3AED", "NON-NEGOTIABLE": "#DC2626" };
  var adjustments = [
    ["SWAP", "Replace Standard Squats with Bulgarian Split Squat + Hip Hinge", "Long femurs cause excessive forward lean in back squats. Split squats and RDLs load your legs correctly for your lever length."],
    ["ADD", "Daily Hip Mobility - 10 min every morning", "Highest-return addition. Tight hip flexors from long legs cap sprint speed and jump height. Couch stretch, 90/90, deep lunge every morning."],
    ["ADJUST", "Pull-Up Grip Width", "Wider grip matches your proportions and reduces elbow stress. Never fully lock out. Keep a soft bend to protect longer joints."],
    ["ADD", "Wall-Drive Acceleration Drills", "Taller athletes accelerate slower from stops. Wall drives 3x10 reps before speed work programs the short powerful strides needed for initial acceleration."],
    ["PRIORITIZE", "Single-Leg Work at 60% of Lower Body", "Every sprint stride and jump is single-leg. Make 60% of lower body training unilateral: split squats, single-leg RDLs, step-ups, hip thrusts."],
    ["ADD", "Double Calf and Ankle Volume", "Long legs mean your calf complex works harder per stride. Single-leg calf raises on a step, 4x20 daily."],
    ["NON-NEGOTIABLE", "Deload Every 4th Week", "Greater ROM per rep means more joint stress. Cut volume 50%, keep intensity, for 7 days every 4th week."],
  ];
  var mobility = [
    ["Couch Stretch", "90s/side", "Hip flexors"],
    ["Hip 90/90", "90s/side", "Int/ext rotation"],
    ["Deep Lunge + Rotation", "60s/side", "Hip flexor + thoracic"],
    ["Pigeon Pose", "60s/side", "Glute + ext rotator"],
    ["Deep Squat Hold", "2 min", "Ankle + hip + thoracic"],
    ["Doorframe Pec Stretch", "60s", "Chest + front shoulder"],
  ];
  return (
    <div>
      <Section title="Frame-Specific Adjustments" subtitle="Training modifications calibrated for your 6'3 frame and lever lengths.">
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {adjustments.map(function(a, i) {
            var tc = tagColors[a[0]] || accent;
            return (
              <div key={i} style={{ background: bgCard, border: "1px solid " + bdr, borderRadius: 10, padding: sm ? 12 : 16 }}>
                <div style={{ marginBottom: 6, display: "flex", flexWrap: "wrap", alignItems: "center", gap: 6 }}>
                  <span style={{ display: "inline-block", fontSize: 9, fontWeight: 700, padding: "2px 8px", borderRadius: 4, background: tc + "18", color: tc, letterSpacing: 0.5 }}>{a[0]}</span>
                  <span style={{ fontSize: 13, fontWeight: 700, color: textP }}>{a[1]}</span>
                </div>
                <div style={{ fontSize: 13, color: textS, lineHeight: 1.6 }}>{a[2]}</div>
              </div>
            );
          })}
        </div>
      </Section>
      <Section title="Daily Hip Mobility - 10 Minutes" subtitle="The single highest-return daily habit for your frame. Every morning including rest days.">
        <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
          {mobility.map(function(m, i) {
            return (
              <div key={i} style={{ background: bgCard, border: "1px solid " + bdr, borderRadius: 8, padding: "10px 14px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 8 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap", minWidth: 0 }}>
                  <span style={{ fontSize: 12, color: accent, fontWeight: 700 }}>{i + 1}</span>
                  <span style={{ fontSize: 13, fontWeight: 600, color: textP }}>{m[0]}</span>
                  {!sm && <span style={{ fontSize: 11, color: textM }}>{m[2]}</span>}
                </div>
                <div style={{ fontSize: 12, fontWeight: 600, color: textS, whiteSpace: "nowrap" }}>{m[1]}</div>
              </div>
            );
          })}
        </div>
      </Section>
    </div>
  );
}

/* ────── EXERCISE + DAY CARDS ────── */
function ExCard(props) {
  var w = useWidth();
  var sm = w < 500;
  var macros = [["Sets", props.sets], ["Reps", props.reps], ["Rest", props.rest]];
  return (
    <div style={{ background: bgPage, border: "1px solid " + bdr, borderRadius: 8, padding: "10px 12px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: sm ? "start" : "center", flexDirection: sm ? "column" : "row", gap: sm ? 6 : 12 }}>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: textP }}>{props.name}</div>
          {props.notes && <div style={{ fontSize: 11, color: textM, lineHeight: 1.45, marginTop: 2 }}>{props.notes}</div>}
        </div>
        <div style={{ display: "flex", gap: 10, flexShrink: 0 }}>
          {macros.map(function(mc) {
            return (
              <div key={mc[0]} style={{ textAlign: "center", minWidth: 32 }}>
                <div style={{ fontSize: 8, color: textM, fontWeight: 700, textTransform: "uppercase" }}>{mc[0]}</div>
                <div style={{ fontSize: 12, fontWeight: 600, color: textP }}>{mc[1]}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function DayCard(props) {
  var _s = useState(false);
  var open = _s[0]; var setOpen = _s[1];
  var isRest = props.exercises.length === 0;
  var lc = isRest ? bdr : (props.phaseColor || accent);
  return (
    <div style={{ background: bgCard, border: "1px solid " + bdr, borderRadius: 10, overflow: "hidden", marginBottom: 6, opacity: isRest ? 0.5 : 1 }}>
      <div
        onClick={function() { if (!isRest) setOpen(!open); }}
        style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "11px 14px", cursor: isRest ? "default" : "pointer", borderLeft: "3px solid " + lc, gap: 8 }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap", minWidth: 0 }}>
          <span style={{ fontSize: 11, fontWeight: 700, color: props.phaseColor || accent, flexShrink: 0 }}>{props.day}</span>
          <span style={{ fontSize: 13, fontWeight: 700, color: textP }}>{props.title}</span>
          {props.focus ? <span style={{ fontSize: 10, color: textM, fontWeight: 600 }}>{props.focus}</span> : null}
        </div>
        {!isRest && (
          <div style={{ display: "flex", alignItems: "center", gap: 4, color: textM, fontSize: 11, flexShrink: 0 }}>
            <span>{props.exercises.length}</span> {open ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          </div>
        )}
      </div>
      {open && !isRest && (
        <div style={{ padding: "0 14px 12px", display: "flex", flexDirection: "column", gap: 4 }}>
          {props.exercises.map(function(ex, i) { return <ExCard key={i} name={ex.name} sets={ex.sets} reps={ex.reps} rest={ex.rest} notes={ex.notes} />; })}
        </div>
      )}
    </div>
  );
}

/* ── Workout data ── */
var pw = {
  0: [
    { day: "MON", title: "Full Body Push + Legs", focus: "STRENGTH", exercises: [
      { name: "Push-Ups (Incline to Flat)", sets: "4", reps: "8-12", rest: "90s", notes: "Start elevated if needed. Full ROM, elbows 45 degrees. Slow 3s eccentric." },
      { name: "Bulgarian Split Squats", sets: "3", reps: "8/leg", rest: "90s", notes: "Frame-specific squat swap. Rear foot on bench, torso upright." },
      { name: "Pike Push-Ups", sets: "3", reps: "6-10", rest: "90s", notes: "Feet elevated. Shoulder builder toward handstand push-ups." },
      { name: "Glute Bridges", sets: "3", reps: "15", rest: "60s", notes: "2s squeeze at top. Foundation for single-leg hip thrust." },
      { name: "Dead Hang", sets: "3", reps: "30-45s", rest: "60s", notes: "Grip + spine decompression for tall frames." },
      { name: "Single-Leg Calf Raises", sets: "4", reps: "20/leg", rest: "45s", notes: "Full ROM on step. Double volume for long-leg mechanics." },
    ]},
    { day: "TUE", title: "Recovery + Mobility", focus: "", exercises: [
      { name: "Hip Mobility Flow", sets: "1", reps: "10 min", rest: "-", notes: "Couch stretch, 90/90, deep lunge rotation, pigeon, deep squat hold." },
      { name: "Light Walk or Swim", sets: "1", reps: "20-30 min", rest: "-", notes: "Low intensity. Blood flow recovery." },
      { name: "Foam Roll Full Body", sets: "1", reps: "10 min", rest: "-", notes: "Quads, IT band, lats, thoracic spine." },
    ]},
    { day: "WED", title: "Speed + Plyometrics", focus: "POWER", exercises: [
      { name: "Wall Drives", sets: "3", reps: "10/leg", rest: "60s", notes: "Explosive knee drive. Acceleration drill for tall athletes." },
      { name: "Broad Jumps", sets: "4", reps: "5", rest: "90s", notes: "Max distance. Full hip extension. Stick landing 2s." },
      { name: "Sprint Intervals (40 yd)", sets: "6", reps: "1", rest: "2 min", notes: "90% effort. Focus on first 10 yards." },
      { name: "Box Jumps (step down)", sets: "3", reps: "5", rest: "90s", notes: "20-24 inch box. Explode up, step down." },
      { name: "Single-Leg Bounds", sets: "3", reps: "6/leg", rest: "90s", notes: "Max distance per bound." },
    ]},
    { day: "THU", title: "Rest Day", focus: "RECOVERY", exercises: [] },
    { day: "FRI", title: "Full Body Pull + Legs", focus: "STRENGTH", exercises: [
      { name: "Pull-Ups (or Negatives)", sets: "4", reps: "5-8", rest: "2 min", notes: "Wider grip for your frame. Soft lockout." },
      { name: "Single-Leg RDL", sets: "3", reps: "8/leg", rest: "90s", notes: "Hamstring and balance builder." },
      { name: "Australian Rows", sets: "4", reps: "10-12", rest: "90s", notes: "Feet elevated. Squeeze shoulder blades." },
      { name: "Single-Leg Hip Thrusts", sets: "3", reps: "10/leg", rest: "60s", notes: "Glute power for sprints and jumps." },
      { name: "Dip Negatives", sets: "3", reps: "5-8", rest: "90s", notes: "Slow 4s lowering. Protect shoulders." },
      { name: "Single-Leg Calf Raises", sets: "4", reps: "20/leg", rest: "45s", notes: "Daily calf volume for stride spring." },
    ]},
    { day: "SAT", title: "Conditioning + Core", focus: "ENDURANCE", exercises: [
      { name: "Burpee Intervals", sets: "5", reps: "10", rest: "60s", notes: "Full extension top, chest to floor bottom." },
      { name: "Hollow Body Hold", sets: "4", reps: "30s", rest: "45s", notes: "Lower back pressed to floor." },
      { name: "Mountain Climbers", sets: "4", reps: "20/side", rest: "45s", notes: "Controlled pace. Hip flexor activation." },
      { name: "L-Sit Progression", sets: "3", reps: "15-20s", rest: "60s", notes: "Hands on floor, lift legs. Tuck if needed." },
      { name: "Bear Crawl", sets: "3", reps: "40 yd", rest: "60s", notes: "Knees 1 inch off ground." },
    ]},
    { day: "SUN", title: "Full Rest", focus: "RECOVERY", exercises: [] },
  ],
  1: [
    { day: "MON", title: "Upper Push", focus: "HYPERTROPHY", exercises: [
      { name: "Diamond Push-Ups", sets: "4", reps: "10-15", rest: "90s", notes: "Tricep dominant. Hands close, elbows tight." },
      { name: "Pike Push-Ups (elevated)", sets: "4", reps: "8-10", rest: "90s", notes: "Approaching HSPU territory." },
      { name: "Pseudo Planche Push-Ups", sets: "3", reps: "6-10", rest: "2 min", notes: "Hands turned out, lean forward." },
      { name: "Dips", sets: "4", reps: "8-12", rest: "90s", notes: "Slight forward lean. Controlled descent." },
      { name: "Archer Push-Ups", sets: "3", reps: "6/side", rest: "90s", notes: "One-arm push-up progression." },
      { name: "Tricep Bench Dips", sets: "3", reps: "15", rest: "60s", notes: "Feet elevated. Burnout finisher." },
    ]},
    { day: "TUE", title: "Lower Power", focus: "STRENGTH + SPEED", exercises: [
      { name: "Pistol Squat Progressions", sets: "4", reps: "5/leg", rest: "2 min", notes: "Assisted to full. Ultimate single-leg test." },
      { name: "Nordic Hamstring Curls", sets: "3", reps: "5-8", rest: "2 min", notes: "Eccentric focus. Injury-proof hamstrings." },
      { name: "Depth Jumps (12-18 in)", sets: "4", reps: "5", rest: "2 min", notes: "Step off, land, explode." },
      { name: "Single-Leg Hip Thrusts", sets: "4", reps: "10/leg", rest: "90s", notes: "Backpack or band for load." },
      { name: "Sprint Intervals (60 yd)", sets: "8", reps: "1", rest: "2 min", notes: "95% effort. Top-end speed." },
      { name: "Single-Leg Calf Raises", sets: "4", reps: "25/leg", rest: "45s", notes: "Building serious spring." },
    ]},
    { day: "WED", title: "Upper Pull", focus: "HYPERTROPHY", exercises: [
      { name: "Pull-Ups (wide grip)", sets: "4", reps: "8-10", rest: "2 min", notes: "Full scapular engagement." },
      { name: "Chin-Ups", sets: "3", reps: "8-10", rest: "90s", notes: "Bicep emphasis. Controlled negative." },
      { name: "Typewriter Pull-Ups", sets: "3", reps: "4/side", rest: "2 min", notes: "One-arm pull-up progression." },
      { name: "Australian Rows", sets: "4", reps: "12", rest: "60s", notes: "1s pause at top." },
      { name: "Face Pulls (band)", sets: "3", reps: "15", rest: "45s", notes: "Shoulder health for tall athletes." },
      { name: "Hanging Leg Raises", sets: "4", reps: "10", rest: "60s", notes: "Straight legs to parallel." },
    ]},
    { day: "THU", title: "Active Recovery", focus: "MOBILITY", exercises: [
      { name: "Full Hip Mobility Flow", sets: "1", reps: "15 min", rest: "-", notes: "Extended morning routine." },
      { name: "Light Jog or Swim", sets: "1", reps: "20 min", rest: "-", notes: "Zone 2. Active recovery only." },
      { name: "Foam Roll + Lacrosse Ball", sets: "1", reps: "15 min", rest: "-", notes: "Quads, hip flexors, lats, pecs." },
    ]},
    { day: "FRI", title: "Lower Strength", focus: "MAX EFFORT", exercises: [
      { name: "Bulgarian Split Squats (weighted)", sets: "5", reps: "6/leg", rest: "2 min", notes: "Primary lower body strength builder." },
      { name: "Single-Leg RDL (weighted)", sets: "4", reps: "8/leg", rest: "90s", notes: "Posterior chain + balance." },
      { name: "Shrimp Squat Progressions", sets: "3", reps: "5/leg", rest: "2 min", notes: "Advanced single-leg. Squat deep." },
      { name: "Box Jumps (30+ in)", sets: "4", reps: "5", rest: "2 min", notes: "Explosive hip extension. Step down." },
      { name: "Broad Jump + Sprint", sets: "5", reps: "1 combo", rest: "2 min", notes: "Horizontal power into acceleration." },
      { name: "Single-Leg Calf Raises", sets: "4", reps: "25/leg", rest: "45s", notes: "Non-negotiable daily volume." },
    ]},
    { day: "SAT", title: "Conditioning + Core", focus: "WORK CAPACITY", exercises: [
      { name: "Muscle-Up Progressions", sets: "5", reps: "3-5", rest: "2 min", notes: "Jumping to kipping to strict." },
      { name: "Hollow Body Rocks", sets: "4", reps: "20", rest: "45s", notes: "Dynamic core tension." },
      { name: "L-Sit Hold", sets: "4", reps: "20-30s", rest: "60s", notes: "Full leg extension. Compress hard." },
      { name: "Burpee Broad Jumps", sets: "5", reps: "8", rest: "60s", notes: "Power endurance." },
      { name: "Planche Lean Hold", sets: "4", reps: "15-20s", rest: "60s", notes: "Building toward planche." },
      { name: "Dragon Flag Negatives", sets: "3", reps: "5", rest: "60s", notes: "Slow 5s lowering." },
    ]},
    { day: "SUN", title: "Full Rest", focus: "RECOVERY", exercises: [] },
  ],
  2: [
    { day: "MON", title: "Upper Push Heavy", focus: "MAX STRENGTH", exercises: [
      { name: "Handstand Push-Ups (wall)", sets: "5", reps: "5-8", rest: "2 min", notes: "Forehead to floor." },
      { name: "One-Arm Push-Up Progressions", sets: "4", reps: "3-5/side", rest: "2 min", notes: "Straddle to feet together." },
      { name: "Ring Dips (weighted)", sets: "4", reps: "8-10", rest: "2 min", notes: "Rings add instability + deeper ROM." },
      { name: "Pseudo Planche Push-Ups", sets: "4", reps: "8-10", rest: "90s", notes: "Aggressive lean." },
      { name: "Planche Progressions", sets: "5", reps: "10-15s", rest: "90s", notes: "Tuck to advanced tuck to straddle." },
      { name: "Freestanding Handstand", sets: "5", reps: "20-30s", rest: "60s", notes: "Balance + overhead stability." },
    ]},
    { day: "TUE", title: "Lower Power + Speed", focus: "EXPLOSIVE", exercises: [
      { name: "Pistol Squats (weighted)", sets: "5", reps: "5/leg", rest: "2 min", notes: "Backpack or vest. Full depth." },
      { name: "Depth Jumps (24 in)", sets: "5", reps: "4", rest: "2 min", notes: "Maximum reactive strength." },
      { name: "Nordic Curls (full)", sets: "4", reps: "6-8", rest: "2 min", notes: "Full eccentric + concentric." },
      { name: "Sprint Intervals (80 yd)", sets: "8", reps: "1", rest: "2.5m", notes: "97% effort. Full top-end speed." },
      { name: "Single-Leg Bounds", sets: "4", reps: "8/leg", rest: "90s", notes: "Power transfer to sprinting." },
      { name: "Weighted Calf Raises", sets: "4", reps: "25/leg", rest: "45s", notes: "Peak spring development." },
    ]},
    { day: "WED", title: "Upper Pull Heavy", focus: "MAX STRENGTH", exercises: [
      { name: "One-Arm Pull-Up Progressions", sets: "5", reps: "2-4/side", rest: "2.5m", notes: "Assisted to negatives to full." },
      { name: "Muscle-Ups (strict)", sets: "4", reps: "4-6", rest: "2 min", notes: "Clean transition. No kip." },
      { name: "Front Lever Progressions", sets: "5", reps: "10-15s", rest: "90s", notes: "Tuck to straddle to full." },
      { name: "Weighted Pull-Ups", sets: "4", reps: "5-6", rest: "2 min", notes: "Strength base for one-arm work." },
      { name: "Archer Rows (rings)", sets: "3", reps: "6/side", rest: "90s", notes: "Shift to one arm progressively." },
      { name: "Hanging Windshield Wipers", sets: "3", reps: "8/side", rest: "60s", notes: "Elite rotational core." },
    ]},
    { day: "THU", title: "Recovery + Skills", focus: "MOBILITY", exercises: [
      { name: "Extended Hip Mobility Flow", sets: "1", reps: "15 min", rest: "-", notes: "Full routine. Highest-return habit." },
      { name: "Handstand Practice", sets: "1", reps: "15 min", rest: "-", notes: "Freestanding balance work." },
      { name: "Skill Work (levers, L-sits)", sets: "1", reps: "15 min", rest: "-", notes: "Low intensity. Groove patterns." },
      { name: "Foam Roll + Stretch", sets: "1", reps: "10 min", rest: "-", notes: "Focus on tight spots." },
    ]},
    { day: "FRI", title: "Lower Strength + Plyo", focus: "HYBRID", exercises: [
      { name: "Shrimp Squats (weighted)", sets: "4", reps: "5/leg", rest: "2 min", notes: "Deep single-leg. Advanced." },
      { name: "Bulgarian Split Squats (heavy)", sets: "4", reps: "6/leg", rest: "2 min", notes: "Maximal loading." },
      { name: "Box Jump to Broad Jump", sets: "5", reps: "3", rest: "2 min", notes: "Multi-directional power." },
      { name: "Single-Leg RDL (heavy)", sets: "4", reps: "6/leg", rest: "90s", notes: "Posterior chain under load." },
      { name: "Sprint/Backpedal/Sprint", sets: "6", reps: "20yd ea", rest: "2 min", notes: "Decel and re-acceleration." },
      { name: "Weighted Calf Raises", sets: "4", reps: "25/leg", rest: "45s", notes: "Peak Achilles loading." },
    ]},
    { day: "SAT", title: "Full Body Skills", focus: "PEAK", exercises: [
      { name: "Muscle-Up Complexes", sets: "4", reps: "3+3 dips", rest: "2 min", notes: "MU into ring dips." },
      { name: "Planche + Front Lever SS", sets: "5", reps: "10s ea", rest: "90s", notes: "Alternate holds." },
      { name: "Pistol + Box Jump SS", sets: "4", reps: "3+3", rest: "2 min", notes: "Post-activation potentiation." },
      { name: "Dragon Flags (full)", sets: "4", reps: "6-8", rest: "60s", notes: "Peak core movement." },
      { name: "Conditioning Circuit x4", sets: "4", reps: "full", rest: "60s", notes: "10 burpees, 5 PU, 10 jump sq, 20 mtn climbers." },
      { name: "Handstand Walk Practice", sets: "5", reps: "max", rest: "60s", notes: "Balance + shoulder endurance." },
    ]},
    { day: "SUN", title: "Full Rest", focus: "RECOVERY", exercises: [] },
  ],
};

/* ────── ROADMAP ────── */
function RoadmapSection() {
  var w = useWidth();
  var sm = w < 600;
  var _s = useState(0);
  var ap = _s[0]; var setAp = _s[1];
  var phases = [
    { phase: "Phase 1", title: "Foundation", months: "Mo 1-6", color: "#2563EB",
      goal: "Build the base. Fix movement patterns. Establish nutrition habits. Lock in sleep.",
      milestones: ["Protein hitting 190g daily", "Sleep 8+ hours consistently", "Hip mobility daily without fail", "Movement patterns dialed", "Creatine loaded daily"],
      expected: ["15-20% strength increase", "2-4% body fat reduction", "Noticeable composition change", "Sprint mechanics improved", "1-3 inch vertical increase"],
      training: "3-4 days/week full body. Focus on form over intensity. Wednesday speed sessions non-negotiable.",
      nutrition: "Recomp phase. Eat at maintenance 3,050 cal. Nail protein target above all else.",
    },
    { phase: "Phase 2", title: "Development", months: "Mo 7-12", color: "#16A34A",
      goal: "Stack intensity across all pillars simultaneously. This is where exponential change happens.",
      milestones: ["Progressive overload every 2 weeks", "Sprint volume increasing weekly", "Track vertical jump monthly", "Blood work: D3, testosterone, iron", "Introduce depth jumps"],
      expected: ["20-30% more strength", "3-5% more fat reduction", "3-6 inch vertical increase", "Faster sprint times", "Visible body transformation"],
      training: "5-6 days/week. Upper/lower split. Speed twice weekly. Deload every 4th week.",
      nutrition: "Under 15% BF: lean bulk 3,350 cal. Over 15%: cut 2,650 cal. Reassess month 9.",
    },
    { phase: "Phase 3", title: "Optimization", months: "Mo 13-18", color: "#D97706",
      goal: "Reach 60% of genetic ceiling. Fine-tune everything. The training becomes your identity.",
      milestones: ["10-12% body fat", "188-198 lbs lean", "Vertical 6-10 in above baseline", "40-yard dash faster", "Protocol on autopilot"],
      expected: ["Top 10-15% athletically", "Near-elite composition", "Reaction time improved", "Full transformation visible", "Platform for 80%+"],
      training: "6 days/week. Periodized. Sport-specific layers. Planned performance peaks.",
      nutrition: "Maintenance 3,050 cal. Precision carb timing. Composition maintained.",
    },
  ];
  var p = phases[ap];
  var weekData = pw[ap] || [];
  var projections = [
    ["Month 0", "200 lbs", "~18%", "~164 lbs"],
    ["Month 3", "196 lbs", "~15%", "~167 lbs"],
    ["Month 6", "193 lbs", "~13%", "~168 lbs"],
    ["Month 9", "191 lbs", "~12%", "~168 lbs"],
    ["Month 12", "192 lbs", "~11%", "~171 lbs"],
    ["Month 18", "195 lbs", "~10%", "~176 lbs"],
  ];
  var focusMsgs = [
    "Focus: master every movement with perfect form before adding difficulty. If you can't do 4x10 clean reps, regress and build up.",
    "Focus: progressive overload every 2 weeks. Harder variations, more volume, added load. If you hit the top of the rep range, progress.",
    "Focus: skill mastery and peak expression. Muscle-ups, HSPUs, pistols, front levers are your benchmarks."
  ];
  return (
    <div>
      <Section title="18-Month Roadmap" subtitle="Select a phase to see the full plan, milestones, and weekly sessions.">
        <div style={{ display: "flex", gap: 6, marginBottom: 18, flexWrap: "wrap" }}>
          {phases.map(function(ph, i) { return <Btn key={i} label={sm ? ph.phase : ph.phase + " - " + ph.months} active={ap === i} onClick={function() { setAp(i); }} color={ph.color} />; })}
        </div>
        <div style={{ borderLeft: "3px solid " + p.color, paddingLeft: sm ? 14 : 20, marginBottom: 24 }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: p.color, textTransform: "uppercase", letterSpacing: 1, marginBottom: 2 }}>{p.phase}</div>
          <div style={{ fontSize: sm ? 18 : 22, fontWeight: 700, color: textP, marginBottom: 6, fontFamily: "Georgia, serif" }}>{p.title}</div>
          <div style={{ fontSize: 13, color: textS, marginBottom: 16, lineHeight: 1.6 }}>{p.goal}</div>
          <div style={{ display: "grid", gridTemplateColumns: sm ? "1fr" : "1fr 1fr", gap: 14, marginBottom: 14 }}>
            <div>
              <div style={{ fontSize: 10, fontWeight: 700, color: p.color, letterSpacing: 1, marginBottom: 8, textTransform: "uppercase" }}>Milestones</div>
              {p.milestones.map(function(m, i) {
                return (
                  <div key={i} style={{ display: "flex", gap: 6, marginBottom: 5, fontSize: 12, color: textS, lineHeight: 1.5 }}>
                    <span style={{ color: p.color, fontWeight: 700, flexShrink: 0 }}>{">"}</span><span>{m}</span>
                  </div>
                );
              })}
            </div>
            <div>
              <div style={{ fontSize: 10, fontWeight: 700, color: textM, letterSpacing: 1, marginBottom: 8, textTransform: "uppercase" }}>Expected Results</div>
              {p.expected.map(function(e, i) {
                return (
                  <div key={i} style={{ display: "flex", gap: 6, marginBottom: 5, fontSize: 12, color: textS, lineHeight: 1.5 }}>
                    <span style={{ color: "#16A34A", flexShrink: 0 }}>{"✓"}</span><span>{e}</span>
                  </div>
                );
              })}
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: sm ? "1fr" : "1fr 1fr", gap: 8 }}>
            {[["Training", p.training], ["Nutrition", p.nutrition]].map(function(item) {
              return (
                <div key={item[0]} style={{ background: bgPage, border: "1px solid " + bdr, borderRadius: 8, padding: 12 }}>
                  <div style={{ fontSize: 10, fontWeight: 700, color: p.color, letterSpacing: 1, marginBottom: 3, textTransform: "uppercase" }}>{item[0]}</div>
                  <div style={{ fontSize: 12, color: textS, lineHeight: 1.6 }}>{item[1]}</div>
                </div>
              );
            })}
          </div>
        </div>
      </Section>
      <Section title={p.phase + " Weekly Sessions"} subtitle="Tap any day to expand exercises. Every 4th week: deload, cut volume 50%.">
        {weekData.map(function(d, i) { return <DayCard key={i} day={d.day} title={d.title} focus={d.focus} exercises={d.exercises} phaseColor={p.color} />; })}
        <div style={{ marginTop: 10, background: p.color + "12", border: "1px solid " + p.color + "33", borderRadius: 8, padding: "10px 14px", fontSize: 12, color: p.color, lineHeight: 1.6 }}>
          {focusMsgs[ap]}
        </div>
      </Section>
      <Section title="Body Composition Projections">
        <div style={{ display: "grid", gridTemplateColumns: sm ? "repeat(2, 1fr)" : "repeat(auto-fill, minmax(130px, 1fr))", gap: 8 }}>
          {projections.map(function(pr, i) {
            return (
              <div key={i} style={{ background: bgCard, border: "1px solid " + bdr, borderRadius: 10, padding: 12 }}>
                <div style={{ fontSize: 10, fontWeight: 700, color: accent, letterSpacing: 0.5, marginBottom: 4 }}>{pr[0]}</div>
                <div style={{ fontSize: 15, fontWeight: 700, color: textP }}>{pr[1]}</div>
                <div style={{ fontSize: 11, color: textS }}>{"BF: " + pr[2]}</div>
                <div style={{ fontSize: 11, color: textM }}>{"Lean: " + pr[3]}</div>
              </div>
            );
          })}
        </div>
        <div style={{ marginTop: 10, fontSize: 12, color: textM, lineHeight: 1.6 }}>
          Realistic projections with consistent training and nutrition. 164 to 176 lbs lean mass is about 12 lbs of muscle over 18 months, near the natural gain ceiling for your frame.
        </div>
      </Section>
    </div>
  );
}

/* ────── DAILY ────── */
function DailySection() {
  var w = useWidth();
  var sm = w < 600;
  var nonneg = [
    [Droplet, "Hydration", "100+ oz", "BW/2 = oz min"],
    [TrendingUp, "Protein", "190-200g", "Every day"],
    [Moon, "Sleep", "8.5 hrs", "Same wake time"],
    [Zap, "Creatine", "5g", "Any time, daily"],
    [Activity, "Hip Mob.", "10 min", "Every morning"],
    [Eye, "Eye-Hand", "10 min", "Coordination"],
    [Heart, "Movement", "Train/walk", "Never sedentary"],
  ];
  var schedule = [
    ["6:30 AM", "Wake up", "Same time every day. Hormone release is timed to this anchor."],
    ["6:35 AM", "16 oz water", "Before coffee or phone. Rehydrate after overnight loss."],
    ["6:40 AM", "Hip mobility", "Couch stretch, 90/90, deep lunge. Most important habit."],
    ["7:00 AM", "Breakfast", "30-35g protein. 4 eggs + oats + berries."],
    ["7:30 AM", "Eye-hand work", "Wall ball, juggling, reaction drops. 10 min."],
    ["10:00 AM", "Snack", "Greek yogurt + banana + almonds. Keep MPS elevated."],
    ["12:30 PM", "Lunch", "40-45g protein. Chicken/beef + rice + vegetables."],
    ["Pre-WO", "Pre-workout", "60-90 min before. Oats/rice + protein + fruit."],
    ["Training", "Session", "Follow the plan. Don't improvise. Trust the structure."],
    ["Post-WO", "Post-workout", "Protein + fast carbs within 45 min."],
    ["8:00 PM", "Dinner", "40-45g protein. Beef/salmon + complex carbs + greens."],
    ["9:00 PM", "Screens off", "Blue light suppresses melatonin. Lights dim."],
    ["9:30 PM", "Magnesium", "300mg glycinate. 30-60 min before sleep."],
    ["10:00 PM", "Sleep", "8.5 hr target. Room dark and cool (65-68 F)."],
  ];
  return (
    <div>
      <Section title="7 Daily Non-Negotiables" subtitle="These compound daily. Miss one occasionally, fine. Miss them habitually and your ceiling drops.">
        <div style={{ display: "grid", gridTemplateColumns: sm ? "repeat(2, 1fr)" : "repeat(auto-fill, minmax(115px, 1fr))", gap: 8 }}>
          {nonneg.map(function(item, i) {
            var Icon = item[0];
            return (
              <div key={i} style={{ background: bgCard, border: "1px solid " + bdr, borderRadius: 10, padding: sm ? 12 : 14, textAlign: "center" }}>
                <Icon size={20} color={accent} style={{ marginBottom: 4 }} />
                <div style={{ fontSize: 9, fontWeight: 700, color: textM, textTransform: "uppercase", letterSpacing: 0.3, marginBottom: 2 }}>{item[1]}</div>
                <div style={{ fontSize: 15, fontWeight: 700, color: textP }}>{item[2]}</div>
                <div style={{ fontSize: 10, color: textM, marginTop: 1 }}>{item[3]}</div>
              </div>
            );
          })}
        </div>
      </Section>
      <Section title="Ideal Day Schedule">
        <div style={{ background: bgCard, border: "1px solid " + bdr, borderRadius: 10, overflow: "hidden" }}>
          {schedule.map(function(s, i) {
            return (
              <div key={i} style={{ display: "grid", gridTemplateColumns: sm ? "70px 1fr" : "90px 1fr", gap: sm ? 8 : 14, padding: sm ? "10px 12px" : "12px 16px", borderBottom: i < schedule.length - 1 ? "1px solid " + bdr : "none" }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: accent, paddingTop: 1 }}>{s[0]}</div>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: textP, marginBottom: 1 }}>{s[1]}</div>
                  <div style={{ fontSize: 12, color: textS, lineHeight: 1.45 }}>{s[2]}</div>
                </div>
              </div>
            );
          })}
        </div>
      </Section>
    </div>
  );
}

/* ────── APP SHELL ────── */
export default function TransformationPlan() {
  var w = useWidth();
  var sm = w < 600;
  var _s = useState("body");
  var active = _s[0]; var setActive = _s[1];
  var render = function() {
    if (active === "body") return <BodySection />;
    if (active === "nutrition") return <NutritionSection />;
    if (active === "training") return <TrainingSection />;
    if (active === "roadmap") return <RoadmapSection />;
    if (active === "daily") return <DailySection />;
    return null;
  };
  return (
    <div style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif", background: bgPage, minHeight: "100vh", color: textP }}>
      {/* Header */}
      <div style={{ background: "#fff", borderBottom: "1px solid " + bdr, position: "sticky", top: 0, zIndex: 10, padding: sm ? "12px 14px 0" : "16px 20px 0" }}>
        <div style={{ marginBottom: 10 }}>
          <div style={{ fontSize: 10, fontWeight: 700, color: accent, letterSpacing: 1, textTransform: "uppercase", marginBottom: 2 }}>Performance Blueprint</div>
          <h1 style={{ margin: 0, fontSize: sm ? 18 : "clamp(18px, 3vw, 26px)", fontWeight: 800, color: textP, lineHeight: 1.2 }}>
            Complete Transformation Plan
          </h1>
          {!sm && <p style={{ margin: "3px 0 0", fontSize: 13, color: textS }}>{"Personalized for 6'3\" · 200 lbs · Calisthenics focus"}</p>}
        </div>
        {/* Tab bar - horizontal scroll on mobile */}
        <div style={{ display: "flex", gap: 2, overflowX: "auto", WebkitOverflowScrolling: "touch", marginBottom: -1, paddingBottom: 0, scrollbarWidth: "none" }}>
          {tabList.map(function(tab) {
            var Icon = tab.icon;
            var isActive = active === tab.key;
            return (
              <button key={tab.key} onClick={function() { setActive(tab.key); }} style={{
                background: isActive ? "#fff" : "transparent",
                border: "1px solid " + (isActive ? bdr : "transparent"),
                borderBottom: isActive ? "1px solid #fff" : "1px solid " + bdr,
                borderRadius: "8px 8px 0 0",
                color: isActive ? accent : textM,
                padding: sm ? "7px 10px" : "8px 14px", cursor: "pointer",
                fontSize: sm ? 11 : 12, fontWeight: isActive ? 700 : 500,
                display: "flex", alignItems: "center", gap: 5,
                whiteSpace: "nowrap", flexShrink: 0,
              }}>
                <Icon size={sm ? 12 : 14} />
                <span>{sm ? tab.label : tab.full}</span>
              </button>
            );
          })}
        </div>
      </div>
      {/* Content */}
      <div style={{ padding: sm ? "16px 14px" : "24px 20px", maxWidth: 920, margin: "0 auto" }}>
        {render()}
      </div>
    </div>
  );
}
