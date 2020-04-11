const wordsGreek = [
  "ΠΕΤΑΛΟΥΔΑ",
  "ΠΑΠΟΥΤΣΙ",
  "ΑΕΤΟΣ",
  "ΚΑΣΤΡΟ",
  "ΜΑΖΑ",
  "ΦΙΛΜ",
  "ΥΠΕΡΗΡΩΑΣ",
  "ΤΡΑΠΕΖΑ",
  "ΚΛΩΣΤΗ",
  "ΜΑΧΑΙΡΙ",
  "ΓΛΟΜΠΟΣ",
  "ΚΑΛΩΔΙΟ",
  "ΜΙΖΑ",
  "ΚΛΕΙΔΙ",
  "ΘΕΑΤΡΟ",
  "ΝΟΤΑ",
  "ΤΗΛΕΣΚΟΠΙΟ",
  "ΓΡΑΣΙΔΙ",
  "ΕΛΙΑ",
  "ΟΥΡΑΝΟΞΥΣΤΗΣ",
  "ΠΙΝΑΚΑΣ",
  "ΤΑΥΤΟΤΗΤΑ",
  "ΓΡΑΜΜΗ",
  "ΠΕΝΑ",
  "ΞΥΛΟ",
  "ΕΙΚΟΝΑ",
  "ΣΥΝΔΕΣΜΟΣ",
  "ΚΑΒΟΥΡΑΣ",
  "ΔΙΑΒΑΤΗΡΙΟ",
  "ΜΟΣΧΑ",
  "ΠΕΤΑΛΟ",
  "ΜΟΝΑΔΑ",
  "ΚΥΜΑ",
  "ΣΑΓΟΝΙ",
  "ΥΠΟΘΕΣΗ",
  "ΡΙΖΑ",
  "ΜΗΧΑΝΗ",
  "ΤΕΤΡΑΓΩΝΟ",
  "ΑΛΕΞΙΠΤΩΤΟ",
  "ΚΑΡΕΚΛΑ",
  "ΝΟΣΟΚΟΜΕΙΟ",
  "ΓΡΑΒΑΤΑ",
  "ΠΥΡΑΜΙΔΑ",
  "ΒΑΣΗ",
  "ΤΖΑΚΙ",
  "ΜΑΤΙ",
  "ΙΝΔΙΑ",
  "ΜΕΤΑΦΟΡΑ",
  "ΤΟΞΟ",
  "ΔΗΛΗΤΗΡΙΟ",
  "ΑΚΤΙΝΑ",
  "ΕΞΩΓΗΙΝΟΣ",
  "ΠΛΑΝΗ",
  "ΦΟΙΝΙΚΑΣ",
  "ΝΕΚΡΟΘΑΦΤΗΣ",
  "ΙΜΑΛΑΙΑ",
  "ΜΟΝΤΕΛΟ",
  "ΕΚΑΤΟΜΜΥΡΙΟΥΧΟΣ",
  "ΠΕΤΡΑ",
  "ΕΡΓΟ",
  "ΝΙΝΤΖΑ",
  "ΠΝΕΥΜΑ",
  "ΚΟΤΑ",
  "ΡΟΥΛΕΤΑ",
  "ΓΡΑΜΜΑ",
  "ΚΑΡΔΙΑ",
  "ΓΕΦΥΡΑ",
  "ΣΦΗΚΑ",
  "ΠΑΠΙΑ",
  "ΑΕΡΑΣ",
  "ΠΕΤΡΕΛΑΙΟ",
  "ΚΟΡΑΚΙ",
  "ΦΥΛΛΟ",
  "ΣΕΙΡΗΝΑ",
  "ΠΑΣΤΑ",
  "ΜΕΣΟΓΕΙΟΣ",
  "ΑΝΕΚΔΟΤΟ",
  "ΚΩΔΙΚΟΣ",
  "ΝΟΣΟΚΟΜΑ",
  "ΠΙΛΟΤΟΣ",
  "ΔΙΧΤΥ",
  "ΔΙΑΣΤΑΥΡΩΣΗ",
  "ΔΑΣΚΑΛΟΣ",
  "ΠΕΚΙΝΟ",
  "ΣΥΜΦΩΝΙΑ",
  "ΛΕΠΤΟ",
  "ΓΑΝΤΙ",
  "ΡΟΜΠΑ",
  "ΣΤΟΙΧΕΙΟ",
  "ΚΕΡΒΕΡΟΣ",
  "ΜΗΛΟ",
  "ΤΙΤΛΟΣ",
  "ΚΑΡΦΙΤΣΑ",
  "ΓΡΑΦΕΙΟ",
  "ΒΗΜΑ",
  "ΚΡΟΝΟΣ",
  "ΡΟΔΑ",
  "ΠΡΟΣΩΠΟ",
  "ΡΕΥΜΑ",
  "ΛΙΟΝΤΑΡΙ",
  "ΒΕΛΟΝΑ",
  "ΣΠΙΡΤΟ",
  "ΔΙΑΜΑΝΤΙ",
  "ΑΣΘΕΝΟΦΟΡΟ",
  "ΧΟΛΥΓΟΥΝΤ",
  "ΟΥΡΑ",
  "ΛΕΙΤΟΥΡΓΙΑ",
  "ΚΑΤΗΓΟΡΙΑ",
  "ΤΡΑΠΕΖΙΤΗΣ",
  "ΣΗΜΕΙΟ",
  "ΤΖΙΝ",
  "ΔΡΑΚΟΣ",
  "ΝΕΑ ΥΟΡΚΗ",
  "ΜΥΤΗ",
  "ΠΕΙΡΑΤΗΣ",
  "ΣΤΟΜΑ",
  "ΦΤΕΡΟ",
  "ΜΟΡΙΟ",
  "ΑΡΑΧΝΗ",
  "ΠΑΡΑΜΑΝΑ",
  "ΙΑΠΩΝΙΑ",
  "ΑΓΚΥΡΑ",
  "ΔΙΣΚΟΣ",
  "ΓΟΠΑ",
  "ΠΡΕΣΒΕΙΑ",
  "ΠΑΡΑΛΙΑ",
  "ΠΟΛΕΜΟΣ",
  "ΠΟΛΟΣ",
  "ΧΟΡΟΣ",
  "ΒΡΑΧΙΟΛΙ",
  "ΖΥΓΟΣ",
  "ΑΔΕΙΑ",
  "ΣΟΚΟΛΑΤΑ",
  "ΦΕΤΑ",
  "ΚΡΗΤΗ",
  "ΑΚΡΩΤΗΡΙΟ",
  "ΧΙΟΝΙ",
  "ΧΕΡΙ",
  "ΔΙΚΗΓΟΡΟΣ",
  "ΠΥΡΓΟΣ",
  "ΔΑΚΡΥ",
  "ΜΑΓΙΣΣΑ",
  "ΑΣΦΑΛΕΙΑ",
  "ΣΤΑΔΙΟ",
  "ΚΟΥΜΠΙ",
  "ΙΣΤΟΡΙΑ",
  "ΓΙΓΑΝΤΑΣ",
  "ΚΛΙΜΑ",
  "ΚΕΤΣΑΠ",
  "ΑΜΕΡΙΚΗ",
  "ΦΑΙΝΟΜΕΝΟ",
  "ΠΥΡΑΥΛΟΣ",
  "ΚΕΡΙ",
  "ΜΟΝΟΚΕΡΟΣ",
  "ΔΟΝΤΙ",
  "ΓΕΡΜΑΝΙΑ",
  "ΤΟΥΑΛΕΤΑ",
  "ΣΚΕΠΑΣΜΑ",
  "ΦΩΤΙΑ",
  "ΚΑΤΣΙΚΑ",
  "ΔΕΙΝΟΣΑΥΡΟΣ",
  "ΤΡΟΙΑ",
  "ΣΠΕΙΡΑ",
  "ΒΑΜΒΑΚΙ",
  "ΓΑΤΑ",
  "ΤΑΙΝΙΑ",
  "ΤΙΜΗ",
  "ΚΡΕΒΑΤΙ",
  "ΧΡΥΣΟ",
  "ΣΚΟΡΠΙΟΣ",
  "ΚΥΨΕΛΗ",
  "ΧΡΟΝΟΣ",
  "ΜΟΥΤΡΟ",
  "ΧΡΥΣΑΦΙ",
  "ΓΕΡΑΝΟΣ",
  "ΤΟΝΟΣ",
  "ΠΛΟΙΟ",
  "ΑΤΟΜΟ",
  "ΑΓΩΓΟΣ",
  "ΦΛΟΓΕΡΑ",
  "ΛΑΘΡΕΜΠΟΡΟΣ",
  "ΜΟΙΡΑ",
  "ΕΠΙΣΤΗΜΟΝΑΣ",
  "ΣΤΡΑΤΙΩΤΗΣ",
  "ΟΥΣΙΑ",
  "ΠΛΑΤΥΠΟΔΑΣ",
  "ΠΑΠΑΓΑΛΟΣ",
  "ΦΕΣΙ",
  "ΜΕΛΙ",
  "ΓΗΠΕΔΟ",
  "ΣΦΑΙΡΑ",
  "ΚΑΖΙΝΟ",
  "ΠΑΓΟΣ",
  "ΠΑΓΟΒΟΥΝΟ",
  "ΠΛΑΣΜΑ",
  "ΚΑΤΑΡΡΑΚΤΗΣ",
  "ΘΑΝΑΤΟΣ",
  "ΣΚΥΛΟΣ",
  "ΣΠΟΝΤΑ",
  "ΣΚΝΙΠΑ",
  "ΨΑΡΙ",
  "ΒΑΘΜΟΣ",
  "ΛΟΝΔΙΝΟ",
  "ΕΤΑΙΡΕΙΑ",
  "ΒΑΣΙΛΙΑΣ",
  "ΤΕΛΟΣ",
  "ΣΩΛΗΝΑΡΙΟ",
  "ΣΕΙΣΜΟΣ",
  "ΓΡΥΛΟΣ",
  "ΠΡΟΣΚΡΟΥΣΗ",
  "ΟΛΥΜΠΟΣ",
  "ΕΥΡΩΠΗ",
  "ΓΥΑΛΙ",
  "ΝΕΡΟ",
  "ΛΟΧΝΕΣ",
  "ΠΑΣΣΑΛΟΣ",
  "ΑΛΥΣΙΔΑ",
  "ΞΕΝΟΔΟΧΕΙΟ",
  "ΤΟΥΦΕΚΙ",
  "ΠΙΡΟΥΝΙ",
  "ΚΕΡΑΤΟ",
  "ΛΟΓΟΣ",
  "ΒΟΥΛΑ",
  "ΣΥΝΤΑΞΗ",
  "ΥΠΗΡΕΣΙΑ",
  "ΦΑΣΗ",
  "ΔΑΧΤΥΛΙΔΙ",
  "ΠΙΓΚΟΥΙΝΟΣ",
  "ΤΡΟΜΠΕΤΑ",
  "ΚΕΝΤΡΟ",
  "ΒΕΡΟΛΙΝΟ",
  "ΣΚΕΛΕΤΟΣ",
  "ΔΥΝΑΜΗ",
  "ΕΚΘΕΣΗ",
  "ΜΙΚΡΟΣΚΟΠΙΟ",
  "ΜΠΟΥΚΑΛΙ",
  "ΚΑΡΤΑ",
  "ΚΥΚΛΟΣ",
  "ΣΧΕΔΙΟ",
  "ΚΟΚΟΡΑΣ",
  "ΦΙΓΟΥΡΑ",
  "ΔΙΑΣΤΗΜΑ",
  "ΦΑΚΕΛΟΣ",
  "ΠΡΑΚΤΟΡΑΣ",
  "ΔΕΙΚΤΗΣ",
  "ΛΑΓΟΣ",
  "ΦΩΚΙΑ",
  "ΛΕΙΖΕΡ",
  "ΠΛΥΝΤΗΡΙΟ",
  "ΙΟΣ",
  "ΚΑΝΟΝΙ",
  "ΣΠΟΥΡΓΙΤΙ",
  "ΑΝΤΙΧΕΙΡΑΣ",
  "ΦΟΥΡΝΟΣ",
  "ΑΤΛΑΝΤΙΔΑ",
  "ΧΑΡΤΙ",
  "ΚΕΝΤΑΥΡΟΣ",
  "ΚΟΡΗ",
  "ΓΟΥΝΑ",
  "ΜΑΓΕΙΡΑΣ",
  "ΚΟΥΔΟΥΝΙ",
  "ΛΟΥΚΕΤΟ",
  "ΠΡΩΙΝΟ",
  "ΠΡΙΓΚΙΠΙΣΣΑ",
  "ΑΦΡΙΚΗ",
  "ΚΕΦΑΛΙ",
  "ΚΡΕΜΑ",
  "ΚΑΡΦΙ",
  "ΚΑΛΑΜΙ",
  "ΠΕΖΟΣ",
  "ΣΤΕΜΜΑ",
  "ΜΕΤΩΠΟ",
  "ΑΣΘΕΝΕΙΑ",
  "ΡΟΜΠΟΤ",
  "ΕΒΕΝΟΣ",
  "ΤΡΟΧΟΣ",
  "ΗΜΕΡΑ",
  "ΤΡΥΠΑ",
  "ΦΟΡΜΑ",
  "ΒΑΣΙΛΙΣΣΑ",
  "ΠΟΤΗΡΙ",
  "ΚΑΛΟΓΕΡΟΣ",
  "ΟΡΟΣ",
  "ΚΑΓΚΟΥΡΟ",
  "ΕΛΙΚΟΠΤΕΡΟ",
  "ΛΟΓΑΡΙΑΣΜΟΣ",
  "ΦΟΡΤΗΓΟ",
  "ΦΡΥΔΙ",
  "ΑΛΕΠΟΥ",
  "ΔΙΕΥΘΥΝΣΗ",
  "ΛΑΣΤΙΧΟ",
  "ΧΤΑΠΟΔΙ",
  "ΤΥΠΟΣ",
  "ΣΚΗΝΗ",
  "ΡΑΔΙΟ",
  "ΤΟΚΥΟ",
  "ΠΑΡΑΣΤΑΣΗ",
  "ΠΛΑΚΑ",
  "ΠΡΑΣΙΝΟ",
  "ΑΛΟΓΟ",
  "ΙΔΙΟΦΥΐΑ",
  "ΣΚΟΠΟΣ",
  "ΑΓΓΛΙΑ",
  "ΠΑΛΑΜΗ",
  "ΤΟΙΧΟΣ",
  "ΑΣΤΥΝΟΜΙΑ",
  "ΚΑΤΑΣΚΟΠΟΣ",
  "ΠΡΟΣΒΟΛΗ",
  "ΕΔΑΦΟΣ",
  "ΜΑΡΤΥΡΑΣ",
  "ΝΤΑΜΑ",
  "ΛΙΜΟΥΖΙΝΑ",
  "ΦΑΝΤΑΣΜΑ",
  "ΦΡΑΓΜΑ",
  "ΙΠΠΟΤΗΣ",
  "ΚΥΠΡΟΣ",
  "ΠΟΝΤΙΚΙ",
  "ΔΟΡΥΦΟΡΟΣ",
  "ΑΛΠΕΙΣ",
  "ΠΕΡΙΘΩΡΙΟ",
  "ΖΩΗ",
  "ΠΛΑΤΕΙΑ",
  "ΔΑΣΟΣ",
  "ΜΑΣΤΙΓΙΟ",
  "ΟΘΟΝΗ",
  "ΚΟΥΚΛΑ",
  "ΠΟΔΙ",
  "ΔΙΑΚΟΠΤΗΣ",
  "ΑΓΓΕΛΟΣ",
  "ΞΩΤΙΚΟ",
  "ΚΟΜΜΑ",
  "ΟΥΡΑΝΟΣ",
  "ΧΙΟΝΑΝΘΡΩΠΟΣ",
  "ΠΑΛΙΡΡΟΙΑ",
  "ΓΑΛΛΙΑ",
  "ΧΑΡΗ",
  "ΚΑΠΕΛΟ",
  "ΣΥΝΤΑΓΜΑ",
  "ΠΑΞΙΜΑΔΙ",
  "ΚΥΒΟΣ",
  "ΚΕΦΑΛΑΙΟ",
  "ΟΡΓΑΝΟ",
  "ΕΥΘΕΙΑ",
  "ΠΑΡΙΣΙ",
  "ΤΡΑΠΕΖΙ",
  "ΦΕΓΓΑΡΙ",
  "ΖΩΝΗ",
  "ΠΙΤΑ",
  "ΤΑΠΑ",
  "ΠΥΡΣΟΣ",
  "ΚΑΛΑΘΙ",
  "ΣΥΝΑΥΛΙΑ",
  "ΚΑΡΟΤΟ",
  "ΓΙΑΤΡΟΣ",
  "ΒΟΜΒΑ",
  "ΚΟΥΖΙΝΑ",
  "ΚΑΡΧΑΡΙΑΣ",
  "ΤΑΞΗ",
  "ΠΡΟΛΗΨΗ",
  "ΠΙΑΤΟ",
  "ΧΕΙΛΟΣ",
  "ΑΝΤΙΣΤΑΣΗ",
  "ΑΣΤΕΡΙ",
  "ΤΑΜΠΕΛΑ",
  "ΚΛΕΦΤΗΣ",
  "ΑΥΤΟΚΙΝΗΤΟ",
  "ΣΑΙΞΠΗΡ",
  "ΣΤΕΚΑ",
  "ΑΝΤΑΡΚΤΙΚΗ",
  "ΡΩΜΗ",
  "ΚΟΛΛΑ",
  "ΦΟΡΕΜΑ",
  "ΤΑΜΠΛΟ",
  "ΓΥΡΟΣ",
  "ΝΑΝΟΣ",
  "ΜΠΑΝΙΟ",
  "ΜΟΛΥΒΙ",
  "ΠΑΓΩΤΟ",
  "ΣΗΜΑΔΙ",
  "ΑΙΓΥΠΤΟΣ",
  "ΠΕΡΙΒΑΛΛΟΝ",
  "ΚΑΜΠΑΝΑ",
  "ΔΥΤΗΣ",
  "ΑΝΕΜΟΣ",
  "ΒΡΑΖΙΛΙΑ",
  "ΒΟΔΙ",
  "ΚΑΡΠΟΣ",
  "ΟΠΕΡΑ",
  "ΠΑΤΟΥΣΑ",
  "ΝΥΧΤΑ",
  "ΤΥΧΗ",
  "ΣΥΛΛΗΨΗ",
  "ΤΣΙΧΛΑ",
  "ΕΚΚΛΗΣΙΑ",
  "ΣΚΟΥΛΗΚΙ",
  "ΔΙΑΒΗΤΗΣ",
  "ΦΑΛΑΙΝΑ",
  "ΑΡΧΗ",
  "ΑΥΣΤΡΑΛΙΑ",
  "ΓΛΩΣΣΑ"  
]
  
module.exports = wordsGreek