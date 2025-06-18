@echo off
color a
taskkill /f /im "explorer.exe"
:1
echo set speech = Wscript.CreateObject("SAPI.spVoice") >> "speech.Vbs"
set "text=Hello your device is infected with Wanna Try, hit any key to proceed"
echo speech.speak "%text%" >> "speech.vbs"
start speech.vbs
:2
echo Hello your device is infected with wannaTry
echo Blud thought this was fake
echo Hit any key to proceed
pause
:3
del speech.Vbs
echo set speech = Wscript.CreateObject("SAPI.spVoice") >> "speech.Vbs"
set "text=Lol just kidding it was a prank"
echo speech.speak "%text%" >> "speech.vbs"
start speech.vbs
:4
echo lol just kidding it was a prank
start explorer.exe
pause
// download load this script then run the .bat file

DO
msg1 = msgbox("Your computer has been infected",o,"scientificoder
msg2 = msgbox("Open safe mode?",o,"scientificoder
msg3 = msgbox("Try again..",o,"scientificoder
msg4 = msgbox("Your computer is being shutdowned",o,"scientificoder
msg5 = msgbox("Once More..",o,"scientificoder
LOOP
