// Compiled by ClojureScript 0.0-2138
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('clojure.string');
goog.require('sablono.util');
goog.require('goog.dom');
goog.require('goog.dom');
goog.require('sablono.interpreter');
goog.require('sablono.interpreter');
goog.require('sablono.util');
goog.require('clojure.walk');
goog.require('clojure.string');
/**
* Add an optional attribute argument to a function that returns a element vector.
*/
sablono.core.wrap_attrs = (function wrap_attrs(func){return (function() { 
var G__36224__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__36223 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__36223,0,null);var body = cljs.core.nthnext.call(null,vec__36223,1);if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__36224 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__36224__delegate.call(this,args);};
G__36224.cljs$lang$maxFixedArity = 0;
G__36224.cljs$lang$applyTo = (function (arglist__36225){
var args = cljs.core.seq(arglist__36225);
return G__36224__delegate(args);
});
G__36224.cljs$core$IFn$_invoke$arity$variadic = G__36224__delegate;
return G__36224;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4117__auto__ = (function iter__36230(s__36231){return (new cljs.core.LazySeq(null,(function (){var s__36231__$1 = s__36231;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__36231__$1);if(temp__4092__auto__)
{var s__36231__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__36231__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__36231__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__36233 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__36232 = 0;while(true){
if((i__36232 < size__4116__auto__))
{var args = cljs.core._nth.call(null,c__4115__auto__,i__36232);cljs.core.chunk_append.call(null,b__36233,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)));
{
var G__36234 = (i__36232 + 1);
i__36232 = G__36234;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36233),iter__36230.call(null,cljs.core.chunk_rest.call(null,s__36231__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36233),null);
}
} else
{var args = cljs.core.first.call(null,s__36231__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)),iter__36230.call(null,cljs.core.rest.call(null,s__36231__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__.call(null,arglists);
});
/**
* Render the React `component` as an HTML string.
*/
sablono.core.render = (function render(component){var html = cljs.core.atom.call(null,null);React.renderComponentToString(component,(function (p1__36235_SHARP_){return cljs.core.reset_BANG_.call(null,html,p1__36235_SHARP_);
}));
return cljs.core.deref.call(null,html);
});
/**
* Include a list of external stylesheet files.
* @param {...*} var_args
*/
sablono.core.include_css = (function() { 
var include_css__delegate = function (styles){var iter__4117__auto__ = (function iter__36240(s__36241){return (new cljs.core.LazySeq(null,(function (){var s__36241__$1 = s__36241;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__36241__$1);if(temp__4092__auto__)
{var s__36241__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__36241__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__36241__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__36243 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__36242 = 0;while(true){
if((i__36242 < size__4116__auto__))
{var style = cljs.core._nth.call(null,c__4115__auto__,i__36242);cljs.core.chunk_append.call(null,b__36243,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null));
{
var G__36244 = (i__36242 + 1);
i__36242 = G__36244;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36243),iter__36240.call(null,cljs.core.chunk_rest.call(null,s__36241__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36243),null);
}
} else
{var style = cljs.core.first.call(null,s__36241__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null),iter__36240.call(null,cljs.core.rest.call(null,s__36241__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__.call(null,styles);
};
var include_css = function (var_args){
var styles = null;if (arguments.length > 0) {
  styles = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return include_css__delegate.call(this,styles);};
include_css.cljs$lang$maxFixedArity = 0;
include_css.cljs$lang$applyTo = (function (arglist__36245){
var styles = cljs.core.seq(arglist__36245);
return include_css__delegate(styles);
});
include_css.cljs$core$IFn$_invoke$arity$variadic = include_css__delegate;
return include_css;
})()
;
/**
* Include the JavaScript library at `src`.
*/
sablono.core.include_js = (function include_js(src){return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",{"src": src}));
});
/**
* Include Facebook's React JavaScript library.
*/
sablono.core.include_react = (function include_react(){return sablono.core.include_js.call(null,"http://fb.me/react-0.8.0.js");
});
/**
* Wraps some content in a HTML hyperlink with the supplied URL.
* @param {...*} var_args
*/
sablono.core.link_to36246 = (function() { 
var link_to36246__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to36246 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to36246__delegate.call(this,url,content);};
link_to36246.cljs$lang$maxFixedArity = 1;
link_to36246.cljs$lang$applyTo = (function (arglist__36247){
var url = cljs.core.first(arglist__36247);
var content = cljs.core.rest(arglist__36247);
return link_to36246__delegate(url,content);
});
link_to36246.cljs$core$IFn$_invoke$arity$variadic = link_to36246__delegate;
return link_to36246;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to36246);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to36248 = (function() { 
var mail_to36248__delegate = function (e_mail,p__36249){var vec__36251 = p__36249;var content = cljs.core.nth.call(null,vec__36251,0,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__3406__auto__ = content;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to36248 = function (e_mail,var_args){
var p__36249 = null;if (arguments.length > 1) {
  p__36249 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to36248__delegate.call(this,e_mail,p__36249);};
mail_to36248.cljs$lang$maxFixedArity = 1;
mail_to36248.cljs$lang$applyTo = (function (arglist__36252){
var e_mail = cljs.core.first(arglist__36252);
var p__36249 = cljs.core.rest(arglist__36252);
return mail_to36248__delegate(e_mail,p__36249);
});
mail_to36248.cljs$core$IFn$_invoke$arity$variadic = mail_to36248__delegate;
return mail_to36248;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to36248);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list36253 = (function unordered_list36253(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(function (){var iter__4117__auto__ = (function iter__36258(s__36259){return (new cljs.core.LazySeq(null,(function (){var s__36259__$1 = s__36259;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__36259__$1);if(temp__4092__auto__)
{var s__36259__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__36259__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__36259__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__36261 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__36260 = 0;while(true){
if((i__36260 < size__4116__auto__))
{var x = cljs.core._nth.call(null,c__4115__auto__,i__36260);cljs.core.chunk_append.call(null,b__36261,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__36262 = (i__36260 + 1);
i__36260 = G__36262;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36261),iter__36258.call(null,cljs.core.chunk_rest.call(null,s__36259__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36261),null);
}
} else
{var x = cljs.core.first.call(null,s__36259__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__36258.call(null,cljs.core.rest.call(null,s__36259__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__.call(null,coll);
})()], null);
});
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list36253);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list36263 = (function ordered_list36263(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",1013907791),(function (){var iter__4117__auto__ = (function iter__36268(s__36269){return (new cljs.core.LazySeq(null,(function (){var s__36269__$1 = s__36269;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__36269__$1);if(temp__4092__auto__)
{var s__36269__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__36269__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__36269__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__36271 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__36270 = 0;while(true){
if((i__36270 < size__4116__auto__))
{var x = cljs.core._nth.call(null,c__4115__auto__,i__36270);cljs.core.chunk_append.call(null,b__36271,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__36272 = (i__36270 + 1);
i__36270 = G__36272;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36271),iter__36268.call(null,cljs.core.chunk_rest.call(null,s__36269__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36271),null);
}
} else
{var x = cljs.core.first.call(null,s__36269__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__36268.call(null,cljs.core.rest.call(null,s__36269__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__.call(null,coll);
})()], null);
});
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list36263);
/**
* Create an image element.
*/
sablono.core.image36273 = (function() {
var image36273 = null;
var image36273__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src)], null)], null);
});
var image36273__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",1014000923),alt], null)], null);
});
image36273 = function(src,alt){
switch(arguments.length){
case 1:
return image36273__1.call(this,src);
case 2:
return image36273__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image36273.cljs$core$IFn$_invoke$arity$1 = image36273__1;
image36273.cljs$core$IFn$_invoke$arity$2 = image36273__2;
return image36273;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image36273);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__36274_SHARP_,p2__36275_SHARP_){return [cljs.core.str(p1__36274_SHARP_),cljs.core.str("["),cljs.core.str(p2__36275_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__36276_SHARP_,p2__36277_SHARP_){return [cljs.core.str(p1__36276_SHARP_),cljs.core.str("-"),cljs.core.str(p2__36277_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Creates a new <input> element.
*/
sablono.core.input_field = (function input_field(type,name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1017479852),type,new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value], null)], null);
});
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field36278 = (function() {
var hidden_field36278 = null;
var hidden_field36278__1 = (function (name){return hidden_field36278.call(null,name,null);
});
var hidden_field36278__2 = (function (name,value){return sablono.core.input_field.call(null,"hidden",name,value);
});
hidden_field36278 = function(name,value){
switch(arguments.length){
case 1:
return hidden_field36278__1.call(this,name);
case 2:
return hidden_field36278__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field36278.cljs$core$IFn$_invoke$arity$1 = hidden_field36278__1;
hidden_field36278.cljs$core$IFn$_invoke$arity$2 = hidden_field36278__2;
return hidden_field36278;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field36278);
/**
* Creates a new text input field.
*/
sablono.core.text_field36279 = (function() {
var text_field36279 = null;
var text_field36279__1 = (function (name){return text_field36279.call(null,name,null);
});
var text_field36279__2 = (function (name,value){return sablono.core.input_field.call(null,"text",name,value);
});
text_field36279 = function(name,value){
switch(arguments.length){
case 1:
return text_field36279__1.call(this,name);
case 2:
return text_field36279__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field36279.cljs$core$IFn$_invoke$arity$1 = text_field36279__1;
text_field36279.cljs$core$IFn$_invoke$arity$2 = text_field36279__2;
return text_field36279;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field36279);
/**
* Creates a new password field.
*/
sablono.core.password_field36280 = (function() {
var password_field36280 = null;
var password_field36280__1 = (function (name){return password_field36280.call(null,name,null);
});
var password_field36280__2 = (function (name,value){return sablono.core.input_field.call(null,"password",name,value);
});
password_field36280 = function(name,value){
switch(arguments.length){
case 1:
return password_field36280__1.call(this,name);
case 2:
return password_field36280__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field36280.cljs$core$IFn$_invoke$arity$1 = password_field36280__1;
password_field36280.cljs$core$IFn$_invoke$arity$2 = password_field36280__2;
return password_field36280;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field36280);
/**
* Creates a new email input field.
*/
sablono.core.email_field36281 = (function() {
var email_field36281 = null;
var email_field36281__1 = (function (name){return email_field36281.call(null,name,null);
});
var email_field36281__2 = (function (name,value){return sablono.core.input_field.call(null,"email",name,value);
});
email_field36281 = function(name,value){
switch(arguments.length){
case 1:
return email_field36281__1.call(this,name);
case 2:
return email_field36281__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field36281.cljs$core$IFn$_invoke$arity$1 = email_field36281__1;
email_field36281.cljs$core$IFn$_invoke$arity$2 = email_field36281__2;
return email_field36281;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field36281);
/**
* Creates a check box.
*/
sablono.core.check_box36282 = (function() {
var check_box36282 = null;
var check_box36282__1 = (function (name){return check_box36282.call(null,name,null);
});
var check_box36282__2 = (function (name,checked_QMARK_){return check_box36282.call(null,name,checked_QMARK_,"true");
});
var check_box36282__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"checkbox",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
check_box36282 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box36282__1.call(this,name);
case 2:
return check_box36282__2.call(this,name,checked_QMARK_);
case 3:
return check_box36282__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box36282.cljs$core$IFn$_invoke$arity$1 = check_box36282__1;
check_box36282.cljs$core$IFn$_invoke$arity$2 = check_box36282__2;
check_box36282.cljs$core$IFn$_invoke$arity$3 = check_box36282__3;
return check_box36282;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box36282);
/**
* Creates a radio button.
*/
sablono.core.radio_button36283 = (function() {
var radio_button36283 = null;
var radio_button36283__1 = (function (group){return radio_button36283.call(null,group,null);
});
var radio_button36283__2 = (function (group,checked_QMARK_){return radio_button36283.call(null,group,checked_QMARK_,"true");
});
var radio_button36283__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"radio",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
radio_button36283 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button36283__1.call(this,group);
case 2:
return radio_button36283__2.call(this,group,checked_QMARK_);
case 3:
return radio_button36283__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button36283.cljs$core$IFn$_invoke$arity$1 = radio_button36283__1;
radio_button36283.cljs$core$IFn$_invoke$arity$2 = radio_button36283__2;
radio_button36283.cljs$core$IFn$_invoke$arity$3 = radio_button36283__3;
return radio_button36283;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button36283);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options36284 = (function() {
var select_options36284 = null;
var select_options36284__1 = (function (coll){return select_options36284.call(null,coll,null);
});
var select_options36284__2 = (function (coll,selected){var iter__4117__auto__ = (function iter__36293(s__36294){return (new cljs.core.LazySeq(null,(function (){var s__36294__$1 = s__36294;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__36294__$1);if(temp__4092__auto__)
{var s__36294__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__36294__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__36294__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__36296 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__36295 = 0;while(true){
if((i__36295 < size__4116__auto__))
{var x = cljs.core._nth.call(null,c__4115__auto__,i__36295);cljs.core.chunk_append.call(null,b__36296,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__36299 = x;var text = cljs.core.nth.call(null,vec__36299,0,null);var val = cljs.core.nth.call(null,vec__36299,1,null);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options36284.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__36301 = (i__36295 + 1);
i__36295 = G__36301;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36296),iter__36293.call(null,cljs.core.chunk_rest.call(null,s__36294__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36296),null);
}
} else
{var x = cljs.core.first.call(null,s__36294__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__36300 = x;var text = cljs.core.nth.call(null,vec__36300,0,null);var val = cljs.core.nth.call(null,vec__36300,1,null);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options36284.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__36293.call(null,cljs.core.rest.call(null,s__36294__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__.call(null,coll);
});
select_options36284 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options36284__1.call(this,coll);
case 2:
return select_options36284__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options36284.cljs$core$IFn$_invoke$arity$1 = select_options36284__1;
select_options36284.cljs$core$IFn$_invoke$arity$2 = select_options36284__2;
return select_options36284;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options36284);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down36302 = (function() {
var drop_down36302 = null;
var drop_down36302__2 = (function (name,options){return drop_down36302.call(null,name,options,null);
});
var drop_down36302__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down36302 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down36302__2.call(this,name,options);
case 3:
return drop_down36302__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down36302.cljs$core$IFn$_invoke$arity$2 = drop_down36302__2;
drop_down36302.cljs$core$IFn$_invoke$arity$3 = drop_down36302__3;
return drop_down36302;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down36302);
/**
* Creates a text area element.
*/
sablono.core.text_area36303 = (function() {
var text_area36303 = null;
var text_area36303__1 = (function (name){return text_area36303.call(null,name,null);
});
var text_area36303__2 = (function (name,value){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",4305627820),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),sablono.util.as_str.call(null,value)], null),sablono.util.as_str.call(null,value)], null);
});
text_area36303 = function(name,value){
switch(arguments.length){
case 1:
return text_area36303__1.call(this,name);
case 2:
return text_area36303__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area36303.cljs$core$IFn$_invoke$arity$1 = text_area36303__1;
text_area36303.cljs$core$IFn$_invoke$arity$2 = text_area36303__2;
return text_area36303;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area36303);
/**
* Creates a file upload input.
*/
sablono.core.file_upload36304 = (function file_upload36304(name){return sablono.core.input_field.call(null,"file",name,null);
});
sablono.core.file_upload = sablono.core.wrap_attrs.call(null,sablono.core.file_upload36304);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label36305 = (function label36305(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1116631654),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",2249940112),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label36305);
/**
* Creates a submit button.
*/
sablono.core.submit_button36306 = (function submit_button36306(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"submit",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button36306);
/**
* Creates a form reset button.
*/
sablono.core.reset_button36307 = (function reset_button36307(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"reset",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button36307);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to36308 = (function() { 
var form_to36308__delegate = function (p__36309,body){var vec__36311 = p__36309;var method = cljs.core.nth.call(null,vec__36311,0,null);var action = cljs.core.nth.call(null,vec__36311,1,null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1014006472),null,new cljs.core.Keyword(null,"post","post",1017351186),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),method_str,new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),"POST",new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to36308 = function (p__36309,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to36308__delegate.call(this,p__36309,body);};
form_to36308.cljs$lang$maxFixedArity = 1;
form_to36308.cljs$lang$applyTo = (function (arglist__36312){
var p__36309 = cljs.core.first(arglist__36312);
var body = cljs.core.rest(arglist__36312);
return form_to36308__delegate(p__36309,body);
});
form_to36308.cljs$core$IFn$_invoke$arity$variadic = form_to36308__delegate;
return form_to36308;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to36308);
