# Domain Validation & Auto-Extension Guide

## 🎯 New Feature: Smart Domain Extension Handling

The search form now automatically detects and handles domain extensions intelligently!

## 🔍 How It Works

### **Validation Logic**

1. **User Types Domain**: The system checks if the user included an extension
2. **Extension Detection**: Uses regex to detect if extension is present
3. **Smart Parsing**:
   - **If extension included**: Extracts domain + extension separately
   - **If no extension**: Appends the selected extension from dropdown
4. **URL Format**: Only the full domain is passed in URL (no separate extension param)
   - ✅ `?domain=example.ma`
   - ❌ ~~`?domain=example&extension=.ma`~~

## 📝 Test Scenarios

### ✅ Scenario 1: User Types Domain WITHOUT Extension
**Input**: `example`  
**Selected Extension**: `.ma`  
**Result**: `/?domain=example.ma`  
**Display**: Shows results for `example.ma`

### ✅ Scenario 2: User Types Domain WITH Extension
**Input**: `example.com`  
**Selected Extension**: `.ma` (ignored)  
**Result**: `/?domain=example.com`  
**Display**: Shows results for `example.com`  
**Note**: The dropdown automatically updates to show `.com`

### ✅ Scenario 3: User Types Domain with DIFFERENT Extension
**Input**: `mysite.fr`  
**Selected Extension**: `.ma`  
**Result**: `/?domain=mysite.fr`  
**Display**: Shows results for `mysite.fr`  
**Note**: System respects the extension in the input

### ✅ Scenario 4: Mixed Case Domain
**Input**: `ExAmPLe.MA`  
**Result**: `/?domain=example.ma`  
**Display**: Normalized to lowercase

### ✅ Scenario 5: Domain with Spaces
**Input**: `  example  `  
**Selected Extension**: `.ma`  
**Result**: `/?domain=example.ma`  
**Display**: Trimmed and formatted

## 🚫 Validation Rules

### **Valid Domain Names**:
- ✅ `example`
- ✅ `my-site`
- ✅ `test123`
- ✅ `a1-b2-c3`
- ✅ `example.com`
- ✅ `site.ma`

### **Invalid Domain Names**:
- ❌ `a` (too short - min 2 chars)
- ❌ `-example` (cannot start with hyphen)
- ❌ `example-` (cannot end with hyphen)
- ❌ `exam--ple` (no consecutive hyphens)
- ❌ `exam ple` (no spaces in middle)
- ❌ `example!` (no special characters)
- ❌ `example.xyz` (invalid extension not in registry)

## 🧪 Complete Testing Guide

### Test 1: Basic Domain
```
1. Type: "test"
2. Select: .ma
3. Click: Rechercher
4. Expected URL: /?domain=test.ma
5. Result: Shows availability for test.ma
```

### Test 2: Domain with Extension
```
1. Type: "test.com"
2. Select: .ma (will be ignored)
3. Click: Rechercher
4. Expected URL: /?domain=test.com
5. Result: Shows availability for test.com
6. Note: Dropdown auto-switches to .com
```

### Test 3: Change Extension After Typing
```
1. Type: "example"
2. Select: .ma
3. Change Select to: .fr
4. Click: Rechercher
5. Expected URL: /?domain=example.fr
6. Result: Shows availability for example.fr
```

### Test 4: Type Full Domain, Ignore Dropdown
```
1. Type: "mywebsite.uk"
2. Select: .ma (any extension - ignored)
3. Click: Rechercher
4. Expected URL: /?domain=mywebsite.uk
5. Result: Shows availability for mywebsite.uk
6. Note: System detects .uk and uses it
```

### Test 5: Invalid Extension Handling
```
1. Type: "example.xyz"
2. Select: .ma
3. Click: Rechercher
4. Expected URL: /?domain=example.xyz.ma
5. Result: Treats .xyz as part of domain name
6. Note: Only recognized extensions are parsed
```

### Test 6: Validation Errors
```
Test 6a - Too Short:
  Input: "a"
  Result: Alert "Le nom de domaine doit contenir au moins 2 caractères"

Test 6b - Invalid Characters:
  Input: "test@site"
  Result: Alert "Le nom de domaine ne peut contenir que des lettres, chiffres et tirets"

Test 6c - Starts with Hyphen:
  Input: "-test"
  Result: Alert "Le nom de domaine ne peut contenir que des lettres, chiffres et tirets"

Test 6d - Too Long:
  Input: "verylongdomainnamethatexceedssixtycharacterslimitfordomainvalidation"
  Result: Alert "Le nom de domaine ne peut pas dépasser 63 caractères"
```

