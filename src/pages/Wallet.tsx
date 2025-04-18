
import React from "react";
import { useNavigate } from "react-router-dom";
import { GradientBackground } from "@/components/ui/gradient-background";
import { AnimatedButton } from "@/components/ui/animated-button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Wallet, Plus, ArrowDownRight, ArrowUpRight, History } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function WalletScreen() {
  const navigate = useNavigate();

  const transactions = [
    { id: 1, type: "return", amount: 200, date: "Today", description: "Adult Content Challenge" },
    { id: 2, type: "pledge", amount: 200, date: "3 days ago", description: "Adult Content Challenge" },
    { id: 3, type: "return", amount: 500, date: "Last week", description: "Gaming Challenge" },
    { id: 4, type: "lost", amount: 300, date: "2 weeks ago", description: "Social Media Challenge" }
  ];

  return (
    <GradientBackground className="p-4">
      <div className="h-16 flex items-center">
        <Button
          variant="ghost"
          size="icon"
          className="text-white"
          onClick={() => navigate("/")}
        >
          <ArrowLeft className="h-6 w-6" />
        </Button>
        <h1 className="text-xl font-bold text-white ml-2">Wallet</h1>
      </div>

      <div className="max-w-md mx-auto pb-20">
        <Card className="mb-6 bg-savemysoul-blue text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Wallet className="h-5 w-5" />
                <span className="font-medium">Available Balance</span>
              </div>
              <Plus className="h-5 w-5 bg-white/20 rounded-full p-1" />
            </div>
            <h2 className="text-4xl font-bold mb-6">₹680</h2>
            <div className="grid grid-cols-2 gap-4">
              <AnimatedButton
                variant="yellow"
                className="text-savemysoul-blue font-medium"
              >
                Add Money
              </AnimatedButton>
              <AnimatedButton
                variant="outline"
                className="text-white border-white/80 hover:bg-white/10 font-medium"
              >
                Redeem ₹100
              </AnimatedButton>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2">
              <History className="h-5 w-5" />
              Transaction History
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-1">
              {transactions.map((transaction) => (
                <React.Fragment key={transaction.id}>
                  <div className="flex items-center justify-between py-3">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        transaction.type === "lost" 
                          ? "bg-red-100" 
                          : transaction.type === "return" 
                          ? "bg-green-100" 
                          : "bg-blue-100"
                      }`}>
                        {transaction.type === "lost" ? (
                          <ArrowUpRight className="h-4 w-4 text-red-600" />
                        ) : transaction.type === "return" ? (
                          <ArrowDownRight className="h-4 w-4 text-green-600" />
                        ) : (
                          <Wallet className="h-4 w-4 text-blue-600" />
                        )}
                      </div>
                      <div>
                        <p className="font-medium text-sm">{transaction.description}</p>
                        <p className="text-xs text-gray-500">{transaction.date}</p>
                      </div>
                    </div>
                    <div className={`font-semibold ${
                      transaction.type === "lost" 
                        ? "text-red-600" 
                        : transaction.type === "return" 
                        ? "text-green-600" 
                        : "text-blue-600"
                    }`}>
                      {transaction.type === "lost" ? "-" : transaction.type === "return" ? "+" : ""}
                      ₹{transaction.amount}
                    </div>
                  </div>
                  <Separator />
                </React.Fragment>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </GradientBackground>
  );
}
