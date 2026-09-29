// Historical facts are cited separately from the original teaching simulations.
export interface CaseSource { title: string; url: string; use: string }
export interface StakeholderPlan {
  name: string
  relationship: string
  motivation: string
  // Thinking, Feeling, Seeing, Saying, Hearing, Doing — in that order.
  before: [string, string, string, string, string, string]
  after: [string, string, string, string, string, string]
  questions: string
  bridge: string
  validation: string
  aim: string
  channel: string
  message: string
  frequency: string
  rationale: string
}
export interface IncidentCase {
  id: string
  title: string
  focus: { zh: string; en: string }
  facts: { text: string; source: number }[]
  sources: CaseSource[]
  snapshot: string
  unknowns: string
  issues: string
  interpretation: { zh: string; en: string }
  team: string
  stakeholders: StakeholderPlan[]
  ethics: [string, string, string][]
  comments: string
  briefing: string
  debrief: string
}

export const incidentCases: IncidentCase[] = [
  {
    id: 'crowdstrike', title: 'Scenario 01 · CrowdStrike · 19 July 2024',
    focus: { zh: '恢复服务时，怎样避免“修复已发布”被误解为“业务已恢复”？', en: 'How do we prevent “fix available” from being understood as “service restored”?' },
    facts: [
      { text: 'CrowdStrike’s 19 July statement attributed the outage to a defective Falcon content update affecting Windows hosts, said Mac/Linux hosts were unaffected, and said it was not a cyberattack.', source: 0 },
      { text: 'Its 24 July preliminary review (updated 25 July) records a 04:09–05:27 UTC exposure window on 19 July and a validation defect. These details belong to the later debrief.', source: 1 },
    ],
    sources: [
      { title: 'CrowdStrike · To Our Customers and Partners · 19 July 2024', url: 'https://www.crowdstrike.com/en-us/blog/to-our-customers-and-partners/', use: 'Contemporaneous scope, acknowledgement, recovery and impersonation warning.' },
      { title: 'CrowdStrike · Preliminary Post Incident Review · 24 July 2024; updated 25 July', url: 'https://www.crowdstrike.com/en-us/blog/falcon-content-update-preliminary-post-incident-report/', use: 'Retrospective technical explanation; vendor account, not independent adjudication.' },
    ],
    snapshot: 'You are CrowdStrike’s incident communications team, immediately after the 19 July public acknowledgement. T0 is the exercise start, not an asserted historical clock time. Design the next four hours of communication for manager approval. Customer recovery is still in progress.',
    unknowns: 'Do not assume the affected host count, any customer’s recovery time, financial losses, or a completed root-cause investigation. Treat local service status as customer-validated evidence. The exact later exposure window is not an input to the opening message.',
    issues: 'A defective update creates endpoint unavailability; endpoint dependencies interrupt customers’ services; uneven recovery produces contradictory status reports; ambiguous “fixed” language can prompt premature reopening; urgency makes unofficial repair offers attractive. Separate the confirmed trigger from still-unverified engineering causes. The communication problem is safe coordination across vendor, administrators and service users, alongside accountability for the original failure.',
    interpretation: { zh: '技术修复、终端恢复、用户业务恢复是三个不同状态。用这一差别串起问题分析、各受众消息和验收指标，才比泛泛地“及时更新、表达歉意”更有分析深度。不要把非网络攻击说成不存在任何安全风险。', en: 'Distinguish update remediation, endpoint recovery and usable customer services. Carry that distinction into stakeholder messages and success checks. A non-malicious trigger does not remove the risk of opportunistic scams.' },
    team: 'MOCK-CS · A: incident lead / manager brief; B: evidence and technical liaison; C: stakeholder and empathy lead; D: writing and accessibility; E: ethics and approval log; F: feedback, quality check and scan. For four members, combine B/E and D/F.',
    stakeholders: [
      {
        name: 'Customer IT administrators', relationship: 'Direct recovery implementers; high operational influence and high interest. Separate on-site staff from remote staff without working endpoints.', motivation: 'Restore critical services without causing a second failure or exposing credentials.',
        before: ['Is this an attack or a bad update?', 'Under pressure and wary of unsafe fixes.', 'Crashed Windows machines and inconsistent advice.', 'Which instructions are authentic?', 'Management wants an immediate ETA.', 'Trying to reach support from another device.'],
        after: ['I understand the confirmed scope and local unknowns.', 'Supported, with realistic expectations.', 'A versioned official recovery reference.', 'I can explain our next validated step.', 'One technical owner resolves conflicting guidance.', 'Uses an approved procedure and reports blockers.'],
        questions: 'Which systems are in scope? Where is the authoritative guidance? What if we cannot access the portal? How do we report a failed recovery?',
        bridge: 'The Windows update defect is confirmed; a published fix does not prove your endpoints are recovered. Use the verified support route and report local results before declaring service restored.',
        validation: 'Technical liaison asks the administrator to restate the applicable procedure and status distinction; unresolved access or recovery blockers enter the incident queue and are reviewed every 30 minutes.',
        aim: 'Technical liaison owns safe uptake of current guidance and an accurate picture of local recovery.',
        channel: 'Authenticated support portal plus a pre-established phone bridge reachable from an unaffected device; tracked support tickets and verbal read-back provide feedback.',
        message: 'We recognise the disruption to your operations. The confirmed defect affects the Windows content update. Obtain the current recovery guidance through our verified support channels; do not use unsolicited repair tools. Tell our technical liaison which critical services remain unavailable and any access barriers. We cannot yet confirm your recovery time. Our next technical update is at T+30 minutes.',
        frequency: 'At T0, every 30 minutes for four hours, and immediately when guidance changes or a safety-critical blocker appears. Confirm unchanged status at each scheduled update.',
        rationale: 'Shannon–Weaver: an unaffected device avoids the failed endpoint channel; versioning reduces conflicting instructions. Schramm: read-back checks technical interpretation. Never request credentials or recovery keys in public tickets; collect only necessary diagnostics in the secure channel.',
      },
      {
        name: 'Customer executives and continuity leads', relationship: 'Direct organisational decision-makers; high influence and interest. Critical-service leaders may prioritise safety over revenue.', motivation: 'Decide whether to continue manual operations, reallocate resources or pause services.',
        before: ['Does “fixed” mean we can reopen?', 'Anxious about harm, cost and reputation.', 'Different teams reporting different states.', 'Give me a dependable decision point.', 'Customers and the board demand answers.', 'Pressing IT for an unsupported deadline.'],
        after: ['A vendor fix is only one recovery milestone.', 'Able to act without false certainty.', 'A service-level status and uncertainty summary.', 'We will reopen only after our service checks.', 'A named liaison explains current limitations.', 'Approves continuity measures and verification owners.'],
        questions: 'What decisions can we make now? Which services need our own validation? What is the next checkpoint? Who escalates critical harm?',
        bridge: 'Keep your continuity arrangements until your service owners validate recovery; our liaison can prioritise blockers but cannot certify your business operations.',
        validation: 'Account liaison records the continuity decision, named service owner and unresolved questions; a daily transition review is proposed after the initial four hours.',
        aim: 'Account lead enables defensible continuity decisions and resource escalation.',
        channel: 'Short executive call followed by a written situation report; a decision log and dedicated escalation contact capture questions.',
        message: 'We apologise for the impact on your services. Technical remediation is available, but your recovery must be verified locally. Please keep appropriate continuity measures active and identify your highest-consequence service blockers. We will route these through your account liaison. No organisation-wide recovery deadline is confirmed. We will review the evidence with you at T+60 minutes.',
        frequency: 'T0 and hourly during the initial four hours; immediate contact for a critical-service escalation or material change.',
        rationale: 'Lasswell: an accountable account lead sends decision-relevant information to continuity owners; success is a recorded, informed decision. A call handles ambiguity and the report preserves evidence. Do not conceal adverse status to protect sales or promise compensation outside delegated authority.',
      },
      {
        name: 'People using affected customer services', relationship: 'Indirectly affected travellers, patients, shoppers or service users; low individual influence, high interest and potentially high vulnerability. Their service provider controls local status.', motivation: 'Find a usable alternative and avoid wasting time or missing essential services.',
        before: ['Is my service available?', 'Frustrated or frightened by uncertainty.', 'Queues, cancellations or inaccessible services.', 'What can I do now?', 'A headline says the problem is fixed.', 'Retrying or seeking help through social media.'],
        after: ['Only my provider can confirm my service status.', 'Acknowledged rather than dismissed.', 'A timestamped local notice and support route.', 'I know where to ask about my situation.', 'The same core facts in accessible language.', 'Uses the provider’s confirmed alternatives.'],
        questions: 'Who can confirm my booking, appointment or transaction? Where is accessible help? When will that provider update me?',
        bridge: 'The supplier incident and your local service status are different; use your provider’s verified information and assistance route.',
        validation: 'Customer-facing organisations return the most common misunderstood points through the account lead; sample users are asked to identify their next action, without sharing their personal case publicly.',
        aim: 'Public communications lead equips service providers with an accurate plain-language explanation while respecting local decision authority.',
        channel: 'Public accessible status notice and a co-ordinated provider briefing for their call centres, physical notices and accessible channels; aggregate question themes return via customer liaisons.',
        message: 'A CrowdStrike Windows update has disrupted some organisations’ services. We are sorry for the disruption. Recovery is continuing and availability varies by provider. Please check your service provider’s verified updates for your appointment, journey or transaction. Do not send personal details to unsolicited accounts offering help. We will publish the next supplier-level update at T+60 minutes.',
        frequency: 'Initial notice at T0; hourly supplier updates and prompt correction of misleading recovery claims. Providers set and announce their own local cadence.',
        rationale: 'Schramm: translate vendor terminology into what a person needs to do. Accessible offline provider channels reach people who cannot use a status page. Prioritise vulnerable users’ questions; do not publish customer identities or give unverified local travel/clinical advice.',
      },
      {
        name: 'CrowdStrike engineers and support staff', relationship: 'Direct responders; high operational influence and high interest. Shift workers and contractors need the same controlled facts.', motivation: 'Resolve the incident while avoiding contradictory advice, fatigue and blame.',
        before: ['Which statement is approved?', 'Overloaded and afraid of making a mistake.', 'Duplicate tickets and multiple chat threads.', 'Can someone resolve this contradiction?', 'Customers repeating different versions of “fixed”.', 'Switching between recovery and public queries.'],
        after: ['I know my role and escalation boundary.', 'Safe to report uncertainty and fatigue.', 'One versioned internal incident record.', 'This is confirmed; that needs verification.', 'A consistent shift handover.', 'Logs evidence, delegates and escalates safely.'],
        questions: 'Who approves public statements? Where do we record contradictions? Who takes over if an owner is unavailable?',
        bridge: 'Report facts and unknowns without blame; one incident lead owns decisions and one communications lead owns the public version.',
        validation: 'Support lead audits a small sample of responses each cycle and updates the script when repeated questions or mismatches appear; shift handover includes acknowledgement.',
        aim: 'Incident lead maintains coherent decisions, psychologically safe escalation and sustainable handover.',
        channel: 'Restricted incident bridge and a versioned internal fact log; asynchronous questions queue plus short handover read-back.',
        message: 'Use the current approved facts in the incident log. Do not equate a released fix with completed customer recovery. Record the source and time for new evidence, flag conflicting guidance immediately, and route media queries to the communications lead. Tell your shift lead if workload prevents safe work. The next coordination checkpoint is T+30 minutes.',
        frequency: 'T0, every 30 minutes, at each handover and immediately for conflicting or unsafe guidance.',
        rationale: 'Shannon–Weaver: reduce channel overload through a single versioned record. Schramm: hierarchy must not suppress concerns. Limit customer diagnostics to staff who need them; no public blame or unsupported fault attribution.',
      },
      {
        name: 'Technology partners and managed service providers', relationship: 'Direct integration and recovery partners; high influence and interest. Microsoft and managed service providers have different technical and customer-facing roles.', motivation: 'Coordinate compatible recovery support without duplicating or contradicting guidance.',
        before: ['Whose instructions apply to this environment?', 'Concerned about shared-customer trust.', 'Different recovery environments and ticket queues.', 'Who owns this joint blocker?', 'Customers attributing all failures to one vendor.', 'Publishing separate advice under pressure.'],
        after: ['Ownership and compatibility checks are explicit.', 'Able to challenge uncertain guidance.', 'A jointly checked reference and issue register.', 'We can explain our part without deflecting blame.', 'Consistent scope across partner briefings.', 'Routes shared blockers to named owners.'],
        questions: 'Who validates environment-specific advice? What can be shared? How do we correct conflicting instructions?',
        bridge: 'Validate each environment-specific message with the responsible technical owner, share only necessary diagnostics and synchronise corrections.',
        validation: 'Partner liaison obtains acknowledgement of the guidance version and records unresolved conflicts; any unsafe mismatch triggers an immediate correction to affected recipients.',
        aim: 'Partner lead secures compatible guidance and clear shared-customer escalation.',
        channel: 'Verified partner bridge and restricted shared issue tracker; partner read-back and tagged blockers feed the technical team.',
        message: 'Please nominate one technical and one communications contact. Verify that advice for your environment matches the current CrowdStrike guidance before forwarding it. Report conflicting steps and customer access barriers through the shared issue register; avoid sharing unnecessary customer data. We will reconcile outstanding issues at T+30 minutes and issue urgent corrections as needed.',
        frequency: 'At activation, every 30 minutes while conflicting guidance remains, then hourly; immediately after a material revision.',
        rationale: 'Lasswell: specialist partners communicate to their own administrators with a common factual core. A joint bridge resolves ambiguity faster than mass email. Do not shift blame or publish another organisation’s private incident details.',
      },
      {
        name: 'Public accountability audiences: media, authorities and investors', relationship: 'Indirect oversight audiences with high scrutiny and influence. Media need publishable facts; authorities need secure evidence; investors need consistent material information.', motivation: 'Assess public impact and accountability without relying on rumours or selective briefings.',
        before: ['How serious is the impact?', 'Sceptical of reassurance.', 'A rapidly changing global news story.', 'What is known, and what is still uncertain?', 'Conflicting descriptions of the incident.', 'Seeking numbers and explanations.'],
        after: ['Scope and evidential limits are separated.', 'Able to scrutinise an accountable spokesperson.', 'Timestamped updates and visible corrections.', 'I can distinguish preliminary and verified findings.', 'Consistent facts across public channels.', 'Submits questions through the appropriate route.'],
        questions: 'What can be confirmed now? Which figures are verified? When will the next update and investigation findings be available?',
        bridge: 'Provide the same confirmed public core, while routing confidential oversight evidence separately; no unsupported scale or loss estimates.',
        validation: 'Communications lead logs unanswered media questions; compliance liaison tracks authority acknowledgements separately; investor relations flags contradictions for correction in the public record.',
        aim: 'Communications, compliance and investor-relations leads maintain consistent accountability with distinct evidence access.',
        channel: 'Timestamped public statement and Q&A for media; verified secure authority liaison; approved public investor channels. Separate question registers share one fact log.',
        message: 'We take responsibility for the disruption caused by the defective Windows content update and apologise to affected customers. Recovery support is continuing. We are not publishing unverified global recovery or loss estimates. The next public update is at T+60 minutes; authorities can obtain relevant evidence through our verified liaison. We will identify the scope and timing of a reviewed incident report when confirmed.',
        frequency: 'Public update at T0 and hourly; secure authority contact immediately on material safety concerns or applicable reporting triggers; investor updates follow material verified changes and the applicable process.',
        rationale: 'Lasswell: assess effect through corrected reporting and answered oversight questions, not publicity volume. Public transparency does not require customer-identifying diagnostics. Compliance verifies relevant obligations rather than inventing a universal notification deadline.',
      },
    ],
    ethics: [
      ['Transparency vs. security', 'Publish impact, uncertainty and safe support routes; keep credentials, customer logs and exploitable environment details restricted.', 'Security lead records the reason for any withheld detail, an owner and a next review at T+60. Avoid using “security” to withhold adverse impact.'],
      ['Reassurance vs. accuracy', 'Acknowledge harm and communicate the next checkpoint without an unsupported restoration promise.', 'Technical and service owners verify each restoration claim separately; publish a correction where the earlier claim appeared.'],
      ['Public interest vs. commercial priorities', 'Prioritise critical-service impact and underserved users when allocating communication support.', 'Incident lead documents prioritisation criteria; sales value must not be the sole reason for escalation order.'],
    ],
    comments: 'Proposed approval: manager approves the T0 holding statement, channel owners and four-hour cadence. Technical lead signs off scope; security lead checks sensitive details; communications lead versions every release. Target: every nominated customer/partner liaison acknowledges the next step within 30 minutes; any non-response is followed up by another verified route. Review unanswered critical questions each cycle. These are exercise targets, not measured historical results.',
    briefing: 'Manager, our central risk is that “fix released” is read as “your service is restored”. We propose one verified factual core, with technical instructions for administrators, continuity decisions for executives and local-service guidance through providers. Approve the holding statement and named owners now. We will report acknowledgement gaps and unresolved critical-service blockers at T+30, while publishing an honest hourly update.',
    debrief: 'Use the later preliminary review to discuss how validation and rollout assumptions created a technical failure. It does not establish what every customer knew during the first hour. In the mock plan, success is demonstrated understanding and verified local action, not a high message count.',
  },
  {
    id: 'medibank', title: 'Scenario 02 · Medibank · 7 November 2022',
    focus: { zh: '承认数据失窃的严重性，同时避免通知本身再次暴露敏感信息。', en: 'Acknowledge data theft without making the notification itself a second privacy harm.' },
    facts: [
      { text: 'On 7 November 2022 Medibank said approximately 9.7 million current/former customers and some representatives had personal details accessed. It announced it would not pay a ransom, continued support and an external review.', source: 0 },
      { text: 'On 5 June 2024 OAIC announced civil penalty proceedings concerning the October 2022 breach. Its statement describes allegations about protection of personal information, not a final judicial determination.', source: 1 },
    ],
    sources: [
      { title: 'Medibank · Cybercrime update · 7 November 2022', url: 'https://www.medibank.com.au/livebetter/newsroom/post/medibank-cybercrime-update%207%20November', use: 'Contemporaneous public decision and affected-customer scope; organisation’s account.' },
      { title: 'OAIC · Civil penalty action against Medibank · 5 June 2024', url: 'https://www.oaic.gov.au/news/media-centre/oaic-takes-civil-penalty-action-against-medibank', use: 'Later regulatory allegations and harm context; not evidence of the final court outcome.' },
    ],
    snapshot: 'You are Medibank’s communication planning team after its 7 November announcement. Plan the next 24 hours before any later publication of stolen records is treated as known. T0 is the exercise start. Prepare customer, staff and oversight communication for manager approval.',
    unknowns: 'Which exact records of an individual were taken or may be published; future criminal behaviour; any promise that stolen data can be deleted. Do not imply all 9.7 million people had the same health information exposed. No later court outcome is assumed.',
    issues: 'Unauthorised access creates privacy and identity risks; possible exposure of health information creates distinctive distress and stigma; uncertainty at the individual level makes generic reassurance inadequate; public notices and shared mailboxes can themselves expose sensitive information; ransom communication may be heard as abandonment. Root-cause details require investigation, while safe support and honest acknowledgement cannot wait.',
    interpretation: { zh: '把“规模很大”进一步拆成身份风险、健康隐私、关系与语言障碍。After 的目标应是“能安全获得支持、理解已知与未知”，不能写成“客户不再担心”或保证数据不会发布。', en: 'Separate identity risk, health privacy, relationship safety and language access. A credible After state is informed, supported agency, not guaranteed reassurance or a promise that stolen data will never be released.' },
    team: 'MOCK-MB · A: incident lead / manager brief; B: evidence liaison; C: customer empathy; D: writing and accessibility; E: privacy and ethics; F: feedback and submission checks. For four members, combine B/E and D/F.',
    stakeholders: [
      {
        name: 'Current and former customers', relationship: 'Direct data subjects; high interest, low individual influence. Include former customers who no longer use the app and authorised representatives with verified authority.', motivation: 'Understand personal exposure and take proportionate protective action.',
        before: ['Was my data included?', 'Angry and uncertain.', 'A broad announcement without personal detail.', 'How do I know this message is real?', 'Rumours about what was stolen.', 'Searching for answers or ignoring suspicious notices.'],
        after: ['General scope and my verified status are different.', 'Heard, without false guarantees.', 'A safe contact route and plain-language guidance.', 'I can ask about my own record privately.', 'Consistent information from verified staff.', 'Verifies the channel and seeks tailored support.'],
        questions: 'Am I affected even if I left? What categories are confirmed for me? How do I verify a contact and obtain help?',
        bridge: 'The announcement includes former customers. Obtain your verified individual information through a trusted contact route; a general notice cannot establish your exact exposure.',
        validation: 'Customer-care lead samples conversations for correct understanding of general versus individual scope; unresolved exposure questions enter a restricted case queue with a callback owner.',
        aim: 'Customer-care lead helps customers verify contact and obtain proportionate individual guidance.',
        channel: 'Plain-language direct notice through established contact details, supported by the official public update page and verified inbound telephone support; secure case follow-up and teach-back collect feedback.',
        message: 'We are sorry that your trust and privacy have been put at risk. Current and former customers may be affected, but the information involved differs between people. Contact us through a channel you independently know to be genuine to discuss your verified information and available support. Do not send passwords or health details in reply to an unsolicited message. We will update public information at T+24 hours, sooner if material facts change.',
        frequency: 'Begin at T0; issue individual notices as verified information becomes available. Public update within 24 hours, including unchanged status; urgent protective information is not held for the next daily cycle.',
        rationale: 'Schramm: acknowledge broken trust and explain scope without jargon. Existing contact routes and phone support include former and digitally excluded customers. Neutral notification content avoids health details in email previews; verify representatives before disclosure.',
      },
      {
        name: 'Customers facing heightened privacy or access risk', relationship: 'Direct data subjects needing tailored support: people concerned about sensitive health information, unsafe shared contact channels, disability access or language barriers. Low power does not mean low priority.', motivation: 'Retain control over disclosure and access support without stigma or unwanted third-party involvement.',
        before: ['Could someone else see a message about my care?', 'Exposed, frightened or ashamed.', 'A shared phone or an inaccessible explanation.', 'Please do not tell my family or employer.', 'Speculation that everyone has identical exposure.', 'Avoiding contact because the channel feels unsafe.'],
        after: ['I can choose a safer way to communicate.', 'Respected and in control of the next step.', 'A neutral notice and a consent-based support option.', 'Use this contact method; do not leave details elsewhere.', 'An interpreter or support person only with my agreement.', 'Chooses a safe callback and asks for tailored help.'],
        questions: 'Can you avoid voicemail or shared email? Can I use an interpreter? Can you confirm what is known without repeating sensitive content?',
        bridge: 'Ask which contact route is safe before discussing details; recognise distress without assuming the person’s diagnosis, family situation or preferred language.',
        validation: 'Specialist support lead confirms safe-contact preferences and asks the person to choose the next step. Record only necessary preferences and escalate urgent safety concerns via trained support protocols.',
        aim: 'Specialist customer-support lead preserves agency and access while reducing secondary disclosure.',
        channel: 'Neutral invitation to a verified private callback, accessible formats and consent-based interpreter support; confidential feedback handled by the same case owner.',
        message: 'We recognise that privacy concerns can feel deeply personal. You do not need to describe your health history in a public forum or ordinary reply email. Please tell our verified support team how and when it is safe to contact you, and whether you would like accessibility or interpreter assistance. We cannot guarantee what a criminal will do, but we can explain verified information and help you choose available support.',
        frequency: 'Offer support at T0; follow up at the person’s agreed safe time. Review new high-risk requests each working hour during the exercise; urgent concerns use the immediate escalation path.',
        rationale: 'Schramm: relationship and lived context change what a “helpful” contact means. Private dialogue supports listening and agency. Do not label a person vulnerable without asking; no health content in voicemail, group email or a public spreadsheet.',
      },
      {
        name: 'Customer service employees and incident responders', relationship: 'Direct support providers; high operational influence and interest, exposed to distress and heavy demand.', motivation: 'Give accurate help without causing disclosure or being forced to guess.',
        before: ['What can I safely confirm?', 'Overwhelmed by distress and anger.', 'Long queues and changing information.', 'I do not have that person’s verified answer yet.', 'Pressure to reassure quickly.', 'Repeating general scripts to unique situations.'],
        after: ['I know the verification and escalation limits.', 'Supported and able to ask for help.', 'Current scripts, safe-contact fields and private case notes.', 'I can acknowledge uncertainty and arrange follow-up.', 'Consistent updates from the incident lead.', 'Listens, verifies and records the agreed next action.'],
        questions: 'What can I say before verification? How do I protect a shared contact channel? Where do I send complex distress or exposure questions?',
        bridge: 'Acknowledge the concern, verify authority, check contact safety, explain only confirmed information, and agree a private follow-up rather than guessing.',
        validation: 'Support lead reviews de-identified questions and samples script use at each shift; repeated confusion changes the FAQ, not just staff performance scores.',
        aim: 'Support lead maintains accurate, empathetic and privacy-preserving conversations.',
        channel: 'Restricted script library, shift briefing and a confidential escalation desk; staff questions and de-identified call themes inform revisions.',
        message: 'Ask whether this is a safe way to speak before discussing an individual case. Use only verified case information and explain what is still being checked. Do not promise that data will remain private or that paying a ransom would resolve the harm. Record the agreed safe follow-up and escalate needs beyond your training. Raise workload or wellbeing concerns with your shift lead.',
        frequency: 'Before each shift, after material evidence or script changes, and every two hours for unresolved question themes during the first day.',
        rationale: 'Shannon–Weaver: current scripts reduce semantic noise; reflective listening checks meaning. Role-based access protects case data. Staff are not expected to provide counselling or legal conclusions beyond their role.',
      },
      {
        name: 'Healthcare providers and customer support partners', relationship: 'Indirectly affected trusted intermediaries; moderate-to-high influence, high interest. Providers and specialist support organisations need different information from a patient’s insurer.', motivation: 'Support continuity of care and avoid repeating or exposing stolen information.',
        before: ['What can I tell a worried patient?', 'Concerned about trust and care disruption.', 'Questions beyond the provider’s access to evidence.', 'Should we share patient details to check exposure?', 'Public speculation about health records.', 'Seeking a trusted referral route.'],
        after: ['The insurer confirms exposure through verified channels.', 'Prepared to support without overstepping.', 'A minimal, current referral guide.', 'We can help you reach the appropriate support.', 'Clear boundaries on data sharing.', 'Uses consent-based referrals and avoids unnecessary records.'],
        questions: 'Who verifies exposure? What can be shared with consent? How do we refer someone without collecting another copy of sensitive data?',
        bridge: 'Provide a safe referral and general explanation; do not infer individual exposure from rumours or request health records merely to discuss the incident.',
        validation: 'Partner lead asks each partner to describe its referral process; ambiguous questions return to privacy and customer-care owners before the guide is updated.',
        aim: 'Partner liaison enables accurate referrals and appropriate support boundaries.',
        channel: 'Verified provider/partner briefing and a concise referral guide; restricted partner questions queue, with individual referrals using consent-based channels.',
        message: 'Please direct questions about an individual’s exposure to Medibank’s verified support route. Do not seek or circulate stolen records to establish whether a patient is affected. Use consent-based referrals and share only the minimum information needed for support. Tell our partner liaison where the referral process fails or the guidance is unclear. A revised partner briefing will be available at T+24 hours.',
        frequency: 'Initial briefing at T0; daily thereafter, and immediately when referral or protective guidance materially changes.',
        rationale: 'Lasswell: trusted intermediaries can help people reach support, but lack authority to confirm insurer evidence. A written guide gives consistency and a questions channel repairs gaps. Privacy and patient autonomy outweigh convenience of bulk data sharing.',
      },
      {
        name: 'OAIC, law enforcement and relevant oversight bodies', relationship: 'External authorities with high influence and high interest; privacy oversight and criminal investigation have distinct remits.', motivation: 'Receive reliable evidence and assess harm without compromising investigation or victim privacy.',
        before: ['Which statements have been independently checked?', 'Concerned about incomplete disclosure.', 'A changing scope and separate evidence holders.', 'Who owns this evidence and chronology?', 'Public claims that may exceed the evidence.', 'Requesting records and clarification.'],
        after: ['Verified facts and hypotheses are separately logged.', 'Able to test the organisation’s account.', 'A controlled chronology with provenance.', 'We know who will answer each outstanding question.', 'Prompt corrections through an authenticated liaison.', 'Acknowledges receipt and requests necessary follow-up.'],
        questions: 'What evidence supports scope? What changed since the last notice? How are customers protected? Who owns outstanding answers?',
        bridge: 'Supply the verified chronology and relevant evidence through secure, role-appropriate channels, explicitly identifying unknowns and correcting earlier estimates.',
        validation: 'Privacy liaison tracks acknowledgements and requests in a restricted register; missed agreed response times escalate to the incident lead immediately.',
        aim: 'Privacy and investigation liaisons support accountable oversight and lawful, limited evidence exchange.',
        channel: 'Authenticated authority contacts and secure evidence transfer; documented acknowledgement and a request/response register. Separate access for different authority remits.',
        message: 'Our current verified scope and chronology are ready for review through the agreed secure channel. We distinguish confirmed evidence from open investigative questions and will correct the record when findings change. Please identify additional information required for your remit and confirm receipt. Our privacy liaison owns customer-impact questions; the investigation liaison owns evidence-preservation coordination.',
        frequency: 'At T0, on material scope changes and at agreed investigation checkpoints; privacy/compliance owners confirm applicable obligations and deadlines separately.',
        rationale: 'A public press release cannot replace a secure oversight response. Traceability permits scrutiny while minimising onward exposure. Do not invent a statutory deadline, claim a finding of liability, or use investigation as a blanket excuse for silence toward customers.',
      },
      {
        name: 'Board, investors, media and wider public', relationship: 'Governance and accountability audiences; high influence, varied interest. Board decisions use confidential detail, while media and investors receive a consistent public core.', motivation: 'Understand organisational accountability, support commitments and the ransom decision without sensationalising personal harm.',
        before: ['Why refuse payment if people are at risk?', 'Sceptical, angry or worried about long-term trust.', 'Commercial statements beside customer distress.', 'What are you doing for affected people?', 'Speculation that payment guarantees deletion.', 'Seeking explanation and measurable commitments.'],
        after: ['No payment decision can guarantee data control.', 'Able to question an accountable decision-maker.', 'Specific support commitments and known limitations.', 'Show how support and review are progressing.', 'Consistent facts rather than selective reassurance.', 'Uses the public Q&A or governance route to challenge gaps.'],
        questions: 'Why this decision? What support is available? What remains unknown? How will the review and its actions be reported?',
        bridge: 'Explain the decision and uncertainty alongside concrete support; do not make organisational reputation the centre of a message about personal harm.',
        validation: 'Communications lead records unresolved public questions; board secretary records support-resource decisions separately. Feedback about inaccessible support triggers a service review, not a defensive press response.',
        aim: 'Executive spokesperson and governance lead explain accountable decisions and resource customer support.',
        channel: 'Public statement and accessible Q&A; approved investor channels share material public facts; board receives a restricted decision brief. Questions are logged and routed by remit.',
        message: 'We apologise for the distress and recognise that sensitive information cannot simply be replaced. We have announced that we will not pay the ransom; this does not mean we can guarantee that data will not be published. Our priority is verified individual information and support. We will provide a public progress update within 24 hours and explain the scope of the external review as confirmed. Please do not circulate personal records.',
        frequency: 'T0 explanation and daily public progress; board checkpoints at T+4 and T+24 hours in this exercise, with immediate escalation for significant new harm.',
        rationale: 'Lasswell: an accountable executive explains a consequential choice. Separate public accountability from restricted governance detail. Do not publish sensational health examples, give selective unverified financial forecasts, or imply that an external review proves the organisation has already fixed everything.',
      },
    ],
    ethics: [
      ['Transparency vs. further exposure', 'Tell each person what is verified for them through a safe channel; keep public notices aggregated and neutral.', 'Privacy lead reviews templates and contact preferences. Never reproduce leaked records, even as evidence of transparency.'],
      ['Public interest vs. organisational position', 'Explain the announced no-ransom decision and its uncertainty while supporting people who disagree.', 'Manager approves support resources and tracks access failures. Do not promise deletion, guaranteed prevention of publication or universal support outcomes.'],
      ['Privacy vs. support access', 'Verify identity proportionately, check representative authority and offer accessible alternatives.', 'Collect only information needed for support; restrict case access and do not demand unnecessary sensitive documents to prove distress.'],
    ],
    comments: 'Proposed approval: manager approves neutral notices, safe-contact procedures and the 24-hour cadence; privacy lead reviews all individual disclosures; technical liaison verifies scope; support lead owns callbacks. Exercise target: every high-risk support request receives a named owner in the hourly review, and every conversation records an agreed next action where the person consents. Audit de-identified misunderstanding themes at T+4 and T+24; do not measure success by reduced complaints alone.',
    briefing: 'Manager, the communication risk extends beyond identity theft to personal dignity and unsafe disclosure. Approve a neutral initial notice with a verified private route, separate support for people with heightened risks, and a common evidence log. We will explain the ransom decision without guaranteeing control over stolen data. At T+4 we will report support access barriers, unresolved personal-status questions and whether our notices are understood.',
    debrief: 'The later OAIC announcement helps test the adequacy of privacy governance and the seriousness of harm. It must remain labelled as a 2024 allegation, not a finding available to the 7 November 2022 team or a statement about the latest court status.',
  },
  {
    id: 'optus', title: 'Scenario 03 · Optus · 8 November 2023',
    focus: { zh: '当电话和网络失效时，怎样让安全相关消息真正到达受众？', en: 'How can safety-relevant messages reach people when their phone and internet channels fail?' },
    facts: [
      { text: 'The government-commissioned review documents the national Optus outage of 8 November 2023 and concludes that communication during the outage was inadequate, with particular concerns for vulnerable users.', source: 0 },
      { text: 'ACMA’s 8 November 2024 announcement reports that 2,145 people lacked access to emergency calling and 369 welfare checks were not conducted. Those later findings are not real-time figures for the exercise.', source: 1 },
    ],
    sources: [
      { title: 'Australian Government · Review into the Optus outage · Final report, March 2024', url: 'https://www.infrastructure.gov.au/sites/default/files/documents/review_into_the_optus_outage_of_8_november.pdf', use: 'Retrospective report, especially printed pp. 29–31 on communication and consumer impact.' },
      { title: 'ACMA · Triple Zero outage penalty · 8 November 2024', url: 'https://www.acma.gov.au/articles/2024-11/optus-pays-12-million-penalty-triple-zero-outage', use: 'Later emergency-call access and welfare-check findings; distinct from the 2025 outage.' },
    ],
    snapshot: 'You are Optus’s incident communications team during the confirmed nationwide outage on 8 November 2023. Plan the next four hours. T0 is an exercise checkpoint with outage confirmed but cause, restoration time and emergency-call reliability not fully verified. Design for customers who cannot read an app notification or call the usual help line.',
    unknowns: 'The restoration deadline, validated cause, number of unsuccessful emergency calls and whether a specific person can connect. Do not assume that network failover works for every device, or import 2024 investigation statistics into the opening statement.',
    issues: 'Network loss interrupts ordinary services and the very channels normally used for updates; emergency-call uncertainty creates potentially severe harm; businesses, resellers and critical services depend on the same infrastructure; vague or overconfident messages increase confusion; inaccessible online-only notices exclude those with the greatest need. Cause remains under investigation in the live scenario, while channel independence and safety escalation are immediate communication decisions.',
    interpretation: { zh: '这是 Shannon–Weaver 最直接的应用：受众收不到通知，不是他们没有认真看。先验证渠道可达性，再安排广播、线下服务点和可信机构转达；“短信已发送”不能当成已通知。急救可用性必须与一般网络恢复分开确认。', en: 'This is a direct Shannon–Weaver application: a failed channel cannot be repaired by sending more messages through it. Use independent, broadcast and physical routes, and verify emergency calling separately from ordinary network restoration.' },
    team: 'MOCK-OP · A: incident lead / manager brief; B: network evidence liaison; C: customer and accessibility lead; D: writing and media; E: safety and ethics; F: feedback and scan checks. For four members, combine B/E and D/F.',
    stakeholders: [
      {
        name: 'Residential customers', relationship: 'Direct service users; high interest, low individual influence. Some have an alternative connection; others have neither working phone nor internet.', motivation: 'Understand the outage, find trustworthy updates and avoid futile repeated actions.',
        before: ['Is the problem only my device?', 'Frustrated and isolated.', 'No service and an unreachable app.', 'How can I read an online update without internet?', 'Rumours through neighbours or radio.', 'Restarting devices or looking for another connection.'],
        after: ['The wider outage is confirmed; timing remains uncertain.', 'Acknowledged and able to locate an update route.', 'A consistent notice at an accessible service point.', 'I know when and where the next update will appear.', 'The same facts on broadcast and provider notices.', 'Uses an available verified route and reports remaining problems.'],
        questions: 'Is this a known outage? Where can I receive updates offline? Has my service actually recovered? When is the next update?',
        bridge: 'Use channels that do not depend on the failed network, and state the next update time even when a restoration time is unknown.',
        validation: 'Customer lead asks store teams and call centres on functioning routes to log which updates customers have actually heard; unserved groups trigger an additional offline distribution route.',
        aim: 'Customer communications lead ensures reachable, comprehensible outage information.',
        channel: 'Radio/TV briefings, physical store notices and an independently reachable status page; staffed offline enquiries and reports over functioning connections return feedback.',
        message: 'A widespread Optus outage is affecting services. We are sorry for the disruption. We do not yet have a verified restoration time. We will repeat updates through broadcasters, available service points and our status page where you can access it through a functioning connection. Our next update is at T+30 minutes, even if there is no change. Please do not assume your service is restored until it works for you.',
        frequency: 'T0 and every 30 minutes for the initial four hours; immediate correction when scope or safety advice changes.',
        rationale: 'Shannon–Weaver: the primary delivery channel has failed; independent and physical channels reduce exclusion. Short repeated messages aid recall, but social impressions or sent-SMS counts are not proof of receipt. Public feedback must not expose account identifiers.',
      },
      {
        name: 'People at elevated safety risk and their carers', relationship: 'Direct users and indirect carers relying on contact for safety; very high interest and urgency, often low influence. Access needs differ; do not assume everyone has a neighbour or alternative device.', motivation: 'Obtain verified help and avoid relying on an unavailable service.',
        before: ['Can I reach help if needed?', 'Afraid and cut off.', 'No signal and unclear safety advice.', 'What if I have no alternative connection?', 'Unverified claims that all emergency calls work.', 'Waiting, repeatedly calling, or seeking local assistance.'],
        after: ['I understand the stated limits of verified advice.', 'Taken seriously rather than given blanket reassurance.', 'Accessible, authority-checked information.', 'I can explain my access barrier to a trusted helper.', 'A consistent message via trusted care networks.', 'Uses the available verified assistance route for their situation.'],
        questions: 'What has actually been confirmed about emergency access? What if I have no functioning alternative? How can a carer obtain information safely?',
        bridge: 'State the uncertainty plainly, coordinate approved safety guidance with emergency authorities and reach people through consent-aware care and community networks.',
        validation: 'Safety liaison gathers de-identified access barriers from carers and service organisations; urgent inability-to-reach-help reports go immediately to the emergency coordination contact. Do not test emergency lines as a survey.',
        aim: 'Safety and accessibility lead prioritises reach and assistance coordination for high-consequence access failures.',
        channel: 'Authority-coordinated broadcast guidance, established care-provider contact trees on functioning networks and physical assistance points where available; confirmed receipt from intermediaries and confidential escalation.',
        message: 'We recognise that loss of contact can create serious safety concerns. We cannot confirm reliable emergency calling for every affected service. Follow current guidance issued with emergency authorities through functioning broadcast or local assistance channels. If you cannot access that information, ask an available trusted person or service point to help obtain it. Carers should report access barriers through the verified coordination route. We will update safety information as soon as it is confirmed.',
        frequency: 'Immediate priority at T0; review safety information every 15 minutes and transmit material changes immediately. Follow-up is individually coordinated, not dependent on a mass SMS.',
        rationale: 'Schramm: trust, disability and isolation affect comprehension and access. A general outage notice is insufficient for safety needs. Never promise automatic emergency-call failover; limit personal details shared with intermediaries and respect consent where applicable.',
      },
      {
        name: 'Business and critical-service customers', relationship: 'Direct organisational users and indirect users of their services; high influence and interest. Small businesses may lack a dedicated continuity team.', motivation: 'Make safe continuity decisions and communicate accurately with their own users.',
        before: ['Can we keep operating?', 'Under pressure about safety and lost trade.', 'Unavailable connectivity and disrupted workflows.', 'Which alternative can we actually use?', 'Different restoration predictions from different sources.', 'Improvising manual operations.'],
        after: ['Continuity depends on locally verified alternatives.', 'Able to make a bounded decision.', 'A clear service-impact brief and contact owner.', 'We will verify our workflow before reopening.', 'A realistic checkpoint, not an invented ETA.', 'Documents continuity decisions and priority blockers.'],
        questions: 'What services are affected? Is our alternative independent? Who escalates a critical dependency? When do we revalidate operations?',
        bridge: 'Check your available continuity arrangements locally; an announced network recovery does not certify every dependent workflow.',
        validation: 'Business liaison records each priority organisation’s owner, usable contact route and unresolved dependency; checks whether the next action is understood, including for small-business representatives.',
        aim: 'Business liaison supports safe continuity and meaningful escalation.',
        channel: 'Verified account contact using functioning independent connectivity; short written impact brief when deliverable; logged decisions and local service confirmations provide feedback.',
        message: 'The outage may interrupt your operations and customer contact. Please activate locally validated continuity arrangements and identify dependencies that create immediate safety or essential-service concerns. Send those through your verified account contact using a working connection. We cannot yet provide a reliable restoration time. Our next business briefing is at T+30 minutes; please verify each critical workflow before resuming normal operation.',
        frequency: 'T0 and every 30 minutes; immediate escalation for critical-service impact; separate confirmation after local restoration checks.',
        rationale: 'Lasswell: service owners need decisions and escalation criteria. Synchronous contact can resolve ambiguous dependencies, while a log preserves accountability. Do not privilege large commercial accounts over urgent safety needs or prescribe untested operational workarounds.',
      },
      {
        name: 'Optus network teams, stores and customer support staff', relationship: 'Direct responders with high operational influence and interest. Staff may also lose their normal work channels.', motivation: 'Coordinate recovery and give consistent answers despite incomplete information.',
        before: ['How do we contact the incident team?', 'Overloaded and exposed to customer anger.', 'Failed internal tools and conflicting scripts.', 'Which update can we safely display?', 'Unverified claims about cause or recovery.', 'Trying personal channels to coordinate.'],
        after: ['I know the verified fallback contact route.', 'Supported and able to flag uncertainty.', 'A current script and a separate safety status.', 'This is the latest verified checkpoint.', 'A clear shift handover with acknowledged ownership.', 'Updates notices and escalates unreachable groups.'],
        questions: 'Which internal channel works? Who approves safety statements? What if we cannot receive the new script? How do we report unsafe advice?',
        bridge: 'Test the internal fallback route; use timestamped facts and explicitly mark unverified safety and recovery claims.',
        validation: 'Operations lead checks that each region has acknowledged the latest script; an unacknowledged region triggers alternate contact. Safety misinformation goes immediately to the safety lead.',
        aim: 'Incident operations lead maintains reachable internal coordination and consistent public-facing information.',
        channel: 'Pre-verified independent incident bridge; timestamped scripts distributed through available routes and physical store notices; acknowledgement register and frontline question log.',
        message: 'Use only the timestamped approved incident facts. Keep ordinary service restoration and emergency-call verification separate. Confirm you can reach the independent incident bridge and acknowledge script updates. If your location cannot receive updates, escalate through the agreed alternate contact. Record customers’ access barriers without posting personal account details. Do not speculate about root cause or promise a restoration time.',
        frequency: 'T0; network coordination every 15 minutes, frontline scripts every 30 minutes and immediately after safety corrections or shift changes.',
        rationale: 'Shannon–Weaver applies internally as well as externally. Acknowledgement detects failed distribution. Psychological safety allows staff to challenge confident but unsupported claims; avoid unmanaged personal group chats containing customer data.',
      },
      {
        name: 'Network resellers and infrastructure partners', relationship: 'Direct wholesale/technical partners with high influence and interest; reseller customers may not realise they depend on Optus.', motivation: 'Explain service impact under their own brand and coordinate technically consistent restoration.',
        before: ['What may we tell our customers?', 'Worried about being left uninformed.', 'Their own service failures and limited upstream detail.', 'Are our services in scope?', 'Optus-facing updates that omit reseller audiences.', 'Issuing separate or delayed notices.'],
        after: ['We have a named upstream contact and verified scope.', 'Included in coordination.', 'A timestamped partner brief.', 'Our notice identifies known impact without speculation.', 'Prompt updates via an independent channel.', 'Acknowledges receipt and relays customer feedback.'],
        questions: 'Which services depend on the incident? How do we synchronise corrections? Who verifies technical restoration and public wording?',
        bridge: 'Give resellers the same verified factual core and an explicit place in the feedback cycle, while allowing brand-specific service information.',
        validation: 'Wholesale lead tracks acknowledgements from each nominated partner; absent acknowledgement triggers direct alternate contact. Recurring reseller customer questions update the common FAQ.',
        aim: 'Wholesale liaison coordinates accurate upstream-to-downstream communication.',
        channel: 'Independent partner bridge and verified written bulletin; acknowledgement and reseller issue register, with technical details restricted to relevant infrastructure owners.',
        message: 'Our network outage may affect services you supply through Optus. Please confirm your observed scope and nominate a contact reachable independently of the affected network. Relay the verified facts with your own support arrangements and the next checkpoint; do not infer universal restoration or emergency access. We will supply the next partner update at T+30 minutes and circulate corrections immediately.',
        frequency: 'Initial partner contact at T0, every 30 minutes and on each material change; obtain receipt confirmation after each safety correction.',
        rationale: 'Lasswell: the reseller is the trusted sender for its customer, so distribution must include it. Versioned bulletins reduce semantic drift. Share technical evidence only with appropriate parties and avoid blame before the cause is verified.',
      },
      {
        name: 'Emergency authorities, government/regulators and media', relationship: 'Safety coordination and public accountability audiences; high influence and interest. Authorities require secure operational evidence; broadcasters also reach disconnected users.', motivation: 'Assess safety risk and distribute verified public information quickly.',
        before: ['Can emergency calls be trusted?', 'Concerned about unknown public harm.', 'Partial reports and rapidly changing claims.', 'Which claims have actually been tested?', 'Conflicting assurance from different sources.', 'Seeking evidence and urgent public guidance.'],
        after: ['Confirmed performance and unknowns are separated.', 'Able to coordinate and scrutinise the response.', 'A named safety liaison and controlled public wording.', 'We can state the verified limits consistently.', 'Immediate correction of misleading advice.', 'Uses the verified coordination and evidence routes.'],
        questions: 'What evidence supports emergency-access statements? What public advice is safe? Who corrects a false assurance? Who coordinates follow-up?',
        bridge: 'A safety statement requires evidence and authority coordination; uncertainty is a reason to escalate, not to offer blanket reassurance.',
        validation: 'Safety liaison logs evidence requests and authority acknowledgements; communications lead verifies broadcasters received corrections. Record whether the corrected version reaches the original audiences.',
        aim: 'Safety liaison and public spokesperson coordinate accurate safety information and accountable oversight.',
        channel: 'Verified independent emergency coordination bridge, secure evidence exchange, and public broadcast briefing; separate authority request log and media questions register.',
        message: 'The outage is confirmed, but emergency-call reliability across affected services is not fully verified. We request immediate coordination of validated public safety guidance and reports of access failure. Our safety liaison will supply evidence through the agreed secure route; our spokesperson will distribute the approved public wording and correct inaccurate assurances promptly. The next safety checkpoint is T+15 minutes and public update T+30.',
        frequency: 'Immediate T0 coordination; safety checkpoint every 15 minutes, public briefing every 30 minutes and urgent corrections immediately. Compliance confirms applicable reporting duties separately.',
        rationale: 'A broadcast reaches some people that online channels cannot. Secure operational coordination and public explanation serve different purposes. Public safety takes precedence over reputational discomfort; do not expose caller identities or use unverified statistics to minimise harm.',
      },
    ],
    ethics: [
      ['Safety vs. reputational reassurance', 'State what is and is not verified about emergency access; coordinate advice rather than guessing.', 'Safety lead validates claims with appropriate authorities and maintains a correction log. Never ask members of the public to make test emergency calls.'],
      ['Reach vs. digital exclusion', 'Use independently reachable broadcast, partner and physical routes; explicitly identify people who lack alternatives.', 'Accessibility lead reviews reach gaps each cycle. Sent messages and website visits cannot substitute for evidence that disconnected groups received useful information.'],
      ['Follow-up vs. privacy', 'Coordinate necessary welfare-related follow-up through authorised services and protect identifying information.', 'Restrict caller/customer data by role and purpose; publish aggregate findings with definitions rather than identifiable cases or speculative counts.'],
    ],
    comments: 'Proposed approval: manager approves the independent-channel distribution plan and initial holding statement; safety liaison approves safety wording with the relevant authorities; operations verifies service status; communications records revisions. Exercise targets: all nominated region/reseller/safety contacts acknowledge the initial brief within 30 minutes; unacknowledged groups receive alternate-route follow-up. Review reachable-channel coverage and dangerous misunderstandings every 15 minutes. These are proposed checks, not evidence that Optus met them.',
    briefing: 'Manager, our normal channels are part of the failure. Approve independent distribution through broadcast, verified partners and physical service points, supported by an acknowledgement log. We will keep emergency-call verification separate from general network recovery and avoid unsupported assurance. At T+15 we will report safety uncertainties and unreachable groups; at T+30 we will publish a clear update even if there is no confirmed restoration time.',
    debrief: 'The 2024 review and ACMA findings show why emergency access, follow-up and communication quality deserve separate checks. Do not confuse people, call attempts and welfare checks, and do not conflate this 2023 event with the different September 2025 outage.',
  },
]

export const templateFields = ['Stakeholder', 'Description of communication and aims', 'Feedback/Channel (Media)', 'Key Message', 'Frequency', 'Rational for Channel, Message and Frequency and Ethical Considerations']
export const empathyDimensions = ['Thinking', 'Feeling', 'Seeing', 'Saying', 'Hearing', 'Doing']

export function scenarioMarkdown(scenario: IncidentCase) {
  const lines = [
    `# ${scenario.title}`, '',
    'Original teaching simulation based on a real event. Not the organisation’s historical plan, not an official assessment answer, and not a guaranteed grade. All roles, timings, targets, empathy states and proposed messages below are exercise designs.', '',
    '## Verified historical facts', ...scenario.facts.map(f => `- ${f.text} [Source](${scenario.sources[f.source].url})`), '',
    '## Exercise brief', scenario.snapshot, '', '### Unknowns', scenario.unknowns, '',
    '## Issue definition', scenario.issues, '', '## Interpretation', scenario.interpretation.en, '',
    '## Team number and roles', scenario.team, '',
    '## Empathy forecasts and completed communication template',
    'Before states are hypotheses to validate; After states are intended communication outcomes, not observed results. First-person phrases are constructed perspectives, not quotations.', '',
  ]
  for (const s of scenario.stakeholders) {
    lines.push(`### ${s.name}`, '', `Relationship, influence and interest: ${s.relationship}`, '', `Motivation: ${s.motivation}`, '', '| Dimension | Before (hypothesis) | After (intended) |', '| --- | --- | --- |')
    empathyDimensions.forEach((d, i) => lines.push(`| ${d} | ${s.before[i]} | ${s.after[i]} |`))
    lines.push('', `Questions: ${s.questions}`, '', `Bridge: ${s.bridge}`, '', `Validation: ${s.validation}`, '', '#### Communications Plan Template — completed', '')
    const values = [s.name, s.aim, s.channel, s.message, s.frequency, s.rationale]
    templateFields.forEach((f, i) => lines.push(`**${f}**`, '', values[i], ''))
  }
  lines.push('## Ethical trade-offs', '')
  scenario.ethics.forEach(([t, d, a]) => lines.push(`### ${t}`, '', d, '', a, ''))
  lines.push('## Comments / manager approval and evaluation', scenario.comments, '', '## Manager briefing', scenario.briefing, '', '## Retrospective debrief', scenario.debrief, '', '## Sources — checked 29 September 2026', '')
  scenario.sources.forEach(s => lines.push(`- [${s.title}](${s.url}) — ${s.use}`))
  return lines.join('\n')
}