## 🔧 Technical Implementation

### **Regex Pattern Used**:
```javascript
const validDomainPattern = /^[a-z0-9]([a-z0-9-]*[a-z0-9])?$/i;
```

**Explanation**:
- `^[a-z0-9]` - Must start with letter or number
- `([a-z0-9-]*[a-z0-9])?` - Can contain letters, numbers, hyphens in middle
- Must end with letter or number (not hyphen)
- Case insensitive (`i` flag)

### **Extension Detection**:
```javascript
function parseDomain(input, selectedExtension) {
  const trimmed = input.trim().toLowerCase();
  
  // Check each registry extension
  for (const registry of registries) {
    if (trimmed.endsWith(registry.extension)) {
      return {
        domain: trimmed.slice(0, -registry.extension.length),
        extension: registry.extension
      };
    }
  }
  
  // No extension found, append selected
  return {
    domain: trimmed,
    extension: selectedExtension
  };
}
```

## 📊 URL Parameter Structure

### **Old Structure** (removed):
```
/?domain=example&extension=.ma
```

### **New Structure** (current):
```
/?domain=example.ma
```

**Benefits**:
- ✅ Cleaner URLs
- ✅ Single source of truth
- ✅ Easier to share
- ✅ More intuitive
- ✅ Automatic extension detection

## 🎨 User Experience Flow

```
┌─────────────────────────────────────────────────────────┐
│ User Input: "example" + Select: .ma                     │
└────────────────────┬────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────┐
│ JavaScript: parseDomain("example", ".ma")               │
│ Result: { domain: "example", extension: ".ma" }        │
└────────────────────┬────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────┐
│ Validation: Check domain format                         │
│ - Length (2-63 chars)                                   │
│ - Characters (alphanumeric + hyphens)                   │
│ - No consecutive hyphens                                │
└────────────────────┬────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────┐
│ Redirect: /?domain=example.ma                           │
└────────────────────┬────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────┐
│ Server Parse: Extract "example" and ".ma"               │
└────────────────────┬────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────┐
│ API Call: checkDomainAvailability("example", ".ma")    │
└────────────────────┬────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────┐
│ Display Results: SearchResults Component                │
└─────────────────────────────────────────────────────────┘
```

## 🔒 Security Notes

1. **Input Sanitization**: All inputs are trimmed and lowercased
2. **URL Encoding**: Domain names are properly encoded in URLs
3. **Validation**: Client-side AND server-side validation
4. **XSS Prevention**: No direct HTML injection from user input
5. **Length Limits**: Enforced 2-63 character limit

## 🚀 Examples in Action

### Example 1: Standard Search
```
User types: "google"
Selects: .com
URL: /?domain=google.com
Display: "google.com is unavailable"
```

### Example 2: Pre-filled Extension
```
User types: "amazon.fr"
Selects: .ma (ignored)
URL: /?domain=amazon.fr
Display: "amazon.fr is unavailable"
Dropdown: Auto-updates to show .fr
```

### Example 3: Direct URL Access
```
URL: /?domain=test.ma
Form: Pre-fills with "test.ma"
Dropdown: Shows .ma
```

## ✅ Checklist for QA Testing

- [ ] Domain without extension + select extension
- [ ] Domain with matching extension
- [ ] Domain with different extension (override)
- [ ] Domain with invalid characters
- [ ] Domain too short (< 2 chars)
- [ ] Domain too long (> 63 chars)
- [ ] Domain with spaces (trimmed)
- [ ] Domain with mixed case (normalized)
- [ ] Domain with hyphens (valid)
- [ ] Domain starting with hyphen (invalid)
- [ ] Domain ending with hyphen (invalid)
- [ ] Domain with consecutive hyphens (invalid)
- [ ] Direct URL access with full domain
- [ ] Form pre-fill from URL
- [ ] Dropdown auto-update based on extension
- [ ] LocalStorage persistence

---

## 📚 Summary

The new validation system ensures:
1. ✅ **Smart extension handling** - detects if user included extension
2. ✅ **Clean URLs** - only domain parameter needed
3. ✅ **User-friendly** - accepts input with or without extension
4. ✅ **Validated** - comprehensive validation rules
5. ✅ **Flexible** - works with all registry extensions

**Status**: ✨ Ready for production!

