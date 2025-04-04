import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AlphabetCard from "@/components/AlphabetCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const vowels = [
  { hindi: "अ", transliteration: "a", examples: [
      { hindi: "अनार", meaning: "Pomegranate" },
      { hindi: "अच्छा", meaning: "Good" }
    ]
  },
  { hindi: "आ", transliteration: "aa", examples: [
      { hindi: "आम", meaning: "Mango" },
      { hindi: "आदमी", meaning: "Man" }
    ]
  }
  // Add the rest of the vowels...
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
  }
  // Add the rest of the consonants...
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