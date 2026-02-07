void ledPattern()
{
  digitalWrite(LED_BUILTIN, LOW);
  delay(10000);

  unsigned long startTime = millis();
  while (millis() - startTime < 10000)
  {
    digitalWrite(LED_BUILTIN, HIGH);
    delay(500);
    digitalWrite(LED_BUILTIN, LOW);
    delay(500);
  }
}

void setup()
{
  delay(5000);
  pinMode(LED_BUILTIN, OUTPUT);
}

void loop()
{
  ledPattern();
}
