const metroMap = {
    // Yellow Line
    "Samaypur Badli": [{ name: "Rohini Sec 18,19", color: "yellow" }],
    "Rohini Sec 18,19": [{name: "Samaypur Badli", color: "yellow"},
                         {name: "Haiderpur-Badli Mor", color: "yellow"}],

    "Haiderpur-Badli Mor": [{name: "Rohini Sec 18,19", color: "yellow"},
                         {name: "Jahangirpuri", color: "yellow"}],
    "Jahangirpuri": [{name: "Haiderpur-Badli Mor", color: "yellow"},
                         {name: "Adarsh Nagar", color: "yellow"}],

    "Adarsh Nagar": [{name: "Jahangirpuri", color: "yellow"},
                         {name: "Azadpur", color: "yellow"}],
    "Azadpur": [{name: "Adarsh Nagar", color: "yellow"},
                         {name: "Model Town", color: "yellow"},
                         {name: "Majlis Park", color: "pink"},
                         {name: "Shalimar Bagh", color: "pink"}],
    "Model Town": [{name: "G.T.B. Nagar", color: "yellow"},
                    {name: "Azadpur", color: "yellow"}],
    "G.T.B. Nagar": [{name: "Model Town", color: "yellow"},
                    {name: "Vishwavidyalaya", color: "yellow"}],
    "Vishwavidyalaya": [{name: "G.T.B. Nagar", color: "yellow"},
                        {name: "Vidhan Sabha", color: "yellow"}],
    "Vidhan Sabha": [{name: "Vishwavidyalaya", color: "yellow"},
                     {name: "Civil Lines", color: "yellow"}],
    "Civil Lines": [{name: "Vidhan Sabha", color: "yellow"},
                    {name: "Kashmere Gate", color: "yellow"}],
    "Kashmere Gate": [{name: "Civil Lines", color: "yellow"},
                      {name: "Chandni Chowk", color: "yellow"},
                      {name: "Tis Hazari", color: "red"},
                      {name: "Shastri Park", color: "red"},
                      {name: "Lal Quila", color: "violet"}],
    "Chandni Chowk": [{name: "Kashmere Gate", color: "yellow"},
                      {name: "Chawri Bazar", color: "yellow"}],
    "Chawri Bazar": [{name: "Chandni Chowk", color: "yellow"},
                        {name: "New Delhi", color: "yellow"}],
    "New Delhi": [{name: "Chawri Bazar", color: "yellow"},
                {name: "Rajiv Chowk", color: "yellow"},
                {name: "Shivaji Stadium", color: "orange"}],
    "Rajiv Chowk": [{name: "New Delhi", color: "yellow"},
                    {name: "Patel Chowk", color: "yellow"},
                    {name: "RK Ashram Marg", color: "blue"},
                    {name: "Barakhamba Road", color: "blue"}],
    "Patel Chowk": [{name: "Rajiv Chowk", color: "yellow"},
                        {name: "Central Secretariat", color: "yellow"}],
    "Central Secretariat": [{name: "Patel Chowk", color: "yellow"},
                           {name: "Udyog Bhawan", color: "yellow"},
                           {name: "Khan Market", color: "violet"},
                           {name: "Janpath", color: "violet"}],
    "Udyog Bhawan": [{name: "Central Secretariat", color: "yellow"},
                            {name: "Lok Kalyan Marg", color: "yellow"}],
    "Lok Kalyan Marg": [{name: "Udyog Bhawan", color: "yellow"},
                        {name: "Jor Bagh", color: "yellow"}],
    "Jor Bagh": [{name: "Lok Kalyan Marg", color: "yellow"},
                            {name: "INA", color: "yellow"}],
    "INA": [{name: "Jor Bagh", color: "yellow"},
            {name: "AIIMS", color: "yellow"},
            {name: "South Extension", color: "pink"},
            {name: "Sarojini Nagar", color: "pink"}],
    "AIIMS": [{name: "INA", color: "yellow"},
              {name: "Green Park", color: "yellow"}],
    "Green Park": [{name: "AIIMS", color: "yellow"},
                   {name: "Hauz Khas", color: "yellow"}],
    "Hauz Khas": [{name: "Green Park", color: "yellow"},
                  {name: "Malviya Nagar", color: "yellow"},
                {name: "I.I.T.", color: "magenta"},
            {name: "Panchsheel Park", color: "magenta"}],
    "Malviya Nagar": [{name: "Hauz Khas", color: "yellow"},
                      {name: "Saket", color: "yellow"}],
    "Saket": [{name: "Malviya Nagar", color: "yellow"},
              {name: "Qutub Minar", color: "yellow"}],
    "Qutub Minar": [{name: "Saket", color: "yellow"},
                    {name: "Chhattarpur", color: "yellow"}],
    "Chhattarpur": [{name: "Qutub Minar", color: "yellow"},
                    {name: "Sultanpur", color: "yellow"}],
    "Sultanpur": [{name: "Chhattarpur", color: "yellow"},
                  {name: "Ghitorni", color: "yellow"}],
    "Ghitorni": [{name: "Sultanpur", color: "yellow"},
                    {name: "Arjangarh", color: "yellow"}],
    "Arjangarh": [{name: "Ghitorni", color: "yellow"},
                        {name: "Guru Dronacharya", color: "yellow"}],
    "Guru Dronacharya": [{name: "Arjangarh", color: "yellow"},
                         {name: "Sikanderpur", color: "yellow"}],
    "Sikanderpur": [{name: "Guru Dronacharya", color: "yellow"},
                    {name: "M.G. Road", color: "yellow"},
                    {name: "Phase 1", color: "grey"},
                    {name: "Phase 2", color: "grey"}],
    "M.G. Road": [{name: "Sikanderpur", color: "yellow"},
                  {name: "IFFCO Chowk", color: "yellow"}],
    "IFFCO Chowk": [{name: "M.G. Road", color: "yellow"},
                    {name: "HUDA City Centre", color: "yellow"}],
    "HUDA City Centre": [{name: "IFFCO Chowk", color: "yellow"}],

    // yellow line complete


    // blue line start
    "Dwarka Sec 21": [{name: "Dwarka Sec 8", color: "blue"},
                      {name: "Airport", color: "orange"}],
    "Dwarka Sec 8": [{name: "Dwarka Sec 21", color: "blue"},
                     {name: "Dwarka Sec 9", color: "blue"}],
    "Dwarka Sec 9": [{name: "Dwarka Sec 8", color: "blue"},
                     {name: "Dwarka Sec 10", color: "blue"}],
    "Dwarka Sec 10": [{name: "Dwarka Sec 9", color: "blue"},
                        {name: "Dwarka Sec 11", color: "blue"}],
    "Dwarka Sec 11": [{name: "Dwarka Sec 10", color: "blue"},
                      {name: "Dwarka Sec 12", color: "blue"}],
    "Dwarka Sec 12": [{name: "Dwarka Sec 11", color: "blue"},
                      {name: "Dwarka Sec 13", color: "blue"}],
    "Dwarka Sec 13": [{name: "Dwarka Sec 12", color: "blue"},
                      {name: "Dwarka Sec 14",color:   "blue"}],                                    
    "Dwarka Sec 14": [{name: "Dwarka Sec 13", color: "blue"},
                      {name: "Dwarka", color: "blue"}],
    "Dwarka": [{name: "Dwarka Sec 14", color: "blue"},
                {name: "Dwarka Mor", color: "blue"},
                {name: "Nangli", color: "grey"}],
    "Dwarka Mor": [{name: "Dwarka", color: "blue"},
                    {name: "Nawada", color: "blue"}],
    "Nawada": [{name: "Dwarka Mor", color: "blue"},
                {name: "Uttam Nagar (W)", color: "blue"}],
    "Uttam Nagar (W)": [{name: "Nawada", color: "blue"},
                        {name: "Uttam Nagar (E)", color: "blue"}],
    "Uttam Nagar (E)": [{name: "Uttam Nagar (W)",color: "blue"},
                        {name: "Janakpuri West", color: "blue"}],
    "Janakpuri West": [{name: "Uttam Nagar (E)", color: "blue"},
                        {name: "Janakpuri East", color: "blue"},
                        {name: "Dabri Mor", color: "magenta"}],
    "Janakpuri East": [{name: "Janakpuri West", color: "blue"},
                       {name: "Tilak Nagar", color: "blue"}],
    "Tilak Nagar": [{name: "Janakpuri East", color: "blue"},
                    {name: "Subhash Nagar", color: "blue"}],
    "Subhash Nagar": [{name: "Tilak Nagar", color: "blue"},
                      {name: "Tagore Garden", color: "blue"}],
    "Tagore Garden": [{name: "Subhash Nagar", color: "blue"},
                      {name: "Rajouri Garden", color: "blue"}],
    "Rajouri Garden": [{name: "Tagore Garden", color: "blue"},
                       {name: "Ramesh Nagar", color: "blue"},
                       {name: "Mayapuri", color: "pink"},
                       {name: "ESI Hospital", color: "pink"}],
    "Ramesh Nagar": [{name: "Rajouri Garden", color: "blue"},
                     {name: "Moti Nagar", color: "blue"}],
    "Moti Nagar": [{name: "Ramesh Nagar", color: "blue"},
                    {name: "Kirti Nagar", color: "blue"}],
    "Kirti Nagar": [{name: "Moti Nagar", color: "blue"},
                    {name: "Shadipur", color: "blue"},
                    {name: "Satgutu Ram Singh Marg", color: "green"}],
    "Shadipur": [{name: "Kirti Nagar", color: "blue"},
                 {name: "Patel Nagar", color: "blue"}],
    "Patel Nagar": [{name: "Shadipur", color: "blue"},
                    {name: "Rajendra Place", color: "blue"}],
    "Rajendra Place": [{name: "Patel Nagar", color: "blue"},
                        {name: "Karol Bagh", color: "blue"}],
    "Karol Bagh": [{name: "Rajendra Place", color: "blue"},
                    {name: "Jhandewalan", color: "blue"}],
    "Jhandewalan": [{name: "Karol Bagh", color: "blue"},
                    {name: "RK Ashram Marg", color: "blue"}],
    "RK Ashram Marg": [{name: "Jhandewalan", color: "blue"},
                        {name: "Rajiv Chowk", color: "blue"}],
    "Barakhamba Road": [{name: "Rajiv Chowk", color: "blue"},
                        {name: "Mandi House", color: "blue"}],
    "Mandi House": [{name: "Barakhamba Road", color: "blue"},
                    {name: "Pragati Maidan", color: "blue"},
                    {name: "Janpath", color: "violet"},
                    {name: "I.T.O.", color: "violet"}],
    "Pragati Maidan": [{name: "Mandi House", color: "blue"},
                        {name: "Indraprastha", color: "blue"}],
    "Indraprastha": [{name: "Pragati Maidan", color: "blue"},
                     {name: "Yamuna Bank", color: "blue"}],
    "Yamuna Bank": [{name: "Indraprastha", color: "blue"},
                    {name: "Laxmi Nagar", color: "blue"},
                    {name: "Akshardham", color: "blue"}],
    "Laxmi Nagar": [{name: "Yamuna Bank", color: "blue"},
                    {name: "Nirman Vihar", color: "blue"}],
    "Nirman Vihar": [{name: "Laxmi Nagar", color: "blue"},
                     {name: "Preet Vihar", color: "blue"}],
    "Preet Vihar": [{name: "Nirman Vihar", color: "blue"},
                    {name: "Karkarduma", color: "blue"}],
    "Karkarduma": [{name: "Preet Vihar", color: "blue"},
                    {name: "Anand Vihar I.S.B.T.", color: "blue"},
                    {name: "Anand Vihar I.S.B.T.", color: "pink"},
                    {name: "Karkarduma Court", color: "pink"}],
    "Anand Vihar I.S.B.T.": [{name: "Karkarduma", color: "blue"},
                             {name: "Karkarduma", color: "pink"},
                            {name: "Kaushambi", color: "blue"},
                            {name: "I.P. Extension", color: "pink"}],
    "Kaushambi": [{name: "Anand Vihar I.S.B.T.", color: "blue"},
                  {name: "Vaishali", color: "blue"}],
    "Vaishali": [{name: "Kaushambi", color: "blue"}],

    "Akshardham": [{name: "Mayur Vihar-I", color: "blue"},
                   {name: "Yamuna Bank", color: "blue"}],
    "Mayur Vihar-I": [{name: "Mayur Vihar Extn.", color: "blue"},
                      {name: "Akshardham", color: "blue"},
                      {name: "Hazrat Nizamuddin", color: "pink"},
                      {name: "Mayur Vihar Pocket I", color: "pink"}],
    "Mayur Vihar Extn.": [{name: "Mayur Vihar-I", color: "blue"},
                          {name: "New Ashok Nagar", color: "blue"}],
    "New Ashok Nagar": [{name: "Mayur Vihar Extn.", color: "blue"},
                        {name: "Noida Sec 15", color: "blue"}],
    "Noida Sec 15": [{name: "New Ashok Nagar", color: "blue"},
                     {name: "Noida Sec 16", color: "blue"}],
    "Noida Sec 16": [{name: "Noida Sec 15",color: "blue"},
                     {name: "Noida Sec 18", color: "blue"}],
    "Noida Sec 18": [{name: "Noida Sec 16",color: "blue"},
                     {name: "Botanical Garden", color: "blue"}],
    "Botanical Garden": [{name: "Noida Sec 18", color: "blue"},
                         {name: "Golf Course", color: "blue"},
                        {name: "Okhla Bird Sanctuary", color: "magenta"}],
    "Golf Course": [{name: "Botanical Garden", color: "blue"},
                    {name: "Noida City Centre", color: "blue"}],
    "Noida City Centre": [{name: "Golf Course", color: "blue"},
                        {name: "Sec 34 Noida", color: "blue"}],
    "Sec 34 Noida": [{name: "Noida City Centre", color: "blue"},
                     {name: "Sec 52 Noida", color: "blue"}],
    "Sec 52 Noida": [{name: "Sec 34 Noida",color: "blue"},
                     {name: "Sec 61 Noida", color: "blue"},
                     {name: "Sec 71", color: "aqua"}],
    "Sec 61 Noida": [{name: "Sec 52 Noida",color: "blue"},
                     {name: "Sec 59 Noida", color: "blue"}],
    "Sec 59 Noida": [{name: "Sec 61 Noida",color: "blue"},
                     {name: "Sec 62 Noida", color: "blue"}],
    "Sec 62 Noida": [{name: "Sec 59 Noida",color: "blue"},
                     {name: "Noida Electronic City", color: "blue"}],
    "Noida Electronic City": [{name: "Sec 62 Noida",color: "blue"}],

    // blue line complete

    // violet line start
    "Lal Quila": [{name: "Jama Masjid", color: "violet"},
                  {name: "Kashmere Gate", color: "violet"}],
    "Jama Masjid": [{name: "Lal Quila", color: "violet"},
                    {name: "Delhi Gate", color: "violet"}],
    "Delhi Gate": [{name: "Jama Masjid", color: "violet"},
                        {name: "I.T.O.", color: "violet"}],
    "I.T.O.": [{name: "Delhi Gate", color: "violet"},
                {name: "Mandi House", color: "violet"}],
    "Mandi House": [{name: "I.T.O.", color: "violet"},
                    {name: "Barakhamba Road", color: "blue"},
                    {name: "Janpath", color: "violet"},
                    {name: "Pragati Maidan", color: "blue"}],
    "Janpath": [{name: "Mandi House", color: "violet"},
                {name: "Central Secretariat", color: "violet"}],
    "Khan Market": [{name: "JLN Stadium", color: "violet"},
                    {name: "Central Secretariat", color: "violet"}],
    "JLN Stadium": [{name: "Khan Market", color: "violet"},
                    {name: "Jangpura", color: "violet"}],
    "Jangpura": [{name: "JLN Stadium", color: "violet"},
                          {name: "Lajpat Nagar", color: "violet"},],
    "Lajpat Nagar": [{name: "Jangpura", color: "violet"},
                     {name: "Moolchand", color: "violet"},
                    {name: "Vinoba puri", color: "pink"},
                    {name: "South Extension", color: "pink"}],
    "Moolchand": [{name: "Lajpat Nagar", color: "violet"},
                  {name: "Kailash Colony", color: "violet"}],
    "Kailash Colony": [{name: "Moolchand", color: "violet"},
                       {name: "Nehru Place", color: "violet"}],
    "Nehru Place": [{name: "Kailash Colony", color: "violet"},
                    {name: "Kalkaji Mandir", color: "violet"}],
    "Kalkaji Mandir": [{name: "Nehru Place", color: "violet"},
                        {name: "Govind Puri", color: "violet"},
                      {name: "Okhla N.S.I.C.", color: "magenta"},
                      {name: "Nehru Enclave", color: "magenta"}],
    "Govind Puri": [{name: "Kalkaji Mandir", color: "violet"},
                    {name: "Harkesh Nagar Okhla", color: "violet"}],
    "Harkesh Nagar Okhla": [{name: "Govind Puri", color: "violet"},
                             {name: "Jasola Apollo", color: "violet"}],
    "Jasola Apollo": [{name: "Harkesh Nagar Okhla", color: "violet"},
                      {name: "Sarita Vihar", color: "violet"}],
    "Sarita Vihar": [{name: "Jasola Apollo", color: "violet"},
                     {name: "Mohan Estate", color: "violet"}],
    "Mohan Estate": [{name: "Sarita Vihar", color: "violet"},
                     {name: "Tughlakabad Station", color: "violet"}],
    "Tughlakabad Station": [{name: "Mohan Estate", color: "violet"},
                            {name: "Badarpur Border", color: "violet"}],
    "Badarpur Border": [{name: "Tughlakabad Station", color: "violet"},
                                {name: "Sarai", color: "violet"}],
    "Sarai": [{name: "Badarpur Border", color: "violet"},
              {name: "N.H.P.C. Chowk", color: "violet"}],
    "N.H.P.C. Chowk": [{name: "Sarai", color: "violet"},
                {name: "Mewala Maharajpur", color: "violet"}],
    "Mewala Maharajpur": [{name: "N.H.P.C. Chowk", color: "violet"},
                         {name: "Sec 28", color: "violet"}],
    "Sec 28": [{name: "Mewala Maharajpur", color: "violet"},
                            {name: "Badkal Mor", color: "violet"}],
    "Badkal Mor": [{name: "Sec 28", color: "violet"},
                    {name: "Old Faridabad", color: "violet"}],
    "Old Faridabad": [{name: "Badkal Mor", color: "violet"},
                      {name: "Neelam Chowk Ajronda", color: "violet"}],
    "Neelam Chowk Ajronda": [{name: "Old Faridabad",color: "violet"},
                             {name: "Bata Chowk", color: "violet"}],
    "Bata Chowk": [{name: "Neelam Chowk Ajronda",color: "violet"},
                                {name: "Escorts Mujesar", color: "violet"}],
    "Escorts Mujesar": [{name: "Bata Chowk", color: "violet"},
                        {name: "N.C.B. Colony", color: "violet"}],
    "N.C.B. Colony": [{name: "Escorts Mujesar", color: "violet"},
                      {name: "Ballabhgarh", color: "violet"}],
    "Ballabhgarh": [{name: "N.C.B. Colony", color: "violet"}],

    // violet line complete

    // Red line start
    "Rithala": [{name: "Rohini West", color: "red"}],
    "Rohini West": [{name: "Rithala", color: "red"},
                    {name: "Rohini East", color: "red"}],
    "Rohini East": [{name: "Rohini West", color: "red"},
                    {name: "Pitampura", color: "red"}],
    "Pitampura": [{name: "Rohini East", color: "red"},
                  {name: "Kohat Enclave", color: "red"}],
    "Kohat Enclave": [{name: "Pitampura", color: "red"},
                     {name: "Netaji Subhash Place", color: "red"}],
    "Netaji Subhash Place": [{name: "Kohat Enclave", color: "red"},
                        {name: "Shalimar Bagh", color: "pink"},
                    {name: "Keshav Puram", color: "red"},
                {name: "Shakur Pur", color: "pink"}],
    "Keshav Puram": [{name: "Netaji Subhash Place", color: "red"},
                    {name: "Kanhaiya Nagar", color: "red"}],
    "Kanhaiya Nagar": [{name: "Keshav Puram", color: "red"},
                        {name: "Inderlok", color: "red"}],
    "Inderlok": [{name: "Kanhaiya Nagar", color: "red"},
                 {name: "Shastri Nagar", color: "red"},
                {name: "Ashok Park Main", color: "green"}],
    "Shastri Nagar": [{name: "Inderlok", color: "red"},
                      {name: "Pratap Nagar", color: "red"}],
    "Pratap Nagar": [{name: "Shastri Nagar", color: "red"},
                        {name: "Pulbangash", color: "red"}],
    "Pulbangash": [{name: "Pratap Nagar", color: "red"},
                    {name: "Tis Hazari", color: "red"}],
    "Tis Hazari": [{name: "Pulbangash", color: "red"},
                   {name: "Kashmere Gate", color: "red"}],
    "Shastri Park": [{name: "Kashmere Gate", color: "red"},
                     {name: "Seelampur", color: "red"}],
    "Seelampur": [{name: "Shastri Park", color: "red"},
                  {name: "Welcome", color: "red"}],
    "Welcome": [{name: "Seelampur", color: "red"},
                {name: "Shahdara", color: "red"},
                {name: "Jaffrabad", color: "pink"},
                 {name: "East Azad Nagar", color: "pink"}],

    "Shahdara": [{name: "Welcome", color: "red"},
        {name: "Mansarovar Park", color: "red"}],
    "Mansarovar Park": [{name: "Shahdara", color: "red"},
                        {name: "Jhilmil", color: "red"}],
    "Jhilmil" :[{name: "Mansarovar Park", color: "red"},
                {name: "Dilshad Garden", color: "red"}],  
    "Dilshad Garden": [{name: "Jhilmil", color: "red"},
                    {name: "Shahid Nagar", color: "red"}],
    "Shahid Nagar": [{name: "Dilshad Garden", color: "red"},
                     {name: "Raj Bagh", color: "red"}],
    "Raj Bagh": [{name: "Shahid Nagar", color: "red"},
                 {name: "Rajendra Nagar", color: "red"}],
    "Rajendra Nagar": [{name: "Raj Bagh", color: "red"},
                    {name: "Shyam Park", color: "red"}],
    "Shyam Park": [{name: "Rajendra Nagar", color: "red"},
                    {name: "Mohan Nagar", color: "red"}],
    "Mohan Nagar": [{name: "Shyam Park", color: "red"},
                    {name: "Arthala", color: "red"}],
    "Arthala": [{name: "Mohan Nagar", color: "red"},
                {name: "Hindon River", color: "red"}],
    "Hindon River": [{name: "Arthala", color: "red"},
                     {name: "New Bus Adda", color: "red"}],
    "New Bus Adda": [{name: "Hindon River", color: "red"}],

    // red line complete


    // green line start
    "Satguru Ram Singh Marg": [{name: "Ashok Park Main", color: "green"},
        {name: "Kirti Nagar", color: "green"}],

    "Ashok Park Main": [{name: "Satguru Ram Singh Marg", color: "green"},
                        {name: "Inderlok", color: "green"},
                        {name: "Punjabi Bagh", color: "green"}],
    "Punjabi Bagh": [{name: "Shivaji Park", color: "green"},
                     {name: "Ashok Park Main", color: "green"}],
    "Shivaji Park": [{name: "Punjabi Bagh", color: "green"},
                     {name: "Madipur", color: "green"}],
    "Madipur": [{name: "Shivaji Park", color: "green"},
                {name: "Paschim Vihar (E)", color: "green"}],
    "Paschim Vihar (E)": [{name: "Madipur", color: "green"},
                        {name: "Paschim Vihar (W)", color: "green"}],
    "Paschim Vihar (W)": [{name: "Paschim Vihar (E)", color: "green"},
                          {name: "Peeragarhi", color: "green"}],
    "Peeragarhi": [{name: "Paschim Vihar (W)", color: "green"},
                    {name: "Udyog Nagar", color: "green"}],
    "Udyog Nagar": [{name: "Peeragarhi", color: "green"},
                    {name: "Maharaja Surajmal Stadium", color: "green"}],
    "Maharaja Surajmal Stadium": [{name: "Udyog Nagar", color: "green"},
                        {name: "Nagloi", color: "green"}],
    "Nagloi": [{name: "Maharaja Surajmal Stadium", color: "green"},
                {name: "Nagloi Railway Station", color: "green"}],
    "Nagloi Railway Station": [{name: "Nagloi", color: "green"},
                               {name: "Rajdhani Park", color: "green"}],
    "Rajdhani Park": [{name: "Nagloi Railway Station", color: "green"},
                      {name: "Mundka", color: "green"}],
    "Mundka": [{name: "Rajdhani Park", color: "green"},
                {name: "Mundka Industrial Area (MIA)", color: "green"}],
    "Mundka Industrial Area (MIA)": [{name: "Mundka", color: "green"},
                    {name: "Ghevra Metro Station", color: "green"}],
    "Ghevra Metro Station": [{name: "Mundka Industrial Area (MIA)", color: "green"},
                        {name: "Tikri Kalan", color: "green"}],
    "Tikri Kalan": [{name: "Ghevra Metro Station", color: "green"},
                    {name: "Tikri Border", color: "green"}],
    "Tikri Border": [{name: "Tikri Kalan", color: "green"},
            {name: "Modern Industrial Estate (MIE)", color: "green"}],
    "Modern Industrial Estate (MIE)": [{name: "Tikri Border", color: "green"},
                {name: "Bus Stand", color: "green"}],
    "Bus Stand": [{name: "Modern Industrial Estate (MIE)", color: "green"},
                    {name: "City Park", color: "green"}],
    "City Park": [{name: "Bus Stand", color: "green"}],

    // green Line complete

    // pink line start
    "Shiv Vihar": [{name: "Johri Enclave", color: "pink"}],
    "Johri Enclave": [{name: "Shiv Vihar", color: "pink"},
                      {name: "Gokulpuri", color: "pink"}],
    "Gokulpuri": [{name: "Johri Enclave", color: "pink"},
                  {name: "Mauzpur", color: "pink"}],
    "Mauzpur": [{name: "Gokulpuri", color: "pink"},
                    {name: "Jaffrabad", color: "pink"}],
    "Jaffrabad": [{name: "Mauzpur", color: "pink"},
                  {name: "Welcome", color: "pink"}],
    "East Azad Nagar": [{name: "Welcome", color: "pink"},
                        {name: "Krishna Nagar", color: "pink"}],
    "Krishna Nagar": [{name: "East Azad Nagar", color: "pink"},
                      {name: "Karkarduma Court", color: "pink"}],
    "Karkarduma Court": [{name: "Krishna Nagar", color: "pink"},
                        {name: "Karkarduma", color: "pink"}],
    "I.P. Extension": [{name: "Vinod Nagar", color: "pink"},
                       {name: "Anand Vihar I.S.B.T.", color: "pink"}],
    "Vinod Nagar": [{name: "I.P. Extension", color: "pink"},
                        {name: "Vinod Nagar East", color: "pink"}],
    "Vinod Nagar East": [{name: "Vinod Nagar", color: "pink"},
                        {name: "Trilokpuri", color: "pink"}],
    "Trilokpuri": [{name: "Vinod Nagar East", color: "pink"},
                    {name: "Mayur Vihar Pocket I", color: "pink"}],
    "Mayur Vihar Pocket I": [{name: "Trilokpuri", color: "pink"},
                        {name: "Mayur Vihar-I", color: "pink"}],
    "Hazrat Nizamuddin": [{name: "Mayur Vihar-I", color: "pink"},
                           {name: "Ashram", color: "pink"}],
    "Ashram": [{name: "Hazrat Nizamuddin", color: "pink"},
                {name: "Vinoba Puri", color: "pink"}],
    "Vinoba Puri": [{name: "Ashram", color: "pink"},
        {name: "Lajpat Nagar", color: "pink"}],
    "South Extension": [{name: "Lajpat Nagar", color: "pink"},
                        {name: "INA", color: "pink"}],
    "Sarojini Nagar": [{name: "INA", color: "pink"},
                       {name: "Bhikaji Cama Place", color: "pink"}],
    "Bhikaji Cama Place": [{name: "Sarojini Nagar",color: "pink"},
                        {name: "Sir Vishweshwaraiah Moti Bagh", color: "pink"}],
    "Sir Vishweshwaraiah Moti Bagh": [{name: "Bhikaji Cama Place", color: "pink"},
        {name: "Durgabai Deshmukh South Campus", color: "pink"}],
    "Durgabai Deshmukh South Campus": [{name: "Sir Vishweshwaraiah Moti Bagh", color: "pink"},
        {name: "Delhi Cantt.", color: "pink"}],
    "Delhi Cantt.": [{name: "Durgabai Deshmukh South Campus", color: "pink"},
            {name: "Naraina Vihar", color: "pink"}],
    "Naraina Vihar": [{name: "Delhi Cantt.", color: "pink"},
                {name: "Mayapuri", color: "pink"}],
    "Mayapuri": [{name: "Naraina Vihar", color: "pink"},
                 {name: "Rajouri Garden", color: "pink"}],
    "ESI Hospital": [{name: "Rajouri Garden", color: "pink"},
                       {name: "Punjabi Bagh(W)", color: "pink"}],
    "Punjabi Bagh(W)": [{name: "ESI Hospital", color: "pink"},
                        {name: "Shakur Pur", color: "pink"}],
    "Shakur Pur": [{name: "Punjabi Bagh(W)", color: "pink"},
                            {name: "Netaji Subhash Place", color: "pink"}],
    "Shalimar Bagh": [{name: "Netaji Subhash Place", color: "pink"},
                                {name: "Azadpur", color: "pink"}],
    "Majlis Park": [{name: "Azadpur", color: "pink"}],

    // Pink line complete

    // Magenta line start
    "Okhla Bird Sanctuary": [{name: "Botanical Garden", color: "magenta"},
                             {name: "Kalindi Kunj", color: "magenta"}],
    "Kalindi Kunj": [{name: "Okhla Bird Sanctuary", color: "magenta"},
                    {name: "Jasola Vihar Shaheen Bagh", color: "magenta"}],
    "Jasola Vihar Shaheen Bagh": [{name: "Kalindi Kunj", color: "magenta"},
                                 {name: "Okhla Vihar", color: "magenta"}],
    "Okhla Vihar": [{name: "Jasola Vihar Shaheen Bagh", color: "magenta"},
                    {name: "Jamia Millia Islamia", color: "magenta"}],
    "Jamia Millia Islamia": [{name: "Okhla Vihar", color: "magenta"},
                             {name: "Sukhdev Vihar", color: "magenta"}],
    "Sukhdev Vihar": [{name: "Jamia Millia Islamia",color: "magenta"},
                      {name: "Okhla N.S.I.C.", color: "magenta"}],
    "Okhla N.S.I.C.": [{name: "Sukhdev Vihar", color: "magenta"},
                       {name: "Kalkaji Mandir", color: "magenta"}],
    "Nehru Enclave": [{name: "Kalkaji Mandir", color: "magenta"},
                      {name: "Greater Kailash", color: "magenta"}],
    "Greater Kailash": [{name: "Nehru Enclave", color: "magenta"},
                        {name: "Chirag Delhi", color: "magenta"}],
    "Chirag Delhi": [{name: "Greater Kailash", color: "magenta"},
                     {name: "Panchsheel Park", color: "magenta"}],
    "Panchsheel Park": [{name: "Chirag Delhi", color: "magenta"},
                        {name: "Hauz Khas", color: "magenta"}],
    "I.I.T.": [{name: "Hauz Khas", color: "magenta"},
                {name: "R.K. Puram", color: "magenta"}],
    "R.K. Puram": [{name: "I.I.T.", color: "magenta"},
                    {name: "Munirka", color: "magenta"}],
    "Munirka": [{name: "R.K. Puram", color: "magenta"},
                {name: "Vasant Vihar", color: "magenta"}],
    "Vasant Vihar": [{name: "Munirka", color: "magenta"},
                    {name: "Shankar Vihar", color: "magenta"}],
    "Shankar Vihar": [{name: "Vasant Vihar", color: "magenta"},
                      {name: "Terminal 1-IGI", color: "magenta"}],
    "Terminal 1-IGI": [{name: "Shankar Vihar", color: "magenta"},
                       {name: "Sadar Bazar Cantonment", color: "magenta"}],
    "Sadar Bazar Cantonment": [{name: "Terminal 1-IGI",color: "magenta"},
                               {name: "Palam", color: "magenta"}],
    "Palam": [{name: "Sadar Bazar Cantonment", color: "magenta"},
              {name: "Dashrat Puri", color: "magenta"}],
    "Dashrat Puri": [{name: "Palam", color: "magenta"},
                     {name: "Dabri Mor", color: "magenta"}],
    "Dabri Mor": [{name: "Dashrat Puri", color: "magenta"},
                  {name: "Janakpuri West", color: "magenta"}],

    // magenta line complete
    
    // Orange line start
    "Shivaji Stadium": [{name: "New Delhi", color: "orange"},
                        {name: "Dhaula Kuan", color: "orange"}],
    "Dhaula Kuan": [{name: "Shivaji Stadium", color: "orange"},
                    {name: "Delhi Aerocity", color: "orange"}],
    "Delhi Aerocity": [{name: "Dhaula Kuan", color: "orange"},
                       {name: "Airport", color: "orange"}],
    "Airport": [{name: "Delhi Aerocity", color: "orange"},
                {name: "Dwarka Sec 21", color: "orange"}],

    // Orange line complete 
    
    // Grey lin start
    "Sec 55-56": [{name: "Sec 54 Chowk", color: "grey"}],
    "Sec 54 Chowk": [{name: "Sec 55-56", color: "grey"},
                    {name: "Sec 53-54", color: "grey"}],
    "Sec 53-54": [{name: "Sec 54 Chowk", color: "grey"},
                {name: "Sec 42-43", color: "grey"}],
    "Sec 42-43": [{name: "Sec 53-54", color: "grey"},
                  {name: "Phase 1", color: "grey"}],
    "Phase 1": [{name: "Sec 42-43", color: "grey"},
                {name: "Sikanderpur", color: "grey"}],
    "Phase 2": [{name: "Sikanderpur", color: "grey"},
                    {name: "Belvedere Towers", color: "grey"}],
    "Belvedere Towers": [{name: "Phase 2", color: "grey"},
                         {name: "Cyber City", color: "grey"}],
    "Cyber City": [{name: "Belvedere Towers", color: "grey"},
                    {name: "Moulsari Avenue", color: "grey"}],
    "Moulsari Avenue": [{name: "Cyber City", color: "grey"},
                        {name: "Phase 3", color: "grey"}],
    "Phase 3": [{name: "Moulsari Avenue", color: "grey"}],
    "Nangli": [{name: "Dwarka", color: "grey"},
               {name: "Najafgarh", color: "grey"}],
    "Najafgarh": [{name: "Nangli", color: "grey"},
                  {name: "Dhansa Bus Stand", color: "grey"}],
    "Dhansa Bus Stand": [{name: "Najafgarh", color: "grey"}],

    // Grey Line complete

    // Aqua line start
    "Sec 71": [{name: "Sec 52 Noida", color: "aqua"},
                {name: "Sec 50", color: "aqua"}],
    "Sec 50": [{name: "Sec 71", color: "aqua"},
               {name: "Sec 78", color: "aqua"}],
    "Sec 78": [{name: "Sec 50", color: "aqua"},
                {name: "Sec 101", color: "aqua"}],
    "Sec 101": [{name: "Sec 78", color: "aqua"},
                {name: "Sec 81", color: "aqua"}],
    "Sec 81": [{name: "Sec 101", color: "aqua"},
               {name: "Dadri Road", color: "aqua"}],
    "Dadri Road": [{name: "Sec 81", color: "aqua"},
                   {name: "Sec 83", color: "aqua"}],
    "Sec 83": [{name: "Dadri Road", color: "aqua"},
                {name: "Sec 137", color: "aqua"}],
    "Sec 137": [{name: "Sec 83", color: "aqua"},
                {name: "Sec 142", color: "aqua"}],
    "Sec 142": [{name: "Sec 137", color: "aqua"},
                {name: "Sec 143", color: "aqua"}],
    "Sec 143": [{name: "Sec 142", color: "aqua"},
                {name: "Sec 144", color: "aqua"}],
    "Sec 144": [{name: "Sec 143", color: "aqua"},
                {name: "Sec 145", color: "aqua"}],
    "Sec 145": [{name: "Sec 144", color: "aqua"},
                {name: "Sec 146", color: "aqua"}],
    "Sec 146": [{name: "Sec 145", color: "aqua"},
                {name: "Sec 147", color: "aqua"}],
    "Sec 147": [{name: "Sec 146", color: "aqua"},
                {name: "Sec 148", color: "aqua"}],
    "Sec 148": [{name: "Sec 147", color: "aqua"},
                {name: "Sec Knowledge Park II", color: "aqua"}],
    "Sec Knowledge Park II": [{name: "Sec 148", color: "aqua"},
                           {name: "Pari Chowk", color: "aqua"}],
    "Pari Chowk": [{name: "Sec Knowledge Park II", color: "aqua"},
                   {name: "Alpha I", color: "aqua"}],
    "Alpha I": [{name: "Pari Chowk", color: "aqua"},
                {name: "Delta I", color: "aqua"}],
    "Delta I": [{name: "Alpha I", color: "aqua"},
                {name: "DNIDA Office", color: "aqua"}],
    "DNIDA Office": [{name: "Delta I", color: "aqua"},
                    {name: "Depot Station", color: "aqua"}],
    "Depot Station": [{name: "DNIDA Office", color: "aqua"}]

    // aqua line complete   

}


function updateTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");

    // Format time in 24-hour format HH:mm:ss
    const formattedTime = `${hours}:${minutes}:${seconds}`;

    // Update the content of the HTML element
    document.getElementById("currentTime").innerText = `${formattedTime}H`;
}

// Update time every second
setInterval(updateTime, 1000);

// Call the function once immediately
updateTime();




function resetMapDisplay() {
    document.querySelectorAll(".metro-line").forEach(el => {
        // el.style.fill = ""; // Reset station color
        el.style.strokeWidth = "0.3%"; // Reset line color
    });
}


function highlightPath(path) {
    path.forEach((station, index) => {
        const stationElement = document.getElementById(station);
        if (stationElement) {
            stationElement.style.fill = "#28a745"; // Highlight color for station
        }

        // Highlight lines between each station in the path
        if (index < path.length - 1) {
            const currentStation = station;
            const nextStation = path[index + 1];

            // Try to find the line in both directions
            const lineElement =
                document.getElementById(`line-${currentStation}-${nextStation}`) ||
                document.getElementById(`line-${nextStation}-${currentStation}`);

            if (lineElement) {
                lineElement.style.strokeWidth = "1.5%"; // Highlight color for line
                lineElement.style.strokeLinecap = "round";
            }
        }
    });
}




// Tooltip element
const tooltip = document.getElementById("tooltip");

