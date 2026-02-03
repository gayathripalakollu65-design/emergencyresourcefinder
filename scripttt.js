function findResource() {
    let type = document.getElementById("resourceType").value;
    let location = document.getElementById("location").value;
    let result = document.getElementById("result");

    if (type === "" || location === "") {
        result.innerHTML = "⚠️ Please select resource and enter location.";
        return;
    }

    if (type === "hospital") {
        result.innerHTML = "🏥 Nearest Hospital in " + location +
            "<br>City Care Hospital<br>Contact: 9876543210";
    }
    else if (type === "ambulance") {
        result.innerHTML = "🚑 Ambulance Service in " + location +
            "<br>Call: 108";
    }
    else if (type === "bloodbank") {
        result.innerHTML = "🩸 Blood Bank in " + location +
            "<br>Red Cross Blood Bank<br>Contact: 9123456789";
    }
    else if (type === "helpline") {
        result.innerHTML = "📞 Emergency Helplines<br>Police: 100<br>Fire: 101<br>Women: 181";
    }
}
