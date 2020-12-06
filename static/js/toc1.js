
    // Create a list for the ToC entries
    tocList = document.createElement("ul");    

    // Get the h3 tags - ToC entries
    headers = document.getElementsByTagName("h2");
   
    // For each h3
    for (i = 0; i < headers.length; i++){
     
      name = headers[i].parentNode.id;
     
     
      // a list item for the entry
      tocListItem = document.createElement("li");

      // a link for the h3
      tocEntry = document.createElement("a");
      tocEntry.setAttribute("href","#"+name);
      tocEntry.innerText=headers[i].parentNode.id;
     
      tocListItem.appendChild(tocEntry);
      tocList.appendChild(tocListItem);
    }
    toc.appendChild(tocList);