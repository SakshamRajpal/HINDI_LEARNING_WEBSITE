import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AlphabetCard from "@/components/AlphabetCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const vowels = [
  {
    hindi: "अ", transliteration: "a", examples: [
      { hindi: "अनार", meaning: "Pomegranate" },
      { hindi: "अच्छा", meaning: "Good" }
    ]
  },
  {
    hindi: "आ", transliteration: "aa", examples: [
      { hindi: "आम", meaning: "Mango" },
      { hindi: "आदमी", meaning: "Man" }
    ]
  },
  {
    hindi: "इ", transliteration: "i", examples: [
      { hindi: "इमली", meaning: "Tamarind" },
      { hindi: "इच्छा", meaning: "Desire" }
    ]
  },
  {
    hindi: "ई", transliteration: "ee", examples: [
      { hindi: "ईख", meaning: "Sugarcane" },
      { hindi: "ईमान", meaning: "Honesty" }
    ]
  },
  {
    hindi: "उ", transliteration: "u", examples: [
      { hindi: "उल्लू", meaning: "Owl" },
      { hindi: "उड़ान", meaning: "Flight" }
    ]
  },
  {
    hindi: "ऊ", transliteration: "oo", examples: [
      { hindi: "ऊन", meaning: "Wool" },
      { hindi: "ऊँचाई", meaning: "Height" }
    ]
  },
  {
    hindi: "ए", transliteration: "e", examples: [
      { hindi: "एक", meaning: "One" },
      { hindi: "एड़ी", meaning: "Heel" }
    ]
  },
  {
    hindi: "ऐ", transliteration: "ai", examples: [
      { hindi: "ऐनक", meaning: "Glasses" },
      { hindi: "ऐसा", meaning: "Like this" }
    ]
  },
  {
    hindi: "ओ", transliteration: "o", examples: [
      { hindi: "ओखली", meaning: "Mortar" },
      { hindi: "ओस", meaning: "Dew" }
    ]
  },
  {
    hindi: "औ", transliteration: "au", examples: [
      { hindi: "औरत", meaning: "Woman" },
      { hindi: "और", meaning: "And" }
    ]
  },
  {
    hindi: "अं", transliteration: "an", examples: [
      { hindi: "अंगूर", meaning: "Grapes" },
      { hindi: "अंग", meaning: "Limb" }
    ]
  },
  {
    hindi: "अः", transliteration: "ah", examples: [
      { hindi: "दुःख", meaning: "Sorrow" },
      { hindi: "शः", meaning: "Used in mantras" }
    ]
  }
];


