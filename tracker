import { useState, useEffect, useRef } from "react";

const days = [
  {
    day: "MON", label: "Lower Body Strength", theme: "BUILD THE ENGINE", color: "#FF4D00",
    mechanic: "You don't need a barbell to build powerful legs. The secret is manipulating tempo, leverage, and range of motion. A 5-second slow squat with a pause creates MORE muscle tension than a fast squat with twice the weight. Your bodyweight is the resistance — you just have to use it smarter.",
    warmup: ["5 min jog or jumping jacks","Leg swings — 10 front/back, 10 lateral each leg","Bodyweight squat — 2x10 slow and deep","Hip circles — 10 each leg","Ankle rotations — 10 each"],
    exercises: [
      { name: "Slow Squat (5-2-5 Tempo)", sets: "4 sets", reps: "8 reps", rest: "2 min", equipment: "Bodyweight", mechanic: "5 seconds down, 2 second pause at the bottom, 5 seconds up. No bouncing, no momentum — your muscles do 100% of the work the entire time. This creates as much tension as squatting with significant added weight. Your quads, glutes, and hamstrings are under load for 12 full seconds per rep.", cue: "🔑 Cue: Push knees out over toes on the way down. Don't let them cave inward." },
      { name: "Bulgarian Split Squat", sets: "4 sets", reps: "10 each leg", rest: "90 sec", equipment: "Rear foot on a chair or couch — add light dumbbells when easy", mechanic: "Rear foot elevated forces your front leg to carry 75–80% of your bodyweight alone. That is real, significant resistance. This is the single most effective bodyweight lower body exercise. When it gets easy, hold light dumbbells at your sides — even 10–15lbs becomes very challenging.", cue: "🔑 Cue: Think 'push the floor through your front heel' — not 'sink down.'" },
      { name: "Wall Sit Iso Hold", sets: "3 sets", reps: "45–90 sec hold", rest: "90 sec", equipment: "Wall", mechanic: "Isometric (no movement) holds build strength at the exact joint angle you're holding. 60 seconds in a wall sit creates deep quad fatigue equivalent to multiple sets of squats. Isometrics also improve tendon strength — which is critical for jumping and sprint acceleration.", cue: "🔑 Cue: Thighs parallel to floor. Drive your back into the wall. Breathe steady." },
      { name: "Single-Leg Romanian Deadlift", sets: "3 sets", reps: "10 each leg", rest: "90 sec", equipment: "Light dumbbells or bodyweight", mechanic: "Hinge forward on one leg, feel a deep hamstring stretch, squeeze glute to return upright. Your hamstrings are your acceleration muscle — bigger and stronger hamstrings directly increase sprint speed. The balance demand also builds proprioception simultaneously.", cue: "🔑 Cue: Keep a soft bend in the standing knee. Don't round your lower back — hinge at the hip." },
      { name: "Calf Raises — Single Leg", sets: "4 sets", reps: "15–20 reps each leg", rest: "60 sec", equipment: "Step edge or flat floor — hold light dumbbell when easy", mechanic: "Your calves and Achilles tendon act like a spring when you sprint and jump. A stiffer spring returns more energy with every stride. Single-leg calf raises ensure both legs develop equally. Pause 2 seconds at the bottom to eliminate the bounce reflex and force full muscle effort.", cue: "🔑 Cue: Full stretch at the bottom, full rise at the top. Half reps build nothing." }
    ],
    finisher: "3x8 Jump Squats — bodyweight, explode as high as possible each rep, land soft. Reset fully between reps.",
    note: "Tempo is your weight today. If 5-2-5 feels easy, go 6-3-6. Make your muscles work longer, not just harder."
  },
  {
    day: "TUE", label: "Upper Body Strength + Power", theme: "PUSH, PULL, EXPLODE", color: "#00C2FF",
    mechanic: "Your arms power your sprint. Faster, stronger arm drive directly increases your stride frequency. Upper body strength also transfers force through your core during every athletic movement. You can build elite upper body strength with nothing but your bodyweight and a table or low bar to pull from.",
    warmup: ["Arm circles — 10 forward, 10 backward","Band or towel pull-aparts — 2x15","Scapular shrugs in dead hang — 10 reps","Push-up hold at bottom — 30 sec","Shoulder rolls — 10 each direction"],
    exercises: [
      { name: "Archer Push-Up", sets: "4 sets", reps: "6–8 each side", rest: "2 min", equipment: "Floor", mechanic: "Wide push-up position — shift your weight to one arm as you lower, the other arm stays extended and assists only slightly. You are loading roughly 70–80% of your bodyweight through one arm. This is the calisthenics equivalent of a heavy dumbbell press. The straight arm builds shoulder stability simultaneously.", cue: "🔑 Cue: Keep your body in a straight line. Don't let your hips sag or rotate." },
      { name: "Table / Bar Rows (Australian Row)", sets: "4 sets", reps: "10–12 reps", rest: "2 min", equipment: "Table edge, low bar, or two chairs with a broomstick", mechanic: "Lie under a table, grip the edge, pull your chest to it. This is a horizontal pull — it builds the exact same muscles as a barbell row. Your lats connect your arm to your pelvis. Strong lats = force transfer from upper to lower body during every sprint and jump. Add a backpack with books to increase load.", cue: "🔑 Cue: Pull your chest to the bar, not your chin. Elbows drive back past your body." },
      { name: "Pike Push-Up", sets: "3 sets", reps: "10–12 reps", rest: "90 sec", equipment: "Floor — elevate feet on chair to increase difficulty", mechanic: "Hips high in the air, hands on floor, lower your head toward the ground and push back up. This loads the front of your shoulder — the same muscle that drives your arm forward in sprinting. Elevating your feet shifts more weight to your shoulders and transitions this toward a handstand push-up.", cue: "🔑 Cue: Form a straight line from wrists to hips. Lower until your head nearly touches the floor." },
      { name: "Pull-Up or Jumping Negative Pull-Up", sets: "4 sets", reps: "Max reps OR 5 slow negatives", rest: "2 min", equipment: "Pull-up bar, tree branch, or door frame bar", mechanic: "If you can do pull-ups: max reps each set. If not: jump to the top position and lower yourself as slowly as possible (5–8 seconds down). The lowering phase builds the same muscle and strength as the pulling phase — this is how you build up to full pull-ups fast.", cue: "🔑 Cue: Pull elbows to your back pockets, not straight down. Activates lats fully." },
      { name: "Explosive Push-Up", sets: "4 sets", reps: "8 reps", rest: "90 sec", equipment: "Floor", mechanic: "Drop fast to the bottom, then explode up as hard and fast as possible. If you can get your hands off the ground, do it. This is POWER training — training your chest and arms to apply force fast. This is the exact same goal as a barbell medicine ball throw. Clap if you can.", cue: "🔑 Cue: The speed of the push matters more than the height of the clap." },
      { name: "Dumbbell Overhead Press + Lateral Raise", sets: "3 sets each", reps: "12–15 reps", rest: "60 sec", equipment: "Light dumbbells (even 5–10 lbs is fine)", mechanic: "Press straight overhead and lower controlled. Follow with lateral raises to the side. These stabilize your shoulders under load — protecting the joint most commonly injured in athletics and building the shoulder strength needed for arm drive mechanics.", cue: "🔑 Cue: Core tight on the press — don't arch your lower back to push the weight up." }
    ],
    finisher: "3 rounds: 10 explosive push-ups + 10 table rows. Rest 60 sec between rounds. Go fast.",
    note: "No table or bar? Use a sturdy chair turned sideways, or tie a bedsheet around a door handle and pull yourself toward it. Get creative — the movement matters, not the equipment."
  },
  {
    day: "WED", label: "Speed, Jumping & Coordination", theme: "TRAIN YOUR NERVOUS SYSTEM", color: "#7CFF6B",
    mechanic: "Speed and jumping are nervous system skills — they're about how FAST your brain sends a signal and how explosively your muscles respond. Heavy fatigue ruins this training. Come in fresh. No weights today. Every rep should feel like maximum effort with full recovery between.",
    warmup: ["10 min easy jog — gradually increase pace","High knees — 3x20 meters","Butt kicks — 3x20 meters","A-skips — knee up, stomp down — 3x20 meters","Leg swings — 10 each direction","4x30m build-up strides at 70%, 80%, 90%, 95%"],
    exercises: [
      { name: "10-Yard Sprint — Acceleration", sets: "8 reps", reps: "10 yards MAX effort", rest: "90 sec", equipment: "Open space", mechanic: "Lean forward at 45 degrees, drive your knees aggressively, pump your arms hard. The first 10 yards is won or lost by how much force you push into the ground at a low angle. You're not running forward — you're pushing the ground backward. Every rep at full effort. Quality over quantity.", cue: "🔑 Cue: 'Drive the ground back' — not 'run forward.' Push back, not up." },
      { name: "Broad Jump", sets: "4 sets", reps: "5 reps", rest: "90 sec", equipment: "Open space", mechanic: "Swing arms back, load hips, explode forward as far as possible. Land and stick the landing. Broad jumps train horizontal power — the exact same vector as sprinting. Measure your distance weekly. This number going up means your sprint power is growing.", cue: "🔑 Cue: Arm swing generates 10–15% of jump distance. Throw them forward hard." },
      { name: "Box Jump / Step Jump", sets: "4 sets", reps: "6 reps", rest: "90 sec", equipment: "Sturdy box, bench, or bottom stair", mechanic: "Swing arms, load hips, jump onto the surface, land softly. Step down — don't jump down. The takeoff is the training, not the landing impact. Focus on exploding as fast as possible from the bottom of your squat. Ground contact time should be short and violent.", cue: "🔑 Cue: Land with soft knees, chest up. The quieter the landing the better your mechanics." },
      { name: "Depth Drop + Immediate Jump", sets: "4 sets", reps: "5 reps", rest: "2 min", equipment: "Low box, step, or curb (12–18 inches)", mechanic: "Step off the edge — don't jump off. Land, and IMMEDIATELY jump as high as possible. Minimum ground contact time. This trains your tendons and nervous system to store and release energy like a spring — it's how elite jumpers add 4–6 inches to their vertical. The spring is in your Achilles and calf, not just your quads.", cue: "🔑 Cue: Think 'hot coals' — get off the ground the instant you touch it." },
      { name: "Agility Ladder or Line Hops", sets: "10 min total", reps: "Continuous patterns", rest: "30 sec", equipment: "Agility ladder OR tape/chalk lines on floor", mechanic: "No ladder? Put tape or chalk on the floor in squares. Run patterns: 1-foot in each box, both feet in each box, lateral shuffle. These drills build neural pathways for fast feet. Your brain learns the pattern and makes it automatic — that's what foot speed actually is.", cue: "🔑 Cue: Eyes up, not watching your feet. That's what makes it actually transfer to sports." },
      { name: "Reaction Ball / Tennis Ball Drop", sets: "5 min", reps: "Continuous", rest: "None", equipment: "Tennis ball or any small ball", mechanic: "Hold ball at shoulder height and drop it randomly, then catch before second bounce. Solo version: bounce a tennis ball off a wall at different angles and catch. Trains your visual reaction system — the time between seeing something and responding to it. This is trainable and it directly makes you a better athlete.", cue: "🔑 Cue: Soft wide eyes — don't laser focus. Peripheral awareness catches the ball faster." }
    ],
    finisher: "Cone shuttle or 5-10-5: mark 3 points with tape or shoes, 5 yards apart. Sprint the pattern x8. Time yourself and beat it weekly.",
    note: "This is the day most people skip. Don't. A strong person who can't move fast is not an athlete. This session is what separates the two."
  },
  {
    day: "THU", label: "Posterior Chain Power", theme: "HIPS AND HAMSTRINGS", color: "#FFD700",
    mechanic: "Your glutes and hamstrings are the most powerful muscles for athletic movement. Every sprint and jump is driven by explosive hip extension — your hips snapping from bent to straight. Today we build that engine using nothing but your body, a floor, and gravity.",
    warmup: ["Glute bridges — 2x20","Donkey kicks — 2x15 each leg","Hip flexor stretch — 60 sec each side","Leg swings — 10 front/back, 10 lateral","5 bodyweight jump squats — light activation"],
    exercises: [
      { name: "Single-Leg Hip Thrust (Glute Bridge)", sets: "4 sets", reps: "12 each leg", rest: "90 sec", equipment: "Floor or shoulders on couch/chair — add light dumbbell on hip when easy", mechanic: "Shoulders elevated, one foot on floor, drive your hips up until your body is a straight line, squeeze glutes hard at the top. Your glute is the most powerful hip extensor — the muscle that literally drives your leg back during each sprint stride. Isolating one side doubles the load.", cue: "🔑 Cue: Squeeze your glute as hard as possible at the top. Hold 1 second. Don't let your back do the work." },
      { name: "Nordic Curl (or Slow Lowering)", sets: "3 sets", reps: "5–8 reps", rest: "2 min", equipment: "Feet hooked under sofa or held by a partner", mechanic: "Kneel with feet anchored, lower your body toward the floor as slowly as possible using only your hamstrings. Catch yourself with hands. Push back up and repeat. This is the most effective hamstring exercise that exists — more than any machine. Hamstrings are your top-end speed muscle. Most people never train them directly.", cue: "🔑 Cue: The slower you lower, the more it works. 5–8 seconds on the way down is the goal." },
      { name: "Broad Jump to Sprint (Power Complex)", sets: "5 reps", reps: "Broad jump → immediately 20 yard sprint", rest: "2 min", equipment: "Open space", mechanic: "A complex pairs a strength-type movement with a speed movement. Doing a broad jump first activates your fast-twitch fibers, and then immediately sprinting forces those fibers to fire at full speed. This is called post-activation potentiation — it temporarily makes you faster and more explosive.", cue: "🔑 Cue: Don't rest between the jump and the sprint. The transition is the point." },
      { name: "Reverse Lunge with Knee Drive", sets: "3 sets", reps: "10 each leg", rest: "90 sec", equipment: "Bodyweight — hold light dumbbells when easy", mechanic: "Step back into a lunge, then drive that back knee forward and upward explosively as you stand. That knee drive is the exact hip flexion pattern in sprinting. You're building strength and muscle memory simultaneously.", cue: "🔑 Cue: Drive that knee as HIGH as you can. More height = more hip flexor activation." },
      { name: "Kettlebell or Dumbbell Swing", sets: "4 sets", reps: "15 reps", rest: "60 sec", equipment: "Any dumbbell or light weight — even a heavy backpack", mechanic: "Hinge your hips back hard, let the weight swing back between your legs, then snap your hips forward explosively. This is a hip hinge repeated at high speed — the closest calisthenics movement to a power clean. It trains your glutes and hamstrings to fire explosively and in sequence.", cue: "🔑 Cue: It's a HIP SNAP — not a squat. Hinge back, snap forward. Arms just hold on." }
    ],
    finisher: "Max vertical jump practice — 5 sets of 3 max effort jumps. Full rest between sets. End with your highest jump of the day.",
    note: "Your hamstrings and glutes will be sore. That means you found them. These muscles are your athletic engine — most people never train them directly."
  },
  {
    day: "FRI", label: "Upper Body Volume + Grip", theme: "BUILD THE MUSCLE", color: "#FF6B9D",
    mechanic: "Friday is higher rep, higher volume. You've already done the heavy neural work this week. Today you add muscle tissue — more muscle fibers means more potential force next week. Focus on feeling every muscle work, not moving fast. Slow and controlled beats fast and sloppy.",
    warmup: ["Arm circles — 10 each direction","Push-up hold at bottom — 30 sec","Dead hang — 30 sec","Shoulder rolls — 10 each direction","10 slow push-ups — full range of motion"],
    exercises: [
      { name: "Decline Push-Up", sets: "4 sets", reps: "10–15 reps", rest: "90 sec", equipment: "Feet elevated on chair or couch", mechanic: "Elevating your feet shifts more of your bodyweight to your upper chest and front shoulders. This angle builds the exact muscles that drive your arms forward in a sprint. The higher your feet, the more upper body weight you press.", cue: "🔑 Cue: Lower slow (3 sec), pause at bottom, push up controlled. Not fast." },
      { name: "Wide + Narrow Push-Up Superset", sets: "3 sets", reps: "10 wide, immediately 10 narrow", rest: "90 sec", equipment: "Floor", mechanic: "Wide hand placement loads your chest. Narrow (tricep) placement loads your triceps. Supersetting them back to back means you exhaust both without rest between. Double the volume, same time. More total muscle work = more growth stimulus.", cue: "🔑 Cue: No rest between wide and narrow. That's the point. The burn is the adaptation." },
      { name: "Table Row — Slow Tempo", sets: "4 sets", reps: "12 reps", rest: "90 sec", equipment: "Table edge, low bar, or two chairs with a bar", mechanic: "Today go slower — 3 seconds up, 1 second hold chest to bar, 3 seconds down. Slow pulling creates deep muscle fatigue in your lats and upper back — the muscles that stabilize your spine during every athletic movement. Add a backpack with books for more resistance.", cue: "🔑 Cue: Chest meets the bar, not your chin. Feel your shoulder blades squeeze together." },
      { name: "Dips (Chair or Parallel Bars)", sets: "3 sets", reps: "10–15 reps", rest: "90 sec", equipment: "Two chairs, parallel bars, or edge of a sturdy chair", mechanic: "Hands on two surfaces, lower yourself until elbows hit 90 degrees, press back up. Dips load your triceps and chest under full bodyweight — one of the hardest pressing movements in calisthenics. Lean slightly forward to emphasize chest. Stay upright to emphasize triceps.", cue: "🔑 Cue: Don't dip too low — 90 degrees at the elbow is the safe limit." },
      { name: "Towel / Bedsheet Bicep Curl", sets: "3 sets", reps: "15 reps", rest: "60 sec", equipment: "Towel looped around door handle — or light dumbbells", mechanic: "Loop a towel around a door handle at waist height. Step back to create tension, curl your body toward the door. You're using your bodyweight as resistance for a curl. Add light dumbbells if you have them. Arm size directly contributes to sprint arm drive momentum.", cue: "🔑 Cue: Lean back more to make it harder. The angle changes the load." },
      { name: "Dead Hang + Towel Pull", sets: "3 rounds", reps: "30 sec dead hang + 10 towel pulls", rest: "90 sec", equipment: "Pull-up bar or door frame — towel over door", mechanic: "Dead hangs build extraordinary grip and forearm strength while decompressing your spine. Towel pulls — gripping a towel draped over a door and pulling yourself toward it — train grip under load. Grip strength is a reliable predictor of total body strength. It transfers to every pulling movement.", cue: "🔑 Cue: Active hang — shoulders engaged down, not shrugged up to ears." }
    ],
    finisher: "Hang from bar or door frame for max time. Beat your record from last week. Write it down.",
    note: "No heavy weights needed here. Your body IS the weight. Control the tempo and you control the difficulty."
  },
  {
    day: "SAT", label: "Full Athletic Session", theme: "EVERYTHING COMES TOGETHER", color: "#BF7FFF",
    mechanic: "Today you apply everything from the week. No isolated movements — just athletic expression. The gym teaches the parts. This session teaches the whole. This is where you feel the training working.",
    warmup: ["10 min jog — build pace gradually","A-skips, B-skips, carioca — 2x20m each","Dynamic stretch: leg swings, hip circles, arm swings","4 build-up sprints: 40m at 70%, 80%, 90%, 95%"],
    exercises: [
      { name: "Flying 20m Sprints", sets: "6 reps", reps: "Max effort", rest: "3 min", equipment: "Open space", mechanic: "Take a 20m jog to build speed, then go all-out for the next 20m. This trains TOP-END speed — how fast your legs move at maximum velocity. Different from acceleration. Both are needed. At true top speed your body should feel like it's barely touching the ground.", cue: "🔑 Cue: Stay tall. Relax your face and hands. Tension in your body slows you down." },
      { name: "Jump Complex", sets: "3 rounds", reps: "5 squat jumps → 3 broad jumps → 3 max verticals", rest: "2 min", equipment: "Open space", mechanic: "Complexes train your body to sequence power through different directions. Going from squat jump to broad jump to vertical jump trains all three force vectors — vertical, horizontal, and maximal — in one flowing circuit. Each movement feeds into the next.", cue: "🔑 Cue: Rest fully between rounds. Power output is everything. Don't rush." },
      { name: "Sprint Direction Change — 5-10-5", sets: "8 reps", reps: "Full sprint effort", rest: "90 sec", equipment: "3 cones, shoes, or marks 5 yards apart", mechanic: "Sprint 5 yards, plant and cut, sprint 10 yards, plant and cut, sprint back 5 yards. Trains the ability to decelerate, plant, and re-accelerate — the most athletically demanding movement pattern in most sports. The plant is where most injuries happen. Training it builds resilience.", cue: "🔑 Cue: Plant your outside foot LOW and wide. The lower the plant, the faster the cut." },
      { name: "Bodyweight Athletic Circuit", sets: "3 rounds", reps: "10 explosive push-ups + 10 squat jumps + 10 split jumps", rest: "90 sec", equipment: "Bodyweight", mechanic: "Upper body explosion into lower body explosion into single-leg explosion. Your body doesn't work in isolated parts during real movement. Training them in circuit sequence builds the neural connections between muscle groups — coordination at the full-body level.", cue: "🔑 Cue: Move with INTENT. Every rep should be as explosive as the first." },
      { name: "Eye-Hand and Coordination Drill", sets: "10 min total", reps: "Mix of drills", rest: "None", equipment: "Tennis ball or small ball", mechanic: "Wall throws alternating hands, random drop catches, irregular bounce catches. After a full week of training, cementing coordination work is how the nervous system improvements become permanent. Ten minutes of consistent daily coordination work produces measurable reaction time improvements over 4–8 weeks.", cue: "🔑 Cue: Stay relaxed. Tense hands are slow hands. Loose, reactive." }
    ],
    finisher: "10 min of any sport or athletic activity at full effort — basketball, football catches, martial arts, anything. This is where training becomes ability.",
    note: "This session should feel like play. You are not grinding today — you are expressing. Let yourself be athletic and enjoy it."
  },
  {
    day: "SUN", label: "Active Recovery", theme: "THIS IS WHERE YOU IMPROVE", color: "#888888",
    mechanic: "Adaptation does not happen during training. It happens during rest. Every session this week created micro-damage in your muscles and stress in your nervous system. Today your body rebuilds all of it stronger than before. Protecting your rest is not laziness — it IS the training.",
    warmup: [],
    exercises: [
      { name: "20-Minute Easy Walk", sets: "1 round", reps: "20 min", rest: "N/A", equipment: "Bodyweight — outside if possible", mechanic: "Light movement drives blood flow into sore muscles, flushing out waste products and delivering nutrients. Sunlight exposure resets your circadian rhythm and raises serotonin. This simple habit measurably improves next week's performance.", cue: "🔑 No pace. No target. Just move and breathe." },
      { name: "Full Mobility Routine", sets: "1 round", reps: "60–90 sec each stretch", rest: "None", equipment: "Floor space", mechanic: "Tight muscles are weaker muscles. Restricted range of motion means you can't access full muscle length — and if you can't access it, you can't build strength through it. This daily routine keeps your mobility growing alongside your strength.", cue: "🔑 Order: Hip 90/90 → Couch stretch → Deep squat hold → Thoracic rotation → Doorframe pec stretch → Neck rolls" },
      { name: "Cold Shower Protocol", sets: "1 round", reps: "2–3 min cold at end of shower", rest: "N/A", equipment: "Shower", mechanic: "Cold water triggers norepinephrine release — a focus and recovery chemical. It reduces systemic inflammation left from the week's training and accelerates muscle recovery. 2–3 minutes at the end of a normal shower is enough to get the full effect.", cue: "🔑 Breathe slowly and controlled. Panicked breathing eliminates most of the benefit." },
      { name: "Sleep — 8–9 Hours", sets: "1 round", reps: "8–9 hours", rest: "N/A", equipment: "Dark, cool room (65–68°F)", mechanic: "Human growth hormone peaks in the first 90 minutes of deep sleep. HGH rebuilds muscle tissue and cements the motor patterns from this week's speed and coordination training. Motor skills learned in training are literally transferred to long-term memory during REM sleep. More sleep = faster improvement.", cue: "🔑 No screens 60 min before bed. Magnesium glycinate 300mg if available. Same wake time every day." }
    ],
    finisher: "Eat a full meal — protein, carbs, and fat. Prepare what you need for tomorrow. You earned the rest.",
    note: "The most disciplined thing you can do today is nothing. Rest fully and come back Monday ready to go harder."
  }
];

