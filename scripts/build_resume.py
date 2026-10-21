"""ATS-friendly one-page resume for K S Meghana.

Single column, standard section headings, real selectable text (embedded
Calibri with a ToUnicode map), full-text URLs, no tables/images/columns, so
ATS parsers read it top-to-bottom exactly as a recruiter does.
"""
import sys
from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm
from reportlab.lib.colors import HexColor
from reportlab.lib.enums import TA_CENTER
from reportlab.lib.styles import ParagraphStyle
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, HRFlowable, KeepTogether
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.lib.fonts import addMapping

OUT = sys.argv[1]
FONTS = "C:/Windows/Fonts/"
pdfmetrics.registerFont(TTFont("Calibri", FONTS + "calibri.ttf"))
pdfmetrics.registerFont(TTFont("Calibri-Bold", FONTS + "calibrib.ttf"))
pdfmetrics.registerFont(TTFont("Calibri-Italic", FONTS + "calibrii.ttf"))
pdfmetrics.registerFont(TTFont("Calibri-BoldItalic", FONTS + "calibriz.ttf"))
addMapping("Calibri", 0, 0, "Calibri")
addMapping("Calibri", 1, 0, "Calibri-Bold")
addMapping("Calibri", 0, 1, "Calibri-Italic")
addMapping("Calibri", 1, 1, "Calibri-BoldItalic")

INK = HexColor("#1F2A37")      # body text (dark slate, prints crisp)
SUB = HexColor("#4B5563")      # secondary text
TEAL = HexColor("#0F766E")     # headings / name
LINK = HexColor("#0F766E")

name = ParagraphStyle("name", fontName="Calibri-Bold", fontSize=21, leading=24, textColor=TEAL, alignment=TA_CENTER)
title = ParagraphStyle("title", fontName="Calibri-Bold", fontSize=11.5, leading=14, textColor=INK, alignment=TA_CENTER, spaceBefore=1)
contact = ParagraphStyle("contact", fontName="Calibri", fontSize=9.8, leading=12.6, textColor=SUB, alignment=TA_CENTER)
h = ParagraphStyle("h", fontName="Calibri-Bold", fontSize=11.5, leading=13.5, textColor=TEAL, spaceBefore=5.4, spaceAfter=1)
body = ParagraphStyle("body", fontName="Calibri", fontSize=10, leading=12.5, textColor=INK)
row = ParagraphStyle("row", parent=body, spaceBefore=1.6)
item = ParagraphStyle("item", parent=body, fontName="Calibri-Bold", spaceBefore=3)
meta = ParagraphStyle("meta", parent=body, textColor=SUB)
bullet = ParagraphStyle("bullet", parent=body, leftIndent=11, bulletIndent=2, spaceBefore=0.8)

LI = "https://www.linkedin.com/in/meghana-k-s-a1a4b42aa"
GH = "https://github.com/KSMeghana-hub"
PF = "https://ksmeghana-hub.github.io/myportfolio/"
EMAIL = "ksmegha2005@gmail.com"


def a(url, text):
    return f'<a href="{url}" color="#0F766E">{text}</a>'


def section(label):
    return [
        Paragraph(label, h),
        HRFlowable(width="100%", thickness=0.8, color=TEAL, spaceBefore=0, spaceAfter=2),
    ]


def bullets(lines):
    return [Paragraph(t, bullet, bulletText="\u2022") for t in lines]


story = [
    Paragraph("K S MEGHANA", name),
    Paragraph("Aspiring Software Tester / QA Professional  |  B.Tech CSE Student (2024 - 2028)", title),
    Spacer(1, 2),
    Paragraph(
        "Hindupur, Andhra Pradesh, India  |  +91 96632 62127  |  " + a("mailto:" + EMAIL, EMAIL), contact),
    Paragraph(
        "LinkedIn: " + a(LI, "linkedin.com/in/meghana-k-s-a1a4b42aa") +
        "  |  GitHub: " + a(GH, "github.com/KSMeghana-hub"), contact),
    Paragraph("Portfolio: " + a(PF, "ksmeghana-hub.github.io/myportfolio"), contact),
]

story += section("CAREER OBJECTIVE")
story += [Paragraph(
    "Third-year B.Tech Computer Science and Engineering student seeking Software Testing and Quality Assurance (QA) "
    "internship and entry-level opportunities. Building hands-on skills in Manual Testing, the Software Testing Life "
    "Cycle (STLC), test case preparation, test execution and defect reporting using Jira, supported by SQL, MySQL and "
    "Java fundamentals. Detail-oriented and committed to continuous learning to help improve software quality.", body)]

story += section("TECHNICAL SKILLS")
skills = [
    ("Software Testing", "Manual Testing, Software Testing Life Cycle (STLC), Test Scenarios, Test Cases, Test Case Preparation, "
                         "Test Execution, Bug Reporting, Defect Reporting, Smoke Testing, Sanity Testing, Regression Testing, Retesting"),
    ("Programming Languages", "Java (Core Java, OOP Concepts), C, Python (Basics)"),
    ("Database", "SQL, MySQL, Basic SQL Queries, CRUD Operations"),
    ("Web Technologies", "HTML (Basics), CSS (Basics), JavaScript (Basics)"),
    ("Tools", "Jira (Defect Tracking), MS Excel (Test Documentation), Eclipse IDE, Visual Studio Code (VS Code), Command Line (Basics)"),
    ("Strengths", "Logical Thinking, Problem-Solving, Attention to Detail, Continuous Learning"),
]
story += [Paragraph(f"<b>{k}:</b> {v}", row) for k, v in skills]

story += section("PROJECTS")
projects = [
    ("E-Commerce Application Testing (Manual Testing)", "Jira, MS Excel", [
        "Prepared test scenarios and test cases for login and authentication, product search, wishlist, cart, checkout "
        "and payment-related modules of an e-commerce application.",
        "Documented test cases in MS Excel and reported and tracked defects using Jira.",
    ]),
    ("AI Resume Builder", "Lovable", [
        "Created an AI-powered resume builder using Lovable that helps users create and organize professional resumes "
        "through a simple web interface.",
        "Generated structured resumes from user input, with a focus on clear formatting and content clarity.",
    ]),
    ("Java Practice Programs", "Java", [
        "Wrote practice programs covering variables, operators, conditional statements, loops, methods, classes and objects.",
        "Applied Object-Oriented Programming (OOP) concepts to strengthen Core Java fundamentals.",
    ]),
    ("Eco-Friendly Plant Disease Management", "Community Service Project", [
        "Carried out field work and research to identify plant diseases and explore eco-friendly approaches to plant "
        "disease management.",
    ]),
]
for pname, tech, pts in projects:
    story.append(KeepTogether([Paragraph(f"{pname}  <font name='Calibri' color='#4B5563'>|  {tech}</font>", item)] + bullets(pts)))

story += section("EDUCATION")
edu = [
    ("Bachelor of Technology (B.Tech), Computer Science and Engineering", "2024 - 2028 (Expected)",
     "Sanskrithi School of Engineering (Autonomous), Puttaparthi  |  Affiliated to JNTUA  |  R23 Regulation  |  Currently in Third Year"),
    ("Intermediate (MPC)", "2024", "L.R.G. Naidu Junior College  |  Score: 941/1000"),
    ("Secondary School Certificate (SSC)", "2022", "L.R.G. Vidyalayam, Tirikera, Hindupur"),
]
for deg, yrs, where in edu:
    story.append(KeepTogether([
        Paragraph(f"{deg}  <font name='Calibri' color='#4B5563'>|  {yrs}</font>", item),
        Paragraph(where, meta),
    ]))

story += section("CERTIFICATIONS")
certs = [
    ("RISE Institute of Higher Technology, Module 2 (2026)", "RISE, Austria  |  Mar 2026  |  Verification: xiyrKVteyL",
     "Problem-Solving and Self-Learning, Programming Fundamentals in Java and using the Command Line"),
    ("RISE Institute of Higher Technology, Module 1 (2024-2025)", "RISE, Austria  |  May 2025  |  Verification: NhgKdDMVCP",
     "Programming concepts using Scratch, self-learning using online resources, open-source and open-participation"),
]
for cname, issuer, topics in certs:
    story.append(KeepTogether([
        Paragraph(f"{cname}  <font name='Calibri' color='#4B5563'>|  {issuer}</font>", item),
        Paragraph(topics, meta),
    ]))

story += section("ACHIEVEMENTS AND ACTIVITIES")
story += bullets([
    "Participated in Gamified Learning on Object-Oriented Programming (OOP) at Sanskrithi School of Engineering.",
    "Participated in technical events on Artificial Intelligence (AI), Machine Learning (ML) and Large Language Models (LLMs).",
])

story += section("ADDITIONAL INFORMATION")
story += [
    Paragraph("<b>Languages:</b> English, Telugu, Kannada, Hindi (Basic)  |  <b>Interests:</b> Listening to Music, "
              "Football, Cooking, Karate", row),
]

doc = SimpleDocTemplate(
    OUT, pagesize=A4,
    leftMargin=14 * mm, rightMargin=14 * mm, topMargin=10 * mm, bottomMargin=8 * mm,
    title="K S Meghana - Resume - Software Tester / QA", author="K S Meghana",
    subject="Resume - Aspiring Software Tester / QA Professional - B.Tech CSE",
    keywords="Software Testing, Manual Testing, QA, Quality Assurance, STLC, Test Cases, Test Scenarios, Bug Reporting, "
             "Defect Reporting, Smoke Testing, Sanity Testing, Regression Testing, Retesting, Jira, SQL, MySQL, Java, C, Python",
    creator="K S Meghana",
)
doc.build(story)
print("pages:", doc.page)

# Preview image for the site's "View Resume" viewer (phones can't show PDFs inline),
# written next to the PDF so the two never drift apart. Needs PyMuPDF + Pillow.
try:
    import io
    import pymupdf
    from PIL import Image
except ImportError:
    print("preview skipped: pip install pymupdf pillow")
else:
    page = pymupdf.open(OUT)[0]
    png = page.get_pixmap(dpi=200).tobytes("png")
    preview = OUT.rsplit(".", 1)[0] + ".webp"
    # lossless: crisper text and ~half the size of lossy for a mostly-white page
    Image.open(io.BytesIO(png)).convert("RGB").save(preview, "WEBP", lossless=True, method=6)
    print("preview:", preview)