const consonants = [
  { hindi: "क", transliteration: "ka", examples: [
      { hindi: "कमल", meaning: "Lotus" },
      { hindi: "कलम", meaning: "Pen" }
    ]
  },
  { hindi: "ख", transliteration: "kha", examples: [
      { hindi: "खरगोश", meaning: "Rabbit" },
      { hindi: "खाना", meaning: "Food" }
    ]
  },
  { hindi: "ग", transliteration: "ga", examples: [
      { hindi: "गमला", meaning: "Flowerpot" },
      { hindi: "गाड़ी", meaning: "Car" }
    ]
  },
  { hindi: "घ", transliteration: "gha", examples: [
      { hindi: "घर", meaning: "Home" },
      { hindi: "घड़ी", meaning: "Watch" }
    ]
  },
  { hindi: "ङ", transliteration: "nga", examples: [
      { hindi: "अंग", meaning: "Limb" },
      { hindi: "संग", meaning: "Together" }
    ]
  },
  { hindi: "च", transliteration: "cha", examples: [
      { hindi: "चमच", meaning: "Spoon" },
      { hindi: "चिड़िया", meaning: "Bird" }
    ]
  },
  { hindi: "छ", transliteration: "chha", examples: [
      { hindi: "छाता", meaning: "Umbrella" },
      { hindi: "छात्र", meaning: "Student" }
    ]
  },
  { hindi: "ज", transliteration: "ja", examples: [
      { hindi: "जहाज", meaning: "Ship" },
      { hindi: "जंगल", meaning: "Forest" }
    ]
  },
  { hindi: "झ", transliteration: "jha", examples: [
      { hindi: "झूला", meaning: "Swing" },
      { hindi: "झंडा", meaning: "Flag" }
    ]
  },
  { hindi: "ञ", transliteration: "nya", examples: [
      { hindi: "ज्ञानी", meaning: "Wise" },
      { hindi: "ज्ञान", meaning: "Knowledge" }
    ]
  },
  { hindi: "ट", transliteration: "ṭa", examples: [
      { hindi: "टमाटर", meaning: "Tomato" },
      { hindi: "टोकरी", meaning: "Basket" }
    ]
  },
  { hindi: "ठ", transliteration: "ṭha", examples: [
      { hindi: "ठंडा", meaning: "Cold" },
      { hindi: "ठेला", meaning: "Cart" }
    ]
  },
  { hindi: "ड", transliteration: "ḍa", examples: [
      { hindi: "डमरू", meaning: "Drum" },
      { hindi: "डिब्बा", meaning: "Box" }
    ]
  },
  { hindi: "ढ", transliteration: "ḍha", examples: [
      { hindi: "ढोल", meaning: "Drum" },
      { hindi: "ढक्कन", meaning: "Lid" }
    ]
  },
  { hindi: "ण", transliteration: "ṇa", examples: [
      { hindi: "कण", meaning: "Particle" },
      { hindi: "विष्णु", meaning: "Lord Vishnu" }
    ]
  },
  { hindi: "त", transliteration: "ta", examples: [
      { hindi: "तरबूज", meaning: "Watermelon" },
      { hindi: "तलवार", meaning: "Sword" }
    ]
  },
  { hindi: "थ", transliteration: "tha", examples: [
      { hindi: "थाली", meaning: "Plate" },
      { hindi: "थकान", meaning: "Fatigue" }
    ]
  },
  { hindi: "द", transliteration: "da", examples: [
      { hindi: "दरवाज़ा", meaning: "Door" },
      { hindi: "दूध", meaning: "Milk" }
    ]
  },
  { hindi: "ध", transliteration: "dha", examples: [
      { hindi: "धागा", meaning: "Thread" },
      { hindi: "धरती", meaning: "Earth" }
    ]
  },
  { hindi: "न", transliteration: "na", examples: [
      { hindi: "नदी", meaning: "River" },
      { hindi: "नक्शा", meaning: "Map" }
    ]
  },
  { hindi: "प", transliteration: "pa", examples: [
      { hindi: "पतंग", meaning: "Kite" },
      { hindi: "पंखा", meaning: "Fan" }
    ]
  },
  { hindi: "फ", transliteration: "pha", examples: [
      { hindi: "फल", meaning: "Fruit" },
      { hindi: "फूल", meaning: "Flower" }
    ]
  },
  { hindi: "ब", transliteration: "ba", examples: [
      { hindi: "बच्चा", meaning: "Child" },
      { hindi: "बिल्ली", meaning: "Cat" }
    ]
  },
  { hindi: "भ", transliteration: "bha", examples: [
      { hindi: "भालू", meaning: "Bear" },
      { hindi: "भोजन", meaning: "Meal" }
    ]
  },
  { hindi: "म", transliteration: "ma", examples: [
      { hindi: "मछली", meaning: "Fish" },
      { hindi: "मकान", meaning: "House" }
    ]
  },
  { hindi: "य", transliteration: "ya", examples: [
      { hindi: "यात्रा", meaning: "Journey" },
      { hindi: "योग", meaning: "Yoga" }
    ]
  },
  { hindi: "र", transliteration: "ra", examples: [
      { hindi: "राजा", meaning: "King" },
      { hindi: "रसगुल्ला", meaning: "Sweet" }
    ]
  },
  { hindi: "ल", transliteration: "la", examples: [
      { hindi: "लड़का", meaning: "Boy" },
      { hindi: "लड्डू", meaning: "Sweet" }
    ]
  },
  { hindi: "व", transliteration: "va", examples: [
      { hindi: "वृक्ष", meaning: "Tree" },
      { hindi: "विमान", meaning: "Airplane" }
    ]
  },
  { hindi: "श", transliteration: "sha", examples: [
      { hindi: "शेर", meaning: "Lion" },
      { hindi: "शब्द", meaning: "Word" }
    ]
  },
  { hindi: "ष", transliteration: "ṣa", examples: [
      { hindi: "षट्कोण", meaning: "Hexagon" },
      { hindi: "षष्ठी", meaning: "Sixth" }
    ]
  },
  { hindi: "स", transliteration: "sa", examples: [
      { hindi: "सूरज", meaning: "Sun" },
      { hindi: "सड़क", meaning: "Road" }
    ]
  },
  { hindi: "ह", transliteration: "ha", examples: [
      { hindi: "हाथी", meaning: "Elephant" },
      { hindi: "हवा", meaning: "Air" }
    ]
  },
  { hindi: "क्ष", transliteration: "ksha", examples: [
      { hindi: "क्षत्रिय", meaning: "Warrior" },
      { hindi: "क्षमा", meaning: "Forgiveness" }
    ]
  },
  { hindi: "त्र", transliteration: "tra", examples: [
      { hindi: "त्रिशूल", meaning: "Trident" },
      { hindi: "त्रिकोण", meaning: "Triangle" }
    ]
  },
  { hindi: "ज्ञ", transliteration: "gya", examples: [
      { hindi: "ज्ञान", meaning: "Knowledge" },
      { hindi: "ज्ञानी", meaning: "Wise person" }
    ]
  }
];


const AlphabetPage = () => {
  const [activeTab, setActiveTab] = useState("vowels");
  const [searchQuery, setSearchQuery] = useState("");

  const getFilteredLetters = () => {
    const letters = activeTab === "vowels" ? vowels : consonants;
    if (!searchQuery) return letters;
    return letters.filter(letter =>
      letter.hindi.includes(searchQuery) ||
      letter.transliteration.toLowerCase().includes(searchQuery.toLowerCase()) ||
      letter.examples?.some(ex =>
        ex.hindi.includes(searchQuery) ||
        ex.meaning.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  };

  const filteredLetters = getFilteredLetters();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 py-8 bg-gray-50">
        <div className="container mx-auto px-6 md:px-10">
          <h1 className="text-3xl font-bold text-hindi-blue mb-4">Hindi Alphabet</h1>
          <p className="text-gray-600 mb-8">
            Learn the Hindi alphabet with interactive cards. Click on a card to see examples.
          </p>

          <div className="mb-8">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <div className="flex justify-between items-center">
                <TabsList>
                  <TabsTrigger value="vowels" className="text-base px-6">Vowels (स्वर)</TabsTrigger>
                  <TabsTrigger value="consonants" className="text-base px-6">Consonants (व्यंजन)</TabsTrigger>
                </TabsList>

                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="Search letters or words..."
                    className="pl-10 w-64"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
            </Tabs>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {filteredLetters.map((letter, index) => (
              <AlphabetCard
                key={index}
                hindi={letter.hindi}
                transliteration={letter.transliteration}
                examples={letter.examples}
              />
            ))}
          </div>

          {filteredLetters.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No letters found matching "{searchQuery}"</p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AlphabetPage;