import { useState } from "react";

const sectionMeta = {
  body:      { label: "Body Analysis",     icon: "📐", color: "#00E5FF" },
  nutrition: { label: "Nutrition",         icon: "🥩", color: "#FF6B35" },
  training:  { label: "Frame Adjustments", icon: "🏃", color: "#A8FF3E" },
  roadmap:   { label: "Roadmap",           icon: "📅", color: "#FFD700" },
  daily:     { label: "Daily Blueprint",   icon: "⚡", color: "#FF4DB8" },
};

function Block({ color, label, children }) {
  return (
    <div style={{ marginBottom: "28px" }}>
      <div style={{ fontSize: "9px", letterSpacing: "5px", color: color, marginBottom: "14px", display: "flex", alignItems: "center", gap: "10px" }}>
        <div style={{ flex: 1, height: "1px", background: color + "44" }} />
        {label}
        <div style={{ flex: 1, height: "1px", background: color + "44" }} />
      </div>
      {children}
    </div>
  );
}

function BodySection() {
  const c = "#00E5FF";
  const stats = [
    ["Height", "6'3\" / 190.5cm"],
    ["Current Weight", "200 lbs / 90.7kg"],
    ["Frame Type", "Mesomorphic-Ectomorph"],
    ["Maintenance Cals", "~3,050 cal/day"],
    ["Target Weight", "188–198 lbs"],
    ["Target Body Fat", "10–12%"],
    ["Muscle Ceiling", "~215–225 lbs lean"],
    ["Timeline to 60%", "12–16 months"],
  ];
  const advantages = [
    ["Stride Length", "At 6'3\", each stride covers more ground than average. With proper mechanics, your top-end speed can exceed most people from the physics of longer limbs alone."],
    ["Force at Lever End", "Longer arms generate more force at the point of contact. Your reach advantage in any athletic context is real and cannot be trained into a shorter person."],
    ["Wingspan", "Your arm span likely matches or exceeds your height. In sports involving catching, blocking, or reaching, this is an elite physical attribute."],
    ["Muscle Volume Capacity", "Longer muscles have more total volume potential. Your genetic ceiling for lean mass is higher in absolute terms than a shorter athlete."],
  ];
  const challenges = [
    ["Long Femurs + Squat Mechanics", "Your thigh bones force your torso to lean forward in standard squats. This is anatomy, not weakness. Bulgarian split squats and hip hinges suit your frame far better."],
    ["Hip Flexor Tightness", "Tall frames accumulate hip flexor tightness faster. Tight hip flexors directly cap your sprint speed and jump height. Daily hip mobility is non-optional."],
    ["More Joint Range = More Stress", "More range of motion per rep means more joint travel. Push-ups, dips, and pull-ups require stricter form to protect elbows and shoulders at full extension."],
    ["Slower Initial Acceleration", "Taller athletes take longer to reach top speed. Your stride cycle is longer. The first 5 yards require specific acceleration drills to close this gap."],
  ];
  return (
    <div>
      <Block color={c} label="YOUR STATS AT A GLANCE">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(175px, 1fr))", gap: "10px" }}>
          {stats.map(([label, value], i) => (
            <div key={i} style={{ background: "#0d0d0d", border: "1px solid #1e1e1e", padding: "14px" }}>
              <div style={{ fontSize: "8px", letterSpacing: "3px", color: "#444", marginBottom: "4px" }}>{label}</div>
              <div style={{ fontSize: "14px", color: c, fontWeight: "bold" }}>{value}</div>
            </div>
          ))}
        </div>
      </Block>
      <Block color={c} label="FRAME ADVANTAGES">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: "10px" }}>
          {advantages.map(([title, body], i) => (
            <div key={i} style={{ background: "#0d0d0d", border: "1px solid #1a1a1a", padding: "16px" }}>
              <div style={{ fontSize: "11px", color: c, letterSpacing: "2px", marginBottom: "7px" }}>{title}</div>
              <div style={{ fontSize: "12px", color: "#888", lineHeight: "1.8" }}>{body}</div>
            </div>
          ))}
        </div>
      </Block>
      <Block color="#FF4D00" label="FRAME CHALLENGES AND FIXES">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: "10px" }}>
          {challenges.map(([title, body], i) => (
            <div key={i} style={{ background: "#0d0d0d", border: "1px solid #1a1a1a", padding: "16px" }}>
              <div style={{ fontSize: "11px", color: "#FF4D00", letterSpacing: "2px", marginBottom: "7px" }}>{title}</div>
              <div style={{ fontSize: "12px", color: "#888", lineHeight: "1.8" }}>{body}</div>
            </div>
          ))}
        </div>
      </Block>
      <Block color={c} label="BODY COMPOSITION REALITY CHECK">
        <div style={{ fontSize: "13px", lineHeight: "1.95", color: "#999" }}>
          At 200 lbs and 6'3", you are likely sitting between <span style={{ color: c }}>15–22% body fat</span> depending on your current muscle mass. The scale during transformation may barely move while your body completely changes shape — because muscle and fat swap simultaneously.
          <br /><br />
          Your target is <span style={{ color: c }}>188–198 lbs at 10–12% body fat</span>, carrying roughly <span style={{ color: c }}>168–178 lbs of lean mass</span>. A lean 190 lb athlete looks dramatically different from a soft 200 lb person. The number on the scale is almost irrelevant. Composition is everything.
          <br /><br />
          Your long-term lean mass ceiling (natural, fully trained) is approximately <span style={{ color: c }}>215–225 lbs</span>. Reaching 60% of potential puts you at roughly <span style={{ color: c }}>195–205 lbs of athletic, lean mass</span> — a genuinely elite physical condition for your frame.
        </div>
      </Block>
    </div>
  );
}

function NutritionSection() {
  const c = "#FF6B35";
  const [goal, setGoal] = useState("recomp");
  const goals = {
    recomp: { label: "Body Recomp", cals: 3050, carbs: 320, protein: 195, fat: 85, desc: "Eat at maintenance. Build muscle and lose fat simultaneously. Slower but no sacrifice required. Best starting point." },
    cut: { label: "Cut (Fat Loss)", cals: 2650, carbs: 240, protein: 200, fat: 75, desc: "400 calorie deficit. Prioritizes fat loss while preserving muscle. Lose 0.5–1 lb/week. Keep protein high to protect muscle." },
    bulk: { label: "Lean Bulk", cals: 3350, carbs: 400, protein: 195, fat: 90, desc: "300 calorie surplus. Prioritizes muscle growth with minimal fat gain. Best when already under 15% body fat." },
  };
  const sel = goals[goal];
  const meals = [
    { time: "7:00 AM", name: "Power Start", items: ["4 whole eggs (28g protein)", "1 cup oats + berries (55g carbs)", "Black coffee"], p: 32, c2: 60, f: 22, cal: 550 },
    { time: "10:00 AM", name: "Protein Bridge", items: ["1 cup Greek yogurt (17g protein)", "1 banana (27g carbs)", "Handful almonds"], p: 20, c2: 35, f: 14, cal: 340 },
    { time: "12:30 PM", name: "Performance Fuel", items: ["200g chicken or beef (42g protein)", "1.5 cups rice or potato (60g carbs)", "Mixed vegetables"], p: 45, c2: 65, f: 18, cal: 600 },
    { time: "Pre-Workout", name: "Training Fuel", items: ["1 cup oats (45g carbs)", "Greek yogurt (25g protein)", "Banana"], p: 28, c2: 50, f: 5, cal: 360 },
    { time: "Post-Workout", name: "Recovery Window", items: ["200g salmon or beef (42g protein)", "1.5 cups white rice (55g carbs)", "Berries + electrolytes"], p: 45, c2: 60, f: 14, cal: 550 },
    { time: "8:00 PM", name: "Overnight Build", items: ["200g beef or steak (42g protein)", "Sweet potato (40g carbs)", "Leafy greens + olive oil"], p: 45, c2: 45, f: 20, cal: 540 },
  ];
  const supps = [
    ["Creatine Monohydrate", "5g daily — any time", "Most researched supplement. Increases explosive power, vertical jump, and sprint speed. Non-negotiable."],
    ["Vitamin D3 + K2", "4,000 IU D3 + 100mcg K2 daily", "Critical for testosterone, bone density, and immune function. Most tall athletes are deficient."],
    ["Magnesium Glycinate", "300–400mg before bed", "Dramatically improves deep sleep quality. Sleep is when you build muscle. Most people are deficient."],
    ["Omega-3 Fish Oil", "2–3g EPA+DHA daily", "Reduces inflammation, speeds recovery, improves joint health — especially important for long-limbed athletes."],
    ["Caffeine", "200–300mg, 45 min pre-training", "Proven to increase power output and sprint speed. Cycle off 1 week per month to maintain sensitivity."],
  ];
  return (
    <div>
      <Block color={c} label="CALORIE AND MACRO TARGETS">
        <div style={{ marginBottom: "16px" }}>
          <div style={{ fontSize: "9px", letterSpacing: "3px", color: "#555", marginBottom: "10px" }}>SELECT YOUR GOAL</div>
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
            {Object.entries(goals).map(([key, g]) => (
              <button key={key} onClick={() => setGoal(key)} style={{
                background: goal === key ? c : "transparent",
                border: "1px solid " + (goal === key ? c : "#333"),
                color: goal === key ? "#000" : "#666",
                padding: "8px 16px", cursor: "pointer", fontSize: "10px",
                letterSpacing: "2px", textTransform: "uppercase",
                fontFamily: "'Courier New', monospace", fontWeight: "bold"
              }}>{g.label}</button>
            ))}
          </div>
        </div>
        <div style={{ background: "#0d0d0d", border: "1px solid #1e1e1e", padding: "16px", marginBottom: "14px" }}>
          <div style={{ fontSize: "12px", color: "#888", lineHeight: "1.7", marginBottom: "16px" }}>{sel.desc}</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "10px" }}>
            {[["CALORIES", sel.cals + " cal"], ["PROTEIN", sel.protein + "g"], ["CARBS", sel.carbs + "g"], ["FAT", sel.fat + "g"]].map(([l, v]) => (
              <div key={l} style={{ textAlign: "center", background: "#111", padding: "14px 8px" }}>
                <div style={{ fontSize: "8px", letterSpacing: "3px", color: "#444", marginBottom: "4px" }}>{l}</div>
                <div style={{ fontSize: "20px", color: c, fontWeight: "bold" }}>{v}</div>
              </div>
            ))}
          </div>
        </div>
      </Block>
      <Block color={c} label="FULL DAY MEAL PLAN">
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          {meals.map((meal, i) => (
            <div key={i} style={{ background: "#0d0d0d", border: "1px solid #1a1a1a", padding: "14px 16px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "8px", marginBottom: "10px" }}>
                <div>
                  <div style={{ fontSize: "8px", letterSpacing: "3px", color: c, marginBottom: "2px" }}>{meal.time}</div>
                  <div style={{ fontSize: "14px", fontWeight: "bold" }}>{meal.name}</div>
                </div>
                <div style={{ display: "flex", gap: "10px" }}>
                  {[["P", meal.p + "g"], ["C", meal.c2 + "g"], ["F", meal.f + "g"], ["~" + meal.cal, "cal"]].map(([l, v]) => (
                    <div key={l} style={{ textAlign: "center" }}>
                      <div style={{ fontSize: "8px", color: "#444" }}>{l}</div>
                      <div style={{ fontSize: "11px", color: "#aaa" }}>{v}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {meal.items.map((item, j) => (
                  <span key={j} style={{ fontSize: "11px", color: "#777", background: "#111", padding: "4px 10px", border: "1px solid #222" }}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Block>
      <Block color={c} label="SUPPLEMENTS WORTH TAKING">
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          {supps.map(([name, dose, why], i) => (
            <div key={i} style={{ display: "flex", gap: "14px", background: "#0d0d0d", border: "1px solid #1a1a1a", padding: "14px" }}>
              <div style={{ color: c, fontSize: "18px", minWidth: "24px" }}>0{i + 1}</div>
              <div>
                <div style={{ fontSize: "13px", fontWeight: "bold", marginBottom: "2px" }}>{name}</div>
                <div style={{ fontSize: "10px", color: c, letterSpacing: "1px", marginBottom: "5px" }}>{dose}</div>
                <div style={{ fontSize: "12px", color: "#777", lineHeight: "1.7" }}>{why}</div>
              </div>
            </div>
          ))}
        </div>
      </Block>
    </div>
  );
}

function TrainingSection() {
  const c = "#A8FF3E";
  const adjustments = [
    ["SWAP", "#FF4D00", "Replace Standard Squats with Bulgarian Split Squat + Hip Hinge", "Long femurs force excessive forward lean in standard back squats, shifting load to your lower back instead of quads and glutes. Bulgarian split squats and Romanian deadlifts load your legs correctly for your lever length. Stronger, safer, and faster progress."],
    ["ADD", c, "Daily Hip Mobility — 10 min every morning", "The highest-return addition for your frame. Tight hip flexors from long legs directly cap sprint speed and jump height by limiting hip extension behind you. Couch stretch, hip 90/90, deep lunge. Every single morning before anything else."],
    ["ADJUST", "#FFD700", "Pull-Up Grip Width", "At 6'3\" your shoulder width is significant. Slightly wider than shoulder-width grip on pull-ups better matches your proportions and reduces elbow stress. Never fully lock out pull-ups — keep a soft bend to protect longer elbow joints."],
    ["ADD", c, "Wall-Drive Acceleration Drills Before Every Speed Session", "Taller athletes accelerate slower from dead stops because stride cycle is longer. Wall drives (standing sprint against a wall, driving knees up explosively) 3x10 reps before speed work programs the short powerful strides needed for initial acceleration."],
    ["PRIORITIZE", "#FF6B9D", "Single-Leg Work at 60% of Lower Body Training", "Every sprint stride and jump takeoff is single-leg. Given your stride length, single-leg strength translates to performance more than bilateral strength. Make 60% of lower body training single-leg: split squats, single-leg RDLs, step-ups, single-leg hip thrusts."],
    ["ADD", c, "Double Calf and Ankle Volume", "Long legs mean more distance from ankle to center of mass. Your Achilles and calf complex work harder per stride than shorter athletes. Single-leg calf raises on a step, 4x20 daily. This builds the spring in your stride that longer-legged athletes need more than anyone."],
    ["NON-NEGOTIABLE", "#FF4D00", "Deload Every 4th Week", "Your frame puts more systemic joint stress during training due to greater range of motion per rep. Deload weeks are not optional. Cut volume by 50%, keep intensity, for 7 days every 4th week. This is when joints recover and gains solidify."],
  ];
  const mobility = [
    ["Couch Stretch", "90 sec each side", "Hip flexors — critical for sprint extension"],
    ["Hip 90/90", "90 sec each side", "Hip internal and external rotation"],
    ["Deep Lunge with Rotation", "60 sec each side", "Hip flexor and thoracic spine"],
    ["Pigeon Pose", "60 sec each side", "Glute and external hip rotator"],
    ["Deep Squat Hold", "2 min total", "Ankle, hip, and thoracic mobility combined"],
    ["Doorframe Pec Stretch", "60 sec", "Chest and front shoulder — posture for tall athletes"],
  ];
  const tagColors = { "SWAP": "#FF4D00", "ADD": c, "ADJUST": "#FFD700", "PRIORITIZE": "#FF6B9D", "NON-NEGOTIABLE": "#FF4D00" };
  return (
    <div>
      <Block color={c} label="FRAME-SPECIFIC TRAINING ADJUSTMENTS">
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {adjustments.map(([tag, , title, body], i) => (
            <div key={i} style={{ background: "#0d0d0d", border: "1px solid #1a1a1a", padding: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px", flexWrap: "wrap" }}>
                <span style={{ background: tagColors[tag] + "22", color: tagColors[tag], fontSize: "8px", letterSpacing: "2px", padding: "3px 8px", border: "1px solid " + tagColors[tag] + "44" }}>{tag}</span>
                <span style={{ fontSize: "13px", fontWeight: "bold" }}>{title}</span>
              </div>
              <div style={{ fontSize: "12px", color: "#777", lineHeight: "1.85" }}>{body}</div>
            </div>
          ))}
        </div>
      </Block>
      <Block color={c} label="DAILY HIP MOBILITY ROUTINE — 10 MINUTES EVERY MORNING">
        <div style={{ fontSize: "12px", color: "#777", marginBottom: "14px", lineHeight: "1.7" }}>
          At 6'3", this single daily habit will produce more speed and jump improvement than almost any other addition to your plan. Do this every morning including rest days.
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          {mobility.map(([move, time, target], i) => (
            <div key={i} style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "14px", alignItems: "center", background: "#0d0d0d", border: "1px solid #1a1a1a", padding: "12px 14px" }}>
              <div>
                <span style={{ color: c, fontSize: "10px", marginRight: "8px" }}>0{i + 1}</span>
                <span style={{ fontSize: "13px" }}>{move}</span>
                <div style={{ fontSize: "11px", color: "#555", marginTop: "2px", paddingLeft: "22px" }}>{target}</div>
              </div>
              <div style={{ fontSize: "11px", color: "#888", whiteSpace: "nowrap" }}>{time}</div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: "12px", background: c + "11", border: "1px solid " + c + "33", padding: "12px 14px", fontSize: "12px", color: c }}>
          Total time: 10–12 minutes. Every day, including rest days. This compounds faster than any individual training session for your frame.
        </div>
      </Block>
    </div>
  );
}

/* ── Exercise card used inside weekly sessions ── */
function ExCard({ name, sets, reps, rest, notes, color }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "10px", alignItems: "start", background: "#111", border: "1px solid #1a1a1a", padding: "10px 12px" }}>
      <div>
        <div style={{ fontSize: "12px", fontWeight: "bold", marginBottom: "2px" }}>{name}</div>
        {notes && <div style={{ fontSize: "10px", color: "#555", lineHeight: "1.5" }}>{notes}</div>}
      </div>
      <div style={{ display: "flex", gap: "10px", whiteSpace: "nowrap" }}>
        <div style={{ textAlign: "center" }}><div style={{ fontSize: "7px", color: "#444", letterSpacing: "1px" }}>SETS</div><div style={{ fontSize: "12px", color }}>{sets}</div></div>
        <div style={{ textAlign: "center" }}><div style={{ fontSize: "7px", color: "#444", letterSpacing: "1px" }}>REPS</div><div style={{ fontSize: "12px", color }}>{reps}</div></div>
        <div style={{ textAlign: "center" }}><div style={{ fontSize: "7px", color: "#444", letterSpacing: "1px" }}>REST</div><div style={{ fontSize: "12px", color: "#666" }}>{rest}</div></div>
      </div>
    </div>
  );
}

function DayCard({ day, title, focus, exercises, color, deload }) {
  const [open, setOpen] = useState(false);
  const isRest = exercises.length === 0;
  return (
    <div style={{ background: "#0a0a0a", border: "1px solid " + (isRest ? "#1a1a1a" : color + "33"), marginBottom: "6px" }}>
      <div onClick={() => !isRest && setOpen(!open)} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 14px", cursor: isRest ? "default" : "pointer" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <span style={{ fontSize: "9px", letterSpacing: "2px", color: isRest ? "#333" : color, minWidth: "30px" }}>{day}</span>
          <span style={{ fontSize: "13px", fontWeight: "bold", color: isRest ? "#444" : "#ccc" }}>{title}</span>
          {focus && <span style={{ fontSize: "9px", color: "#555", letterSpacing: "1px" }}>{focus}</span>}
          {deload && <span style={{ fontSize: "8px", background: "#FFD70022", color: "#FFD700", padding: "2px 6px", border: "1px solid #FFD70044", letterSpacing: "1px" }}>DELOAD</span>}
        </div>
        {!isRest && <span style={{ fontSize: "10px", color: "#444" }}>{open ? "▲" : "▼"} {exercises.length} exercises</span>}
      </div>
      {open && !isRest && (
        <div style={{ padding: "0 14px 14px", display: "flex", flexDirection: "column", gap: "5px" }}>
          {exercises.map((ex, i) => <ExCard key={i} {...ex} color={color} />)}
        </div>
      )}
    </div>
  );
}

/* ── Phase workout data ── */
const phaseWorkouts = {
  0: [ // Phase 1 — Foundation — 4 days/week full body
    {
      day: "MON", title: "Full Body Push + Legs", focus: "STRENGTH",
      exercises: [
        { name: "Push-Ups (Incline → Flat progression)", sets: "4", reps: "8–12", rest: "90s", notes: "Start elevated if needed. Full ROM, elbows 45°. Slow eccentric 3 sec." },
        { name: "Bulgarian Split Squats", sets: "3", reps: "8/leg", rest: "90s", notes: "Frame-specific swap for squats. Rear foot on bench, torso upright." },
        { name: "Pike Push-Ups", sets: "3", reps: "6–10", rest: "90s", notes: "Feet elevated on box. Shoulder strength builder toward handstand push-ups." },
        { name: "Glute Bridges", sets: "3", reps: "15", rest: "60s", notes: "Squeeze 2 sec at top. Foundation for single-leg hip thrust progression." },
        { name: "Dead Hang", sets: "3", reps: "30–45s", rest: "60s", notes: "Shoulder-width grip. Builds grip and decompresses spine — key for tall frames." },
        { name: "Single-Leg Calf Raises (on step)", sets: "4", reps: "20/leg", rest: "45s", notes: "Full ROM bottom to top. Double volume for long-leg mechanics." },
      ]
    },
    {
      day: "TUE", title: "Active Recovery + Mobility", focus: "",
      exercises: [
        { name: "10 min Hip Mobility Flow", sets: "1", reps: "full", rest: "—", notes: "Couch stretch, 90/90, deep lunge rotation, pigeon, deep squat hold." },
        { name: "Light Walk or Swim", sets: "1", reps: "20–30 min", rest: "—", notes: "Low intensity. Keep moving. Blood flow recovery." },
        { name: "Foam Roll Full Body", sets: "1", reps: "10 min", rest: "—", notes: "Quads, IT band, lats, thoracic spine." },
      ]
    },
    {
      day: "WED", title: "Speed + Plyometrics", focus: "POWER",
      exercises: [
        { name: "Wall Drives", sets: "3", reps: "10/leg", rest: "60s", notes: "Explosive knee drive against wall. Acceleration drill for tall athletes." },
        { name: "Broad Jumps", sets: "4", reps: "5", rest: "90s", notes: "Max distance. Full hip extension. Stick the landing 2 sec." },
        { name: "Sprint Intervals (40 yd)", sets: "6", reps: "1 sprint", rest: "2 min", notes: "90% effort. Focus on first 10 yards — acceleration phase." },
        { name: "Box Jumps (step down)", sets: "3", reps: "5", rest: "90s", notes: "20–24\" box. Explode up, step down. Protect joints on landing." },
        { name: "Single-Leg Bounds", sets: "3", reps: "6/leg", rest: "90s", notes: "Max distance per bound. Teaches single-leg force production." },
      ]
    },
    { day: "THU", title: "Rest Day", focus: "RECOVERY", exercises: [] },
    {
      day: "FRI", title: "Full Body Pull + Legs", focus: "STRENGTH",
      exercises: [
        { name: "Pull-Ups (or Negatives)", sets: "4", reps: "5–8", rest: "2 min", notes: "Wider grip for your frame. Soft lockout at bottom — protect elbows." },
        { name: "Single-Leg Romanian Deadlift", sets: "3", reps: "8/leg", rest: "90s", notes: "Bodyweight or light DB. Hamstring and balance builder." },
        { name: "Australian Rows (Inverted Rows)", sets: "4", reps: "10–12", rest: "90s", notes: "Feet elevated for difficulty. Squeeze shoulder blades at top." },
        { name: "Single-Leg Hip Thrusts", sets: "3", reps: "10/leg", rest: "60s", notes: "Back on bench. Glute power for sprints and jumps." },
        { name: "Dip Negatives (or Full Dips)", sets: "3", reps: "5–8", rest: "90s", notes: "Slow 4-sec lowering. Protect shoulders at full depth." },
        { name: "Single-Leg Calf Raises (on step)", sets: "4", reps: "20/leg", rest: "45s", notes: "Daily calf volume. Spring mechanics for your stride." },
      ]
    },
    {
      day: "SAT", title: "Conditioning + Core", focus: "ENDURANCE",
      exercises: [
        { name: "Burpee Intervals", sets: "5", reps: "10", rest: "60s", notes: "Full extension at top. Chest to floor at bottom." },
        { name: "Hollow Body Hold", sets: "4", reps: "30s", rest: "45s", notes: "Lower back pressed to floor. Core stabilizer for all movement." },
        { name: "Mountain Climbers", sets: "4", reps: "20/side", rest: "45s", notes: "Controlled pace. Hip flexor activation + cardio." },
        { name: "L-Sit Progression (floor)", sets: "3", reps: "15–20s", rest: "60s", notes: "Hands on floor, lift legs. Tuck if full L-sit too hard." },
        { name: "Bear Crawl", sets: "3", reps: "40 yd", rest: "60s", notes: "Knees 1\" off ground. Full body coordination builder." },
      ]
    },
    { day: "SUN", title: "Full Rest", focus: "RECOVERY", exercises: [] },
  ],
  1: [ // Phase 2 — Development — 5–6 days/week upper/lower
    {
      day: "MON", title: "Upper Push", focus: "HYPERTROPHY",
      exercises: [
        { name: "Diamond Push-Ups", sets: "4", reps: "10–15", rest: "90s", notes: "Tricep dominant. Hands close, elbows tight to body." },
        { name: "Pike Push-Ups (feet elevated)", sets: "4", reps: "8–10", rest: "90s", notes: "Feet on 18\"+ surface. Approaching handstand push-up territory." },
        { name: "Pseudo Planche Push-Ups", sets: "3", reps: "6–10", rest: "2 min", notes: "Hands turned out, leaned forward. Advanced chest + front delt." },
        { name: "Dips (weighted or bodyweight)", sets: "4", reps: "8–12", rest: "90s", notes: "Slight forward lean for chest. Controlled descent — protect shoulders." },
        { name: "Archer Push-Ups", sets: "3", reps: "6/side", rest: "90s", notes: "Wide base, shift weight to one arm. One-arm push-up progression." },
        { name: "Tricep Bench Dips", sets: "3", reps: "15", rest: "60s", notes: "Feet elevated. Burnout finisher." },
      ]
    },
    {
      day: "TUE", title: "Lower Power", focus: "STRENGTH + SPEED",
      exercises: [
        { name: "Pistol Squat Progressions", sets: "4", reps: "5/leg", rest: "2 min", notes: "Assisted → full. The ultimate single-leg strength test." },
        { name: "Nordic Hamstring Curls", sets: "3", reps: "5–8", rest: "2 min", notes: "Eccentric focus. Injury-proof your hamstrings for sprinting." },
        { name: "Depth Jumps (12–18\" box)", sets: "4", reps: "5", rest: "2 min", notes: "Step off, land, explode. Maximum reactive power builder." },
        { name: "Single-Leg Hip Thrusts (weighted)", sets: "4", reps: "10/leg", rest: "90s", notes: "Backpack or band for load. Glute power for sprints." },
        { name: "Wall Drives", sets: "3", reps: "10/leg", rest: "60s", notes: "Pre-sprint activation. Explosive knee drive." },
        { name: "Sprint Intervals (60 yd)", sets: "8", reps: "1 sprint", rest: "2 min", notes: "95% effort. Longer distance builds top-end speed." },
        { name: "Single-Leg Calf Raises", sets: "4", reps: "25/leg", rest: "45s", notes: "Increased volume. Building serious spring." },
      ]
    },
    {
      day: "WED", title: "Upper Pull", focus: "HYPERTROPHY",
      exercises: [
        { name: "Pull-Ups (wide grip)", sets: "4", reps: "8–10", rest: "2 min", notes: "Wide grip for your 6'3\" frame. Full scapular engagement." },
        { name: "Chin-Ups (supinated)", sets: "3", reps: "8–10", rest: "90s", notes: "Bicep emphasis. Controlled negative." },
        { name: "Typewriter Pull-Ups", sets: "3", reps: "4/side", rest: "2 min", notes: "Shift at top from arm to arm. One-arm pull-up progression." },
        { name: "Australian Rows (feet elevated)", sets: "4", reps: "12", rest: "60s", notes: "Pause 1 sec at top. Squeeze shoulder blades." },
        { name: "Face Pulls (band)", sets: "3", reps: "15", rest: "45s", notes: "External rotation at top. Shoulder health for tall athletes." },
        { name: "Hanging Leg Raises", sets: "4", reps: "10", rest: "60s", notes: "Straight legs to parallel. Core + grip under fatigue." },
      ]
    },
    {
      day: "THU", title: "Active Recovery", focus: "MOBILITY", exercises: [
        { name: "Full Hip Mobility Flow", sets: "1", reps: "15 min", rest: "—", notes: "Extended version. Couch stretch, 90/90, pigeon, deep squat, lunge rotation." },
        { name: "Light Jog or Swim", sets: "1", reps: "20 min", rest: "—", notes: "Zone 2 heart rate. Active recovery only." },
        { name: "Foam Roll + Lacrosse Ball", sets: "1", reps: "15 min", rest: "—", notes: "Target quads, hip flexors, lats, pecs." },
      ]
    },
    {
      day: "FRI", title: "Lower Strength", focus: "MAX EFFORT",
      exercises: [
        { name: "Bulgarian Split Squats (weighted)", sets: "5", reps: "6/leg", rest: "2 min", notes: "Backpack or DBs. Heavy. Primary lower body strength builder." },
        { name: "Single-Leg RDL (weighted)", sets: "4", reps: "8/leg", rest: "90s", notes: "Hamstring and posterior chain. Balance challenge." },
        { name: "Shrimp Squat Progressions", sets: "3", reps: "5/leg", rest: "2 min", notes: "Advanced single-leg. Hold rear foot behind you, squat deep." },
        { name: "Box Jumps (30\"+ )", sets: "4", reps: "5", rest: "2 min", notes: "Higher box. Explosive hip extension. Step down." },
        { name: "Broad Jump + Sprint (20 yd)", sets: "5", reps: "1 combo", rest: "2 min", notes: "Horizontal power into immediate acceleration." },
        { name: "Single-Leg Calf Raises", sets: "4", reps: "25/leg", rest: "45s", notes: "Non-negotiable daily volume." },
      ]
    },
    {
      day: "SAT", title: "Conditioning + Core", focus: "WORK CAPACITY",
      exercises: [
        { name: "Muscle-Up Progressions", sets: "5", reps: "3–5", rest: "2 min", notes: "Jumping muscle-ups → kipping → strict. The calisthenics crown jewel." },
        { name: "Hollow Body Rocks", sets: "4", reps: "20", rest: "45s", notes: "Rock back and forth in hollow hold. Core under dynamic tension." },
        { name: "L-Sit Hold (parallettes or floor)", sets: "4", reps: "20–30s", rest: "60s", notes: "Full leg extension. Compress hard." },
        { name: "Burpee Broad Jumps", sets: "5", reps: "8", rest: "60s", notes: "Burpee into max distance broad jump. Full body power endurance." },
        { name: "Planche Lean Hold", sets: "4", reps: "15–20s", rest: "60s", notes: "Lean forward on hands, feet light. Building toward planche." },
        { name: "Dragon Flags (negatives)", sets: "3", reps: "5", rest: "60s", notes: "Slow 5 sec lowering. Elite core strength builder." },
      ]
    },
    { day: "SUN", title: "Full Rest", focus: "RECOVERY", exercises: [] },
  ],
  2: [ // Phase 3 — Optimization — 6 days/week periodized
    {
      day: "MON", title: "Upper Push — Heavy", focus: "MAX STRENGTH",
      exercises: [
        { name: "Handstand Push-Ups (wall-assisted)", sets: "5", reps: "5–8", rest: "2 min", notes: "Full overhead pressing strength. Forehead to floor." },
        { name: "One-Arm Push-Up Progressions", sets: "4", reps: "3–5/side", rest: "2 min", notes: "Straddle stance → feet together. Elite pushing strength." },
        { name: "Ring Dips (weighted)", sets: "4", reps: "8–10", rest: "2 min", notes: "Rings add instability and deeper ROM. Chest and tricep builder." },
        { name: "Pseudo Planche Push-Ups", sets: "4", reps: "8–10", rest: "90s", notes: "Lean forward aggressively. Approaching planche mechanics." },
        { name: "Planche Progressions", sets: "5", reps: "10–15s", rest: "90s", notes: "Tuck → advanced tuck → straddle. The ultimate calisthenics push skill." },
        { name: "Handstand Hold (freestanding)", sets: "5", reps: "20–30s", rest: "60s", notes: "Balance and overhead stability. Practice every session." },
      ]
    },
    {
      day: "TUE", title: "Lower Power + Speed", focus: "EXPLOSIVE",
      exercises: [
        { name: "Pistol Squats (weighted)", sets: "5", reps: "5/leg", rest: "2 min", notes: "Backpack or vest. Full depth. Elite single-leg strength." },
        { name: "Depth Jumps (24\" box)", sets: "5", reps: "4", rest: "2 min", notes: "Higher box. Maximum reactive strength development." },
        { name: "Nordic Hamstring Curls (full)", sets: "4", reps: "6–8", rest: "2 min", notes: "Full eccentric + concentric. Hamstring power for sprinting." },
        { name: "Sprint Intervals (80 yd)", sets: "8", reps: "1 sprint", rest: "2.5 min", notes: "97% effort. Full acceleration through top-end speed." },
        { name: "Single-Leg Bounds (max distance)", sets: "4", reps: "8/leg", rest: "90s", notes: "Increased volume. Power transfer to sprinting." },
        { name: "Weighted Calf Raises", sets: "4", reps: "25/leg", rest: "45s", notes: "Backpack loaded. Peak spring development." },
      ]
    },
    {
      day: "WED", title: "Upper Pull — Heavy", focus: "MAX STRENGTH",
      exercises: [
        { name: "One-Arm Pull-Up Progressions", sets: "5", reps: "2–4/side", rest: "2.5 min", notes: "Assisted → negatives → full. The ultimate calisthenics pull." },
        { name: "Muscle-Ups (strict)", sets: "4", reps: "4–6", rest: "2 min", notes: "Clean transition. No kip. Full control top and bottom." },
        { name: "Front Lever Progressions", sets: "5", reps: "10–15s", rest: "90s", notes: "Tuck → advanced tuck → straddle → full. Horizontal pull mastery." },
        { name: "Weighted Pull-Ups", sets: "4", reps: "5–6", rest: "2 min", notes: "Backpack loaded. Strength base for one-arm work." },
        { name: "Archer Rows (rings)", sets: "3", reps: "6/side", rest: "90s", notes: "Shift to one arm progressively. Unilateral back strength." },
        { name: "Hanging Windshield Wipers", sets: "3", reps: "8/side", rest: "60s", notes: "Legs to each side from hang. Elite rotational core." },
      ]
    },
    {
      day: "THU", title: "Active Recovery + Skills", focus: "MOBILITY + PRACTICE",
      exercises: [
        { name: "Extended Hip Mobility Flow", sets: "1", reps: "15 min", rest: "—", notes: "Full routine. This never stops being the highest-return habit." },
        { name: "Handstand Practice (freestanding)", sets: "1", reps: "15 min", rest: "—", notes: "Balance work. Wall → kick-up → hold. Skill day." },
        { name: "Light Skill Work (levers, L-sits)", sets: "1", reps: "15 min", rest: "—", notes: "Low intensity practice. Groove the patterns." },
        { name: "Foam Roll + Stretch", sets: "1", reps: "10 min", rest: "—", notes: "Full body. Focus on any tight spots from the week." },
      ]
    },
    {
      day: "FRI", title: "Lower Strength + Plyo", focus: "HYBRID",
      exercises: [
        { name: "Shrimp Squats (weighted)", sets: "4", reps: "5/leg", rest: "2 min", notes: "Backpack loaded. Deep single-leg. Advanced leg strength." },
        { name: "Bulgarian Split Squats (heavy)", sets: "4", reps: "6/leg", rest: "2 min", notes: "Maximal loading. Primary bilateral-alternative strength." },
        { name: "Box Jump → Broad Jump Combo", sets: "5", reps: "3 combos", rest: "2 min", notes: "Vertical into horizontal. Teaches multi-directional power." },
        { name: "Single-Leg RDL (heavy)", sets: "4", reps: "6/leg", rest: "90s", notes: "Posterior chain. Balance and hamstring under load." },
        { name: "Sprint → Backpedal → Sprint (20 yd each)", sets: "6", reps: "1", rest: "2 min", notes: "Multi-directional speed. Deceleration and re-acceleration." },
        { name: "Weighted Calf Raises", sets: "4", reps: "25/leg", rest: "45s", notes: "Maintain volume. Peak Achilles tendon loading." },
      ]
    },
    {
      day: "SAT", title: "Full Body Skills + Conditioning", focus: "PEAK",
      exercises: [
        { name: "Muscle-Up Complexes", sets: "4", reps: "3 MU + 3 dips", rest: "2 min", notes: "Muscle-up into ring dips. Combined pulling and pushing." },
        { name: "Planche + Front Lever Superset", sets: "5", reps: "10s each", rest: "90s", notes: "Alternate holds. Ultimate horizontal strength display." },
        { name: "Pistol Squat + Box Jump Superset", sets: "4", reps: "3 + 3", rest: "2 min", notes: "Strength into power. Post-activation potentiation." },
        { name: "Dragon Flags (full)", sets: "4", reps: "6–8", rest: "60s", notes: "Full extension. Peak core strength movement." },
        { name: "Conditioning Circuit: 4 rounds", sets: "4", reps: "full", rest: "60s between", notes: "10 burpees + 5 pull-ups + 10 jump squats + 20 mountain climbers." },
        { name: "Handstand Walk Practice", sets: "5", reps: "max distance", rest: "60s", notes: "Balance, shoulder endurance, and body control combined." },
      ]
    },
    { day: "SUN", title: "Full Rest", focus: "RECOVERY", exercises: [] },
  ],
};

function RoadmapSection() {
  const c = "#FFD700";
  const [activePhase, setActivePhase] = useState(0);
  const phases = [
    {
      phase: "PHASE 1", title: "Foundation", months: "Months 1–6", color: "#00E5FF",
      goal: "Build the base. Fix movement patterns. Establish nutrition habits. Lock in sleep.",
      milestones: ["Protein hitting 190g daily consistently", "Sleep at 8+ hours with consistent wake time", "Hip mobility routine daily without fail", "Movement patterns dialed — squat, hinge, push, pull", "Creatine loaded and taken daily"],
      expected: ["15–20% strength increase", "2–4% body fat reduction", "Noticeable body composition change", "Sprint mechanics dramatically improved", "1–3 inch vertical jump increase"],
      training: "3–4 days/week full body. Focus on form over intensity. Wednesday speed sessions non-negotiable.",
      nutrition: "Recomp phase — eat at maintenance 3,050 cal. Nail protein target above all else.",
    },
    {
      phase: "PHASE 2", title: "Development", months: "Months 7–12", color: "#A8FF3E",
      goal: "Stack intensity across all pillars simultaneously. This is where exponential change happens.",
      milestones: ["Progressive overload — harder variations every 2 weeks", "Sprint volume increasing weekly", "Track vertical jump monthly", "Blood work done — check D3, testosterone, iron", "Introduce depth jumps"],
      expected: ["20–30% additional strength increase", "Additional 3–5% body fat reduction", "3–6 inch vertical jump increase from baseline", "Measurably faster sprint times", "Visible athletic body transformation"],
      training: "5–6 days/week. Upper/lower split. Speed sessions twice weekly. Deload every 4th week.",
      nutrition: "Under 15% BF: lean bulk at 3,350 cal. Over 15% BF: cut at 2,650 cal. Reassess at month 9.",
    },
    {
      phase: "PHASE 3", title: "Optimization", months: "Months 13–18", color: "#FFD700",
      goal: "Reach 60% of genetic ceiling. Fine-tune everything. The training becomes your identity.",
      milestones: ["Body composition at 10–12% body fat", "Weight settled at 188–198 lbs lean", "Vertical jump 6–10 inches above baseline", "40-yard dash measurably faster", "Full weekly protocol runs on autopilot"],
      expected: ["Top 10–15% of general population athletically", "Near-elite body composition for frame", "Coordination and reaction time dramatically improved", "Full athletic transformation visible to everyone", "Platform built to continue to 80%+ if desired"],
      training: "6 days/week. Periodized. Sport-specific layers added. Planned performance peaks.",
      nutrition: "Maintenance at 3,050 cal. Precision carb timing. Composition maintained, not chased.",
    },
  ];
  const p = phases[activePhase];
  const projections = [
    ["Month 0", "200 lbs", "~18%", "~164 lbs"],
    ["Month 3", "196 lbs", "~15%", "~167 lbs"],
    ["Month 6", "193 lbs", "~13%", "~168 lbs"],
    ["Month 9", "191 lbs", "~12%", "~168 lbs"],
    ["Month 12", "192 lbs", "~11%", "~171 lbs"],
    ["Month 18", "195 lbs", "~10%", "~176 lbs"],
  ];
  const weekData = phaseWorkouts[activePhase] || [];

  return (
    <div>
      <Block color={c} label="18-MONTH TRANSFORMATION ROADMAP">
        <div style={{ display: "flex", gap: "8px", marginBottom: "20px", flexWrap: "wrap" }}>
          {phases.map((ph, i) => (
            <button key={i} onClick={() => setActivePhase(i)} style={{
              background: activePhase === i ? ph.color : "transparent",
              border: "1px solid " + (activePhase === i ? ph.color : "#333"),
              color: activePhase === i ? "#000" : "#666",
              padding: "10px 18px", cursor: "pointer", fontSize: "10px",
              letterSpacing: "2px", fontFamily: "'Courier New', monospace", fontWeight: "bold"
            }}>{ph.phase} — {ph.months}</button>
          ))}
        </div>
        <div style={{ borderLeft: "3px solid " + p.color, paddingLeft: "20px" }}>
          <div style={{ fontSize: "9px", letterSpacing: "4px", color: p.color, marginBottom: "4px" }}>{p.phase}</div>
          <div style={{ fontSize: "22px", fontFamily: "Georgia, serif", marginBottom: "10px" }}>{p.title}</div>
          <div style={{ fontSize: "13px", color: "#999", marginBottom: "20px", lineHeight: "1.7" }}>{p.goal}</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "16px" }}>
            <div>
              <div style={{ fontSize: "8px", letterSpacing: "3px", color: p.color, marginBottom: "10px" }}>MILESTONES</div>
              {p.milestones.map((m, i) => (
                <div key={i} style={{ display: "flex", gap: "8px", marginBottom: "7px", fontSize: "12px", color: "#888", lineHeight: "1.6" }}>
                  <span style={{ color: p.color }}>›</span><span>{m}</span>
                </div>
              ))}
            </div>
            <div>
              <div style={{ fontSize: "8px", letterSpacing: "3px", color: "#555", marginBottom: "10px" }}>EXPECTED RESULTS</div>
              {p.expected.map((e, i) => (
                <div key={i} style={{ display: "flex", gap: "8px", marginBottom: "7px", fontSize: "12px", color: "#888", lineHeight: "1.6" }}>
                  <span style={{ color: "#555" }}>✓</span><span>{e}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
            {[["TRAINING", p.training], ["NUTRITION", p.nutrition]].map(([label, val]) => (
              <div key={label} style={{ background: "#0d0d0d", border: "1px solid " + p.color + "22", padding: "14px" }}>
                <div style={{ fontSize: "8px", letterSpacing: "3px", color: p.color, marginBottom: "6px" }}>{label}</div>
                <div style={{ fontSize: "12px", color: "#888", lineHeight: "1.75" }}>{val}</div>
              </div>
            ))}
          </div>
        </div>
      </Block>

      {/* ── WEEKLY SESSIONS SUBSECTION ── */}
      <Block color={p.color} label={`${p.phase} — WEEKLY CALISTHENICS SESSIONS`}>
        <div style={{ fontSize: "12px", color: "#666", marginBottom: "14px", lineHeight: "1.7" }}>
          Tap any training day to expand the full exercise list. Rest days show as dimmed. Every 4th week is a deload — cut volume by 50%, keep intensity.
        </div>
        {weekData.map((d, i) => (
          <DayCard key={i} day={d.day} title={d.title} focus={d.focus} exercises={d.exercises} color={p.color} />
        ))}
        <div style={{ marginTop: "12px", background: p.color + "11", border: "1px solid " + p.color + "33", padding: "12px 14px", fontSize: "11px", color: p.color, lineHeight: "1.7" }}>
          {activePhase === 0 && "Focus this phase: master every movement pattern with perfect form before adding difficulty. If you can't do 4×10 clean reps, the variation is too hard — regress and build up."}
          {activePhase === 1 && "Focus this phase: progressive overload every 2 weeks. Harder variations, more volume, added load via backpack. Track your reps — if you hit the top of the range, progress the movement."}
          {activePhase === 2 && "Focus this phase: skill mastery and peak expression. Muscle-ups, handstand push-ups, pistol squats, front levers — these are your benchmarks. You are training like an athlete now."}
        </div>
      </Block>

      <Block color={c} label="BODY COMPOSITION PROJECTIONS">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))", gap: "10px" }}>
          {projections.map(([month, weight, bf, lean], i) => (
            <div key={i} style={{ background: "#0d0d0d", border: "1px solid #1a1a1a", padding: "14px" }}>
              <div style={{ fontSize: "8px", letterSpacing: "3px", color: c, marginBottom: "8px" }}>{month}</div>
              <div style={{ fontSize: "13px", marginBottom: "4px" }}>{weight}</div>
              <div style={{ fontSize: "11px", color: "#888" }}>BF: {bf}</div>
              <div style={{ fontSize: "11px", color: "#666" }}>Lean: {lean}</div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: "12px", fontSize: "11px", color: "#555", lineHeight: "1.7" }}>
          Realistic projections assuming consistent training and nutrition. The lean mass increase from 164 to 176 lbs represents roughly 12 lbs of added muscle over 18 months — near the upper limit of natural muscle gain rate for your frame.
        </div>
      </Block>
    </div>
  );
}

function DailySection() {
  const c = "#FF4DB8";
  const nonneg = [
    ["💧", "Hydration", "100+ oz water", "Bodyweight / 2 = oz minimum"],
    ["🥩", "Protein", "190–200g", "Every single day"],
    ["😴", "Sleep", "8.5 hours", "Same wake time daily"],
    ["⚡", "Creatine", "5g", "Any time, daily"],
    ["🦵", "Hip Mobility", "10 min", "Every morning"],
    ["👁️", "Eye-Hand", "10 min", "Daily coordination work"],
    ["🏃", "Movement", "Train or walk", "Never fully sedentary"],
  ];
  const schedule = [
    ["6:30 AM", "Wake — Same time EVERY day", "Set this and never deviate. Your testosterone, cortisol, and HGH release are timed to this anchor."],
    ["6:35 AM", "16oz water immediately", "Before coffee, before phone. You lose roughly 1 lb of water overnight through breathing. Rehydrate first."],
    ["6:40 AM", "10 min hip mobility", "Every single day for your frame. Couch stretch, 90/90, deep lunge. Your most important frame-specific habit."],
    ["7:00 AM", "Breakfast — 30–35g protein", "4 eggs + oats + berries. Get protein in early. It sets the tone for hitting your daily target."],
    ["7:30 AM", "10 min eye-hand coordination", "Wall ball, juggling, reaction drops. Consistent daily practice produces measurable reaction time gains over 4–8 weeks."],
    ["10:00 AM", "Mid-morning protein + carbs", "Greek yogurt + banana + almonds. Keeps muscle protein synthesis elevated between meals."],
    ["12:30 PM", "Lunch — 40–45g protein", "Chicken or beef + rice + vegetables. The most important non-training meal of the day."],
    ["Pre-Train", "Pre-workout meal + caffeine", "60–90 min before training. Oats or rice + protein + fruit. Caffeine 45 min before if using it."],
    ["Training", "Training session", "Follow the weekly plan. Don't improvise. Trust the structure."],
    ["Post-Train", "Post-workout meal within 45 min", "Protein + fast carbs. The recovery window is real. Don't skip this meal."],
    ["8:00 PM", "Dinner — 40–45g protein", "Beef or salmon + complex carbs + greens. Last major meal of the day."],
    ["9:00 PM", "No screens begin", "Blue light suppresses melatonin. Phone down, lights dim. Your wind-down window begins."],
    ["9:30 PM", "Magnesium glycinate 300mg", "Taken 30–60 min before sleep. Dramatically improves deep sleep quality. Non-negotiable."],
    ["10:00 PM", "Sleep — 8.5 hour target", "Room dark and cool (65–68 degrees). HGH peaks in the first 90 min of deep sleep. This is when you actually improve."],
  ];
  return (
    <div>
      <Block color={c} label="YOUR 7 DAILY NON-NEGOTIABLES">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))", gap: "10px", marginBottom: "12px" }}>
          {nonneg.map(([icon, label, value, sub], i) => (
            <div key={i} style={{ background: "#0d0d0d", border: "1px solid " + c + "22", padding: "16px", textAlign: "center" }}>
              <div style={{ fontSize: "24px", marginBottom: "6px" }}>{icon}</div>
              <div style={{ fontSize: "8px", letterSpacing: "3px", color: "#555", marginBottom: "2px" }}>{label}</div>
              <div style={{ fontSize: "14px", color: c, fontWeight: "bold" }}>{value}</div>
              <div style={{ fontSize: "10px", color: "#555", marginTop: "2px" }}>{sub}</div>
            </div>
          ))}
        </div>
        <div style={{ background: c + "11", border: "1px solid " + c + "33", padding: "12px 14px", fontSize: "12px", color: c, lineHeight: "1.7" }}>
          These 7 things done every single day will produce more results than any individual training session. They compound. Miss one occasionally and you are fine. Miss them habitually and your ceiling drops.
        </div>
      </Block>
      <Block color={c} label="IDEAL DAY SCHEDULE">
        <div style={{ display: "flex", flexDirection: "column" }}>
          {schedule.map(([time, label, detail], i) => (
            <div key={i} style={{ display: "grid", gridTemplateColumns: "90px 1fr", gap: "14px", padding: "11px 0", borderBottom: "1px solid #111" }}>
              <div style={{ fontSize: "10px", color: c, letterSpacing: "1px", paddingTop: "2px" }}>{time}</div>
              <div>
                <div style={{ fontSize: "13px", marginBottom: "2px" }}>{label}</div>
                <div style={{ fontSize: "11px", color: "#666", lineHeight: "1.6" }}>{detail}</div>
              </div>
            </div>
          ))}
        </div>
      </Block>
    </div>
  );
}

export default function TransformationPlan() {
  const [active, setActive] = useState("roadmap");
  const meta = sectionMeta[active];
  const renderSection = () => {
    if (active === "body") return <BodySection />;
    if (active === "nutrition") return <NutritionSection />;
    if (active === "training") return <TrainingSection />;
    if (active === "roadmap") return <RoadmapSection />;
    if (active === "daily") return <DailySection />;
    return null;
  };
  return (
    <div style={{ fontFamily: "'Courier New', monospace", background: "#070707", minHeight: "100vh", color: "#E0E0D8" }}>
      <div style={{ padding: "24px 20px 0", borderBottom: "1px solid #141414", background: "#070707", position: "sticky", top: 0, zIndex: 10 }}>
        <div style={{ marginBottom: "16px" }}>
          <div style={{ fontSize: "8px", letterSpacing: "6px", color: meta.color, marginBottom: "4px" }}>PERSONALIZED PERFORMANCE BLUEPRINT</div>
          <h1 style={{ margin: 0, fontSize: "clamp(16px, 3vw, 30px)", fontFamily: "Georgia, serif", fontWeight: 900, letterSpacing: "-0.5px", lineHeight: 1.15 }}>
            COMPLETE TRANSFORMATION <span style={{ color: meta.color }}>6'3" · 200 LBS</span>
          </h1>
        </div>
        <div style={{ display: "flex", gap: "4px", flexWrap: "wrap", paddingBottom: "0" }}>
          {Object.entries(sectionMeta).map(([key, m]) => (
            <button key={key} onClick={() => setActive(key)} style={{
              background: active === key ? m.color : "transparent",
              border: "1px solid " + (active === key ? m.color : "#242424"),
              borderBottom: "none",
              color: active === key ? "#000" : "#555",
              padding: "8px 12px", cursor: "pointer", fontSize: "9px",
              letterSpacing: "1.5px", textTransform: "uppercase",
              fontFamily: "'Courier New', monospace", fontWeight: "bold",
            }}>
              {m.icon} {m.label}
            </button>
          ))}
        </div>
      </div>
      <div style={{ padding: "28px 20px", maxWidth: "900px" }}>
        {renderSection()}
      </div>
    </div>
  );
}