// Event listeners for each station
document.querySelectorAll(".station").forEach(station => {
    station.addEventListener("mouseover", showTooltip);
    station.addEventListener("mousemove", moveTooltip);
    station.addEventListener("mouseout", hideTooltip);
});

// Function to display the tooltip with the station name
function showTooltip(event) {
    const stationName = event.target.getAttribute("data-name");
    tooltip.innerText = stationName;
    tooltip.style.display = "block";
}

// Function to move the tooltip along with the cursor
function moveTooltip(event) {
    tooltip.style.left = `${event.pageX}px`;
    tooltip.style.top = `${event.pageY}px`;
}

// Function to hide the tooltip when not hovering over a station
function hideTooltip() {
    tooltip.style.display = "none";
}

// handling search bar of source and destination
$(function(){
 $("#startStation ,#endStation").selectize();
}); 



document.getElementById("findPathButton").addEventListener("click", () => {
    const source = document.getElementById("startStation").value;
    const destination = document.getElementById("endStation").value;
    let countStation = 0;
    // Calculate the shortest time and path
    const { time, path, pathColors } = findShortestTimeWithPath(source, destination);

    const resultContainer = document.getElementById("resultText");
    resultContainer.innerHTML = ""; // Clear previous results

    if (time === -1) {
        resultContainer.innerText = "No path found between the selected stations.";
    } else {

        const totalTime = document.getElementById("span-time");

        // Convert the time into hh:mm:ss format
        const hours = Math.floor(time / 3600);
        const minutes = Math.floor((time % 3600) / 60);
        const seconds = time % 60;

        // Format as hh:mm:ss
        const formattedTime = `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

        totalTime.innerText = `${formattedTime} hh:mm:ss`;

        let interchange = 0;

        function addTimeToCurrent(duration) {
            // Get the current time
            const now = new Date();

            // Parse the duration string (HH:mm:ss)
            const [hoursToAdd, minutesToAdd, secondsToAdd] = duration.split(":").map(Number);

            // Convert the duration to milliseconds and add to the current time
            const addedTime = new Date(
                now.getTime() +
                hoursToAdd * 3600 * 1000 + // Convert hours to milliseconds
                minutesToAdd * 60 * 1000 + // Convert minutes to milliseconds
                secondsToAdd * 1000        // Convert seconds to milliseconds
            );

            // Format the updated time as HH:mm:ss
            const updatedHours = String(addedTime.getHours()).padStart(2, "0");
            const updatedMinutes = String(addedTime.getMinutes()).padStart(2, "0");
            const updatedSeconds = String(addedTime.getSeconds()).padStart(2, "0");

            return `${updatedHours}:${updatedMinutes}:${updatedSeconds} hh:mm:ss`;
        }

        function displayUpdatedTime() {
            // Get the current time
            const now = new Date();
            const currentHours = String(now.getHours()).padStart(2, "0");
            const currentMinutes = String(now.getMinutes()).padStart(2, "0");
            const currentSeconds = String(now.getSeconds()).padStart(2, "0");

            // Set current time on the page
            document.getElementById("curr-time").innerText = `${currentHours}:${currentMinutes}:${currentSeconds} hh:mm:ss`;

            // Get the duration to add (from the example)
            const duration = formattedTime;

            // Calculate the updated time
            const updatedTime = addTimeToCurrent(duration);

            // Set the updated time on the page
            document.getElementById("dest-time").innerText = updatedTime;
        }

        // Call the function to display the updated time
        displayUpdatedTime();


        path.forEach((station, index) => {
            // Create a container for the station element
            const stationElement = document.createElement("div");
            stationElement.style.padding = "5px";
            stationElement.style.margin = "5px 0";
            stationElement.style.backgroundColor = pathColors[index] || "#f1f1f1"; // Use line color or default gray
            stationElement.style.color = "#000"; // Text color for better contrast
            stationElement.style.borderRadius = "5px";
            stationElement.style.minWidth = "300px";
            stationElement.style.display = "flex"; // Use flexbox for alignment
            stationElement.style.alignItems = "center"; // Center-align items vertically
        
            // Create a radio button element
            const radioButton = document.createElement("input");
            radioButton.type = "radio";
            radioButton.checked = true; // Ensure the radio button is checked
            radioButton.style.marginRight = "10px"; // Add space between the button and text
            radioButton.style.accentColor = pathColors[index] || "#f1f1f1"; // Set checked color same as div background
        
            // Add the text content
            const textNode = document.createTextNode(station);
            stationElement.appendChild(radioButton); // Append radio button first
            stationElement.appendChild(textNode); // Append text after the radio button
            
            // Append information about color change if applicable
            if (pathColors[index - 1] && pathColors[index] !== pathColors[index - 1]) {
                const changeText = document.createTextNode(` (change line to ${pathColors[index]} color)`);
                stationElement.appendChild(changeText);
                interchange = interchange + 1;
            }
        
            const totalInterchange = document.getElementById('span-chan');
            totalInterchange.innerText = interchange;
            // Append the station element to the result container
            resultContainer.appendChild(stationElement);
            countStation = countStation + 1;
        });

        const stationCount = document.getElementById("span-dist");
        stationCount.innerText = `${countStation - 1}`;
    }
});

function findShortestTimeWithPath(source, destination) {
    resetMapDisplay();
    const queue = [{ station: source, time: 0, color: null, path: [source], pathColors: [] }];
    const visited = new Map(); // To track visited states with (station, color) and their best time

    while (queue.length > 0) {
        // Sort the queue to prioritize minimum time and then shortest path length
        queue.sort((a, b) => {
            if (a.time === b.time) return a.path.length - b.path.length; // Prioritize shortest path for same time
            return a.time - b.time; // Otherwise, prioritize minimum time
        });

        const { station, time, color, path, pathColors } = queue.shift();

        // If the destination is reached, return the time, path, and colors
        if (station === destination) {
            highlightPath(path);
            return { 
                time, 
                path, 
                pathColors: [...pathColors, color] // Ensure the last station's color is added
            };
        }

        const visitKey = `${station}-${color}`;

        // Skip if this station-color combination has already been visited with a better or equal time
        if (visited.has(visitKey) && visited.get(visitKey) <= time) continue;

        visited.set(visitKey, time);

        // Explore neighbors
        for (const neighbor of metroMap[station] || []) {
            const { name: nextStation, color: nextColor } = neighbor;

            // Calculate additional time if the line color changes
            const extraTime = color && color !== nextColor ? 300 : 0;

            queue.push({
                station: nextStation,
                time: time + 130 + extraTime, // 2 minutes for the station and penalty if applicable
                color: nextColor,
                path: [...path, nextStation], // Append the station to the path
                pathColors: [...pathColors, nextColor] // Append the color of the current line
            });
        }
    }

    // Return -1 and an empty path if no path is found
    return { time: -1, path: [], pathColors: [] };
}
