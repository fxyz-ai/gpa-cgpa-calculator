const chatbot = document.getElementById('chatbot');
const conversation = document.getElementById('conversation');
const inputForm = document.getElementById('input-form');
const inputField = document.getElementById('input-field');

inputForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const input = inputField.value;

  inputField.value = '';
  const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: "2-digit" });

  let message = document.createElement('div');
  message.classList.add('chatbot-message', 'user-message');
  message.innerHTML = `<p class="chatbot-text" sentTime="${currentTime}">${input}</p>`;
  conversation.appendChild(message);

  const response = generateResponse(input);

  message = document.createElement('div');
  message.classList.add('chatbot-message','chatbot');
  message.innerHTML = `<p class="chatbot-text" sentTime="${currentTime}">${response}</p>`;
  conversation.appendChild(message);
  message.scrollIntoView({behavior: "smooth"});
});

function generateResponse(input) {
  const lowerCaseInput = input.toLowerCase();

  const responsesByInput = {
    "hello": "Hello! How can I assist you today? 😊",
    "who are you": "I am SAN(Soldier-At-Network) BOT, I am a chat bot created to provide help to CRPF.",
    "who is the high rank in crpf": "The Central Reserve Police Force (CRPF) is a paramilitary force in India. The position of the Director-General (DG) is the highest-ranking position within the CRPF. The Director-General is the head of the organization and is responsible for overseeing the operations and functioning of the force.",
    "who is the dg": "the Director-General (DG) of the Central Reserve Police Force (CRPF) is Dr. Sujoy Lal Thaosen.",
    "how can i contact dg": "Here is his phone number: 011-24360971 and E-mail ID: dg@crpf.gov.in",
    "help": "Here is the helpline number you can contact: 011-26160255 and E-mail ID: cpgramscrpf@crpf.gov.in",
    "what are the departments under crpf": "These are the deparments under CRPF\n1. Operations\n2. Training\n3. Mediacl\n4. Engineering\n5. Communication\n6. Logistics\n7. Intelligence\n8. Personnel\n9. Finance\n10. Specialized Units",
    "where is crpf": "The headquarters of CRPF is located in New Delhi, India.",
    "what is crpf": "CRPF stands for Central Reserve Police Force. It is the largest paramilitary force in India and operates under the Ministry of Home Affairs.",
    "role of crpf": "The primary roles of CRPF include maintaining law and order, counter-insurgency operations, counter-terrorism, disaster management, and assisting in general elections.",
    "rank structure in crpf": "The rank structure in CRPF includes designations such as Constable, Head Constable, Assistant Sub-Inspector (ASI), Sub-Inspector (SI), Inspector, Deputy Commandant, Commandant, Deputy Inspector General (DIG), Inspector General (IG), Additional Director General (ADG), and Director General (DG).",
    "operations of crpf": "The Central Reserve Police Force (CRPF) is involved in various operations to maintain law and order, counter-terrorism, counter-insurgency, disaster relief, and more. Here's an overview of some of the key operations and roles of the CRPF:\nInternal Security Operations\nCounter-Terrorism Operations\nCounter-Insurgency Operations\nRiot Control and Crowd Management\nBorder Security and Anti-Infiltration\nUnited Nations Peacekeeping Missions\nDisaster Relief and Rescue Operations\nVIP Security and Special Protection Group (SPG)\nSpecialized Anti-Terrorism Units\nLaw and Order Maintenance",
    "when was crpf established": "The Central Reserve Police Force (CRPF) was established as the Crown Representative's Police (CRP) on July 27, 1939, and later became the CRPF on December 28, 1949, to assist the British government in maintaining law and order in the Indian territory during the colonial period and has since evolved into the largest paramilitary force in India, involved in various critical operations including counter-insurgency, counter-terrorism, border security, disaster relief, and maintaining law and order.",
    "oomburiya": "pant ah kalatu",
    
  };

  if (responsesByInput[lowerCaseInput]) {
    return responsesByInput[lowerCaseInput];
  }

  return "I'm here to assist you with any questions or concerns you may have. 😊";
}``