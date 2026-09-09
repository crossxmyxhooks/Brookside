(() => {
  if (!window.BrooksideCallsV2) {
    console.error("BrooksideCallsV2 data was not loaded before call-integration-v2.js");
    return;
  }

  let lastCaller = null;

  function callData() {
    return window.BrooksideCallsV2;
  }

  function renderChoices(call, choices) {
    const wrap = document.getElementById("callChoices");
    if (!wrap) return;
    wrap.innerHTML = "";

    choices.forEach(choice => {
      const button = document.createElement("button");
      button.className = "item";
      button.textContent = choice.text;
      button.onclick = () => chooseCallOption(call, choice);
      wrap.appendChild(button);
    });
  }

  function finishCall(call, reply) {
    const area = document.getElementById("callArea");
    if (!area) return;

    area.innerHTML += `
      <div class="response">
        <span class="label">${call.who}</span>
        ${reply}
      </div>
      <div class="choice-grid" style="margin-top:12px">
        <button class="btn-blue" id="newCallBtn">☎️ NEW CALL</button>
        <button class="btn-cream" id="hangUpBtn">📵 HANG UP</button>
      </div>`;

    document.getElementById("newCallBtn").onclick = () => window.openCall();
    document.getElementById("hangUpBtn").onclick = () => {
      if (typeof window.goHome === "function") window.goHome();
    };
  }

  function chooseCallOption(call, choice) {
    const area = document.getElementById("callArea");
    const wrap = document.getElementById("callChoices");
    if (!area || !wrap) return;

    wrap.innerHTML = "";
    area.innerHTML += `
      <div class="bubble me">
        <span class="who">you</span>
        ${choice.text}
      </div>
      <div class="response">
        <span class="label">${call.who}</span>
        ${choice.reply}
      </div>`;

    const nextChoices = callData().getOptions(choice);
    if (nextChoices.length) {
      const nextWrap = document.createElement("div");
      nextWrap.id = "callChoices";
      nextWrap.className = "choice-grid";
      area.appendChild(nextWrap);
      renderChoices(call, nextChoices);
    } else {
      finishCall(call, "Talk soon. ♡");
    }
  }

  window.openCall = function openCallV2() {
    if (typeof window.show === "function") window.show("call");

    const c = callData().randomCall(lastCaller);
    lastCaller = c.who;
    const area = document.getElementById("callArea");
    if (!area) return;

    area.innerHTML = `
      <div class="call-card">
        <div class="call-avatar">${c.icon}</div>
        <div class="call-name">${c.who}</div>
        <div class="call-sub">INCOMING CALL...</div>
      </div>
      <div class="choice-grid">
        <button class="item" id="acceptCall">📞 ACCEPT</button>
        <button class="item" id="declineCall">🔕 DECLINE</button>
      </div>`;

    document.getElementById("acceptCall").onclick = () => window.acceptCall(c);
    document.getElementById("declineCall").onclick = () => window.declineCall(c.who);
  };

  window.declineCall = function declineCallV2(who) {
    const area = document.getElementById("callArea");
    if (!area) return;

    area.innerHTML = `
      <div class="card">
        <span class="label">Missed Call</span>
        <h3>🔕 ${who}</h3>
        <p>She'll probably text you.</p>
      </div>
      <div class="choice-grid">
        <button class="btn-blue" id="newCallBtn">☎️ NEW CALL</button>
        <button class="btn-cream" id="hangUpBtn">← HOME</button>
      </div>`;

    document.getElementById("newCallBtn").onclick = () => window.openCall();
    document.getElementById("hangUpBtn").onclick = () => {
      if (typeof window.goHome === "function") window.goHome();
    };
  };

  window.acceptCall = function acceptCallV2(c) {
    const area = document.getElementById("callArea");
    if (!area) return;

    area.innerHTML = `
      <div class="card green">
        <span class="label">On the phone with ${c.who}</span>
        <h3>${c.icon} ${c.who}</h3>
        <p>${c.line}</p>
      </div>
      <div id="callChoices" class="choice-grid"></div>`;

    renderChoices(c, callData().getOptions(c));
  };
})();