const principles = [
  { title: "Tempo Replaces Weight", body: "A squat taking 5 seconds down, 2 second pause, and 5 seconds up creates MORE muscle tension than a fast squat with twice the weight. Time under tension is the actual stimulus — not the number on the bar. Slow your reps down and your bodyweight becomes challenging at any level.", icon: "⏱️" },
  { title: "Leverage Changes Everything", body: "A regular push-up is moderate. An archer push-up loads one arm with 75% of your bodyweight. A single-leg squat loads one leg with your entire bodyweight. By shifting your leverage, you make your bodyweight into a heavy weight. The difficulty is always adjustable.", icon: "⚖️" },
  { title: "Explosiveness Needs No Weight", body: "Jump squats, explosive push-ups, and plyometric step-ups train your nervous system to fire FAST. That's exactly what speed training is. You don't need heavy weight to develop explosive power — you need maximum intent and full recovery between reps.", icon: "⚡" },
  { title: "Progressive Overload Still Applies", body: "Instead of adding weight, you progress by: adding reps, slowing tempo, increasing range of motion, moving to a harder variation (push-up → archer push-up → one-arm), or reducing rest time. The principle of overload is identical — the methods are different.", icon: "📈" },
  { title: "Speed Is a Skill, Not a Size", body: "Sprint mechanics, reaction time, agility, and coordination are nervous system skills. They don't require any equipment to train. A dedicated Wednesday speed session and daily 10-minute coordination work will produce measurable improvements in weeks — regardless of what weights you have.", icon: "🧠" },
  { title: "Consistency Beats Equipment", body: "An athlete who trains calisthenics 6 days a week for 6 months will dramatically outperform someone with a full gym who trains inconsistently. The tool is secondary to the habit. Show up every day and your body will adapt regardless of what you're lifting.", icon: "📅" }
];

function parseSetCount(setsStr) {
  const m = setsStr.match(/^(\d+)/);
  return m ? parseInt(m[1]) : 1;
}

function parseRestSeconds(restStr) {
  if (!restStr || restStr === "N/A" || restStr === "None") return 0;
  const minM = restStr.match(/(\d+)\s*min/);
  const secM = restStr.match(/(\d+)\s*sec/);
  let t = 0;
  if (minM) t += parseInt(minM[1]) * 60;
  if (secM) t += parseInt(secM[1]);
  return t;
}

function fmtTime(s) {
  const m = Math.floor(s / 60);
  const sec = s % 60;
  return `${m}:${sec.toString().padStart(2, "0")}`;
}

export default function App() {
  const [activeDay, setActiveDay] = useState(0);
  const [expandedEx, setExpandedEx] = useState(null);
  const [tab, setTab] = useState("plan");
  const [done, setDone] = useState({});
  const [timer, setTimer] = useState({ active: false, paused: false, secs: 0, total: 0, label: "" });
  const intervalRef = useRef(null);
  const d = days[activeDay];

  // Timer tick
  useEffect(() => {
    if (timer.active && !timer.paused) {
      intervalRef.current = setInterval(() => {
        setTimer(t => {
          if (t.secs <= 1) {
            clearInterval(intervalRef.current);
            return { ...t, active: false, paused: false, secs: 0 };
          }
          return { ...t, secs: t.secs - 1 };
        });
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [timer.active, timer.paused]);

  const startTimer = (restStr, label) => {
    const secs = parseRestSeconds(restStr);
    if (!secs) return;
    clearInterval(intervalRef.current);
    setTimer({ active: true, paused: false, secs, total: secs, label });
  };

  const toggleTimer = () => setTimer(t => ({ ...t, paused: !t.paused }));
  const stopTimer = () => { clearInterval(intervalRef.current); setTimer({ active: false, paused: false, secs: 0, total: 0, label: "" }); };

  const toggleSet = (dayIdx, exIdx, setIdx, restStr, exName) => {
    const key = `${dayIdx}-${exIdx}-${setIdx}`;
    const wasDone = done[key];
    setDone(prev => ({ ...prev, [key]: !wasDone }));
    if (!wasDone) startTimer(restStr, exName);
  };

  const resetDay = () => {
    const prefix = `${activeDay}-`;
    setDone(prev => {
      const next = { ...prev };
      Object.keys(next).forEach(k => { if (k.startsWith(prefix)) delete next[k]; });
      return next;
    });
    stopTimer();
  };

  // Progress for current day
  const dayProgress = (() => {
    let total = 0, completed = 0;
    d.exercises.forEach((ex, ei) => {
      const cnt = parseSetCount(ex.sets);
      total += cnt;
      for (let s = 0; s < cnt; s++) {
        if (done[`${activeDay}-${ei}-${s}`]) completed++;
      }
    });
    return { total, completed, pct: total ? Math.round((completed / total) * 100) : 0 };
  })();

  const timerPct = timer.total ? (timer.secs / timer.total) * 100 : 0;
  const circumference = 2 * Math.PI * 20;

  return (
    <div style={{ fontFamily: "'Courier New', monospace", background: "#080808", minHeight: "100vh", color: "#E0E0D8", paddingBottom: timer.active ? "90px" : "0" }}>

      {/* Header */}
      <div style={{ padding: "24px 24px 16px", borderBottom: "1px solid #1a1a1a" }}>
        <div style={{ fontSize: "9px", letterSpacing: "5px", color: d.color, marginBottom: "4px" }}>CALISTHENICS & LIGHT WEIGHTS PROTOCOL</div>
        <h1 style={{ margin: 0, fontSize: "clamp(18px, 4vw, 34px)", fontFamily: "Georgia, serif", fontWeight: 900, letterSpacing: "-1px", lineHeight: 1.15 }}>
          STRENGTH &amp; SPEED<br /><span style={{ color: d.color }}>NO GYM REQUIRED</span>
        </h1>
        <div style={{ display: "flex", gap: "8px", marginTop: "16px" }}>
          {[["plan", "📅 Training Plan"], ["principles", "⚙️ Why It Works"]].map(([t, label]) => (
            <button key={t} onClick={() => setTab(t)} style={{
              background: tab === t ? d.color : "transparent",
              border: `1px solid ${tab === t ? d.color : "#333"}`,
              color: tab === t ? "#000" : "#666",
              padding: "7px 14px", cursor: "pointer", fontSize: "10px",
              letterSpacing: "2px", textTransform: "uppercase",
              fontFamily: "'Courier New', monospace", fontWeight: "bold"
            }}>{label}</button>
          ))}
        </div>
      </div>

      {tab === "principles" ? (
        <div style={{ padding: "28px 24px", maxWidth: "720px" }}>
          <div style={{ fontSize: "9px", letterSpacing: "5px", color: "#FF4D00", marginBottom: "20px" }}>WHY CALISTHENICS BUILDS REAL STRENGTH AND SPEED</div>
          <div style={{ display: "grid", gap: "18px" }}>
            {principles.map((p, i) => (
              <div key={i} style={{ borderLeft: "2px solid #FF4D0033", paddingLeft: "18px", position: "relative" }}>
                <div style={{ position: "absolute", left: "-5px", top: "6px", width: "8px", height: "8px", borderRadius: "50%", background: "#FF4D00" }} />
                <div style={{ fontSize: "10px", letterSpacing: "3px", color: "#FF4D00", textTransform: "uppercase", marginBottom: "5px" }}>{p.icon} {p.title}</div>
                <div style={{ fontSize: "12px", lineHeight: "1.85", color: "#999" }}>{p.body}</div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div style={{ display: "flex" }}>
          {/* Day nav */}
          <div style={{ width: "60px", minWidth: "60px", borderRight: "1px solid #161616", background: "#060606", paddingTop: "10px", display: "flex", flexDirection: "column", alignItems: "center", gap: "4px" }}>
            {days.map((day, i) => {
              const exCount = day.exercises.reduce((acc, _, ei) => acc + parseSetCount(day.exercises[ei].sets), 0);
              const doneCount = day.exercises.reduce((acc, _, ei) => {
                for (let s = 0; s < parseSetCount(day.exercises[ei].sets); s++) if (done[`${i}-${ei}-${s}`]) acc++;
                return acc;
              }, 0);
              const complete = exCount > 0 && doneCount === exCount;
              return (
                <button key={i} onClick={() => { setActiveDay(i); setExpandedEx(null); }} style={{
                  width: "48px", height: "48px", position: "relative",
                  background: activeDay === i ? "#111" : "transparent",
                  border: activeDay === i ? `2px solid ${day.color}` : "2px solid transparent",
                  color: activeDay === i ? day.color : "#3a3a3a",
                  cursor: "pointer", fontSize: "8px", letterSpacing: "1px",
                  textTransform: "uppercase", fontFamily: "'Courier New', monospace", fontWeight: "bold"
                }}>
                  {day.day}
                  {complete && <span style={{ position: "absolute", top: "2px", right: "2px", width: "7px", height: "7px", borderRadius: "50%", background: day.color }} />}
                </button>
              );
            })}
          </div>

          {/* Main content */}
          <div style={{ flex: 1, padding: "20px 22px", overflowY: "auto" }}>

            {/* Day header + progress */}
            <div style={{ marginBottom: "18px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <div>
                  <div style={{ fontSize: "9px", letterSpacing: "5px", color: d.color, marginBottom: "3px" }}>{d.theme}</div>
                  <h2 style={{ margin: "0 0 8px", fontSize: "clamp(14px, 3vw, 22px)", fontFamily: "Georgia, serif" }}>{d.day} — {d.label}</h2>
                </div>
                <button onClick={resetDay} style={{ background: "transparent", border: "1px solid #222", color: "#444", padding: "5px 10px", cursor: "pointer", fontSize: "9px", letterSpacing: "2px", fontFamily: "'Courier New', monospace", whiteSpace: "nowrap" }}>↺ RESET</button>
              </div>

              {/* Progress bar */}
              <div style={{ marginBottom: "12px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "5px" }}>
                  <span style={{ fontSize: "9px", letterSpacing: "3px", color: "#444" }}>SESSION PROGRESS</span>
                  <span style={{ fontSize: "9px", color: d.color }}>{dayProgress.completed}/{dayProgress.total} SETS — {dayProgress.pct}%</span>
                </div>
                <div style={{ height: "3px", background: "#161616", borderRadius: "2px" }}>
                  <div style={{ height: "100%", width: `${dayProgress.pct}%`, background: d.color, borderRadius: "2px", transition: "width 0.3s" }} />
                </div>
              </div>

              <div style={{ fontSize: "12px", lineHeight: "1.8", color: "#777", background: "#0d0d0d", padding: "12px 14px", borderLeft: `3px solid ${d.color}44` }}>
                <span style={{ display: "block", fontSize: "8px", letterSpacing: "3px", color: d.color, marginBottom: "4px" }}>THE MECHANIC TODAY</span>
                {d.mechanic}
              </div>
            </div>

            {/* Warmup */}
            {d.warmup.length > 0 && (
              <div style={{ marginBottom: "18px" }}>
                <div style={{ fontSize: "9px", letterSpacing: "4px", color: "#444", marginBottom: "8px" }}>WARM-UP</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  {d.warmup.map((w, i) => (
                    <div key={i} style={{ background: "#0e0e0e", border: "1px solid #1e1e1e", padding: "5px 10px", fontSize: "11px", color: "#666" }}>
                      <span style={{ color: d.color, marginRight: "5px" }}>{i + 1}.</span>{w}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Exercises */}
            <div style={{ fontSize: "9px", letterSpacing: "4px", color: "#444", marginBottom: "8px" }}>EXERCISES — TAP TO EXPAND</div>
            <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
              {d.exercises.map((ex, ei) => {
                const setCount = parseSetCount(ex.sets);
                const completedCount = Array.from({ length: setCount }, (_, s) => done[`${activeDay}-${ei}-${s}`]).filter(Boolean).length;
                const allDone = completedCount === setCount;
                const isOpen = expandedEx === ei;
                return (
                  <div key={ei} style={{ background: isOpen ? "#0f0f0f" : "#0a0a0a", border: `1px solid ${isOpen ? d.color + "55" : allDone ? d.color + "33" : "#1a1a1a"}`, transition: "all 0.15s" }}>
                    {/* Header row */}
                    <div style={{ padding: "12px 14px", display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer" }}
                      onClick={() => setExpandedEx(isOpen ? null : ei)}>
                      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <span style={{ color: allDone ? d.color : "#333", fontSize: "12px" }}>{allDone ? "✓" : `0${ei + 1}`}</span>
                        <span style={{ fontSize: "13px", fontWeight: "bold", color: allDone ? "#666" : "#E0E0D8", textDecoration: allDone ? "line-through" : "none" }}>{ex.name}</span>
                      </div>
                      <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                        <span style={{ fontSize: "10px", color: d.color }}>{completedCount}/{setCount}</span>
                        <span style={{ color: isOpen ? d.color : "#333", fontSize: "16px", lineHeight: 1 }}>{isOpen ? "−" : "+"}</span>
                      </div>
                    </div>

                    {/* Expanded */}
                    {isOpen && (
                      <div style={{ padding: "0 14px 14px", borderTop: "1px solid #1a1a1a" }}>
                        {/* Metadata chips */}
                        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", margin: "10px 0" }}>
                          {[["REPS", ex.reps], ["REST", ex.rest], ["EQUIPMENT", ex.equipment]].map(([label, val]) => (
                            <div key={label} style={{ background: "#0d0d0d", border: "1px solid #222", padding: "7px 11px" }}>
                              <div style={{ fontSize: "8px", letterSpacing: "2px", color: "#444", marginBottom: "2px" }}>{label}</div>
                              <div style={{ fontSize: "11px", color: "#999" }}>{val}</div>
                            </div>
                          ))}
                        </div>

                        {/* Set checkboxes */}
                        <div style={{ marginBottom: "12px" }}>
                          <div style={{ fontSize: "9px", letterSpacing: "3px", color: "#444", marginBottom: "8px" }}>MARK SETS COMPLETE</div>
                          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                            {Array.from({ length: setCount }, (_, s) => {
                              const key = `${activeDay}-${ei}-${s}`;
                              const isDone = done[key];
                              return (
                                <button key={s} onClick={() => toggleSet(activeDay, ei, s, ex.rest, ex.name)}
                                  style={{
                                    width: "44px", height: "44px", border: `2px solid ${isDone ? d.color : "#2a2a2a"}`,
                                    background: isDone ? d.color + "22" : "transparent",
                                    color: isDone ? d.color : "#444", cursor: "pointer",
                                    fontSize: isDone ? "16px" : "11px", fontFamily: "'Courier New', monospace",
                                    fontWeight: "bold", display: "flex", alignItems: "center", justifyContent: "center",
                                    flexDirection: "column", gap: "1px", transition: "all 0.15s"
                                  }}>
                                  {isDone ? "✓" : <><span style={{ fontSize: "7px", color: "#444" }}>SET</span><span>{s + 1}</span></>}
                                </button>
                              );
                            })}
                          </div>
                          {parseRestSeconds(ex.rest) > 0 && (
                            <div style={{ fontSize: "10px", color: "#444", marginTop: "6px" }}>
                              ↳ Checking a set starts the <span style={{ color: d.color }}>{ex.rest}</span> rest timer automatically
                            </div>
                          )}
                        </div>

                        {/* Mechanic */}
                        <div style={{ fontSize: "12px", lineHeight: "1.85", color: "#888", marginBottom: "10px" }}>
                          <span style={{ display: "block", fontSize: "8px", letterSpacing: "2px", color: "#444", marginBottom: "4px" }}>THE MECHANIC</span>
                          {ex.mechanic}
                        </div>
                        <div style={{ fontSize: "12px", color: d.color, background: d.color + "0f", padding: "10px 12px", borderLeft: `2px solid ${d.color}` }}>
                          {ex.cue}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Finisher */}
            <div style={{ marginTop: "18px", background: d.color + "0f", border: `1px solid ${d.color}33`, padding: "12px 14px" }}>
              <div style={{ fontSize: "9px", letterSpacing: "4px", color: d.color, marginBottom: "5px" }}>FINISHER</div>
              <div style={{ fontSize: "13px", color: "#ccc", lineHeight: "1.7" }}>{d.finisher}</div>
            </div>

            <div style={{ marginTop: "8px", padding: "10px 14px", background: "#0d0d0d", borderLeft: "2px solid #252525" }}>
              <span style={{ fontSize: "9px", letterSpacing: "3px", color: "#444" }}>NOTE — </span>
              <span style={{ fontSize: "12px", color: "#555" }}>{d.note}</span>
            </div>

            {/* Day nav */}
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "24px", paddingTop: "16px", borderTop: "1px solid #161616" }}>
              {activeDay > 0
                ? <button onClick={() => { setActiveDay(activeDay - 1); setExpandedEx(null); }} style={{ background: "transparent", border: "1px solid #2a2a2a", color: "#555", padding: "8px 14px", cursor: "pointer", fontSize: "10px", letterSpacing: "2px", fontFamily: "'Courier New', monospace" }}>← {days[activeDay - 1].day}</button>
                : <div />}
              {activeDay < days.length - 1
                ? <button onClick={() => { setActiveDay(activeDay + 1); setExpandedEx(null); }} style={{ background: d.color, border: "none", color: "#000", padding: "8px 16px", cursor: "pointer", fontSize: "10px", letterSpacing: "2px", fontWeight: "bold", fontFamily: "'Courier New', monospace" }}>NEXT: {days[activeDay + 1].day} →</button>
                : <div style={{ fontSize: "10px", color: d.color, letterSpacing: "3px", alignSelf: "center" }}>WEEK COMPLETE. REST. REPEAT.</div>}
            </div>
          </div>
        </div>
      )}

      {/* Floating Rest Timer */}
      {timer.active && (
        <div style={{
          position: "fixed", bottom: 0, left: 0, right: 0,
          background: "#0d0d0d", borderTop: `2px solid ${d.color}`,
          padding: "12px 20px", display: "flex", alignItems: "center", gap: "16px",
          zIndex: 100, boxShadow: "0 -8px 32px rgba(0,0,0,0.6)"
        }}>
          {/* Ring timer */}
          <div style={{ position: "relative", width: "52px", height: "52px", flexShrink: 0 }}>
            <svg width="52" height="52" style={{ transform: "rotate(-90deg)" }}>
              <circle cx="26" cy="26" r="20" fill="none" stroke="#1a1a1a" strokeWidth="3" />
              <circle cx="26" cy="26" r="20" fill="none" stroke={d.color} strokeWidth="3"
                strokeDasharray={circumference} strokeDashoffset={circumference * (1 - timerPct / 100)}
                style={{ transition: "stroke-dashoffset 1s linear" }} />
            </svg>
            <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: "bold", color: d.color, letterSpacing: "-0.5px" }}>
              {fmtTime(timer.secs)}
            </div>
          </div>

          {/* Label */}
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: "8px", letterSpacing: "3px", color: "#444", marginBottom: "2px" }}>REST TIMER</div>
            <div style={{ fontSize: "12px", color: "#aaa", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{timer.label}</div>
          </div>

          {/* Controls */}
          <div style={{ display: "flex", gap: "8px", flexShrink: 0 }}>
            <button onClick={toggleTimer} style={{
              background: timer.paused ? d.color : "transparent",
              border: `1px solid ${d.color}`, color: timer.paused ? "#000" : d.color,
              padding: "7px 14px", cursor: "pointer", fontSize: "10px", letterSpacing: "2px",
              fontFamily: "'Courier New', monospace", fontWeight: "bold"
            }}>{timer.paused ? "▶ GO" : "⏸"}</button>
            <button onClick={stopTimer} style={{
              background: "transparent", border: "1px solid #333", color: "#555",
              padding: "7px 12px", cursor: "pointer", fontSize: "10px",
              fontFamily: "'Courier New', monospace"
            }}>✕</button>
          </div>
        </div>
      )}
    </div>
  );
}
