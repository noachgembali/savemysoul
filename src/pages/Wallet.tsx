
import React from "react";
import { useNavigate } from "react-router-dom";
import { GradientBackground } from "@/components/ui/gradient-background";
import { AnimatedButton } from "@/components/ui/animated-button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Wallet, Plus, ArrowDownRight, ArrowUpRight, History } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ThemeToggle } from "@/components/theme-toggle";

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
      <ThemeToggle />
      <div className="h-16 flex items-center">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => navigate("/")}
        >
          <ArrowLeft className="h-6 w-6" />
        </Button>
        <h1 className="text-xl font-bold text-foreground ml-2">Wallet</h1>
      </div>

      <div className="max-w-md mx-auto pb-20">
        <Card className="mb-6 bg-primary text-primary-foreground">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Wallet className="h-5 w-5" />
                <span className="font-medium">Available Balance</span>
              </div>
              <Plus className="h-5 w-5 bg-accent/20 rounded-full p-1" />
            </div>
            <h2 className="text-4xl font-bold mb-6">₹680</h2>
            <div className="grid grid-cols-2 gap-4">
              <AnimatedButton
                variant="yellow"
                className="font-medium"
              >
                Add Money
              </AnimatedButton>
              <AnimatedButton
                variant="outline"
                className="border-accent/30 hover:bg-accent/10 font-medium"
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
                          ? "bg-destructive/10" 
                          : transaction.type === "return" 
                          ? "bg-green-100 dark:bg-green-900/30" 
                          : "bg-blue-100 dark:bg-blue-900/30"
                      }`}>
                        {transaction.type === "lost" ? (
                          <ArrowUpRight className="h-4 w-4 text-destructive" />
                        ) : transaction.type === "return" ? (
                          <ArrowDownRight className="h-4 w-4 text-green-600 dark:text-green-400" />
                        ) : (
                          <Wallet className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                        )}
                      </div>
                      <div>
                        <p className="font-medium text-sm">{transaction.description}</p>
                        <p className="text-xs text-muted-foreground">{transaction.date}</p>
                      </div>
                    </div>
                    <div className={`font-semibold ${
                      transaction.type === "lost" 
                        ? "text-destructive" 
                        : transaction.type === "return" 
                        ? "text-green-600 dark:text-green-400" 
                        : "text-blue-600 dark:text-blue-400"
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
