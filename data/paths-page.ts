import { AcademicPaths } from "./../interfaces/major";

export const paths: AcademicPaths[] = [
  {
    name: "المسار الصحي",
    emoji: "💉",
    description: "لا تضع سقفًا لطموحاتك، انضم إلى عالم الطب معنا!",
    button: "اكتشف",
    route: "/academic-majors/healthy_path",
  },
  {
    name: "المسار الهندسي",
    emoji: "📐",
    description: "اكتشف شغفك في مجال الهندسة من خلال تخصصاتنا المتنوعة!",
    button: "اطّلع",
    route: "/academic-majors/engineering_path",
  },
  {
    name: "مسار علوم الحاسب",
    emoji: "💻",
    description: "غيّر العالم من خلال مهنة تقنية مُجزية في علوم الحاسب!",
    button: "برمج",
    route: "/academic-majors/cs_path",
  },
  {
    name: "مسار إدارة الأعمال",
    emoji: "💰",
    description:
      "ابحث عن تخصصك المثالي في إدارة الأعمال معنا وافتح آفاقًا جديدة!",
    button: "أدِر",
    route: "/academic-majors/kbs_path",
  },
  {
    name: "مسار العلوم العامة",
    emoji: "🔬",
    description:
      "تعرف على تخصصاتنا المُتخصصة في علم الكيمياء والجيولوجيا والجيوفيزياء!",
    button: "اكتشف",
    route: "/academic-majors/science_path",
  },
  {
    name: "مسار التخصصات والفنون الأخرى",
    emoji: "🔎",
    description:
      "تعرف على التخصصات المُتخصصة في التصميم والإعلام والقانون وحدد مسارك الأكاديمي!",
    button: "اطّلع",
    route: "/academic-majors/others_path",
  },
];
