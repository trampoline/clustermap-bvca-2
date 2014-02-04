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
var G__36287__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__36286 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__36286,0,null);var body = cljs.core.nthnext.call(null,vec__36286,1);if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__36287 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__36287__delegate.call(this,args);};
G__36287.cljs$lang$maxFixedArity = 0;
G__36287.cljs$lang$applyTo = (function (arglist__36288){
var args = cljs.core.seq(arglist__36288);
return G__36287__delegate(args);
});
G__36287.cljs$core$IFn$_invoke$arity$variadic = G__36287__delegate;
return G__36287;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4117__auto__ = (function iter__36293(s__36294){return (new cljs.core.LazySeq(null,(function (){var s__36294__$1 = s__36294;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__36294__$1);if(temp__4092__auto__)
{var s__36294__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__36294__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__36294__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__36296 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__36295 = 0;while(true){
if((i__36295 < size__4116__auto__))
{var args = cljs.core._nth.call(null,c__4115__auto__,i__36295);cljs.core.chunk_append.call(null,b__36296,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)));
{
var G__36297 = (i__36295 + 1);
i__36295 = G__36297;
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
{var args = cljs.core.first.call(null,s__36294__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)),iter__36293.call(null,cljs.core.rest.call(null,s__36294__$2)));
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
sablono.core.render = (function render(component){var html = cljs.core.atom.call(null,null);React.renderComponentToString(component,(function (p1__36298_SHARP_){return cljs.core.reset_BANG_.call(null,html,p1__36298_SHARP_);
}));
return cljs.core.deref.call(null,html);
});
/**
* Include a list of external stylesheet files.
* @param {...*} var_args
*/
sablono.core.include_css = (function() { 
var include_css__delegate = function (styles){var iter__4117__auto__ = (function iter__36303(s__36304){return (new cljs.core.LazySeq(null,(function (){var s__36304__$1 = s__36304;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__36304__$1);if(temp__4092__auto__)
{var s__36304__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__36304__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__36304__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__36306 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__36305 = 0;while(true){
if((i__36305 < size__4116__auto__))
{var style = cljs.core._nth.call(null,c__4115__auto__,i__36305);cljs.core.chunk_append.call(null,b__36306,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null));
{
var G__36307 = (i__36305 + 1);
i__36305 = G__36307;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36306),iter__36303.call(null,cljs.core.chunk_rest.call(null,s__36304__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36306),null);
}
} else
{var style = cljs.core.first.call(null,s__36304__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null),iter__36303.call(null,cljs.core.rest.call(null,s__36304__$2)));
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
include_css.cljs$lang$applyTo = (function (arglist__36308){
var styles = cljs.core.seq(arglist__36308);
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
sablono.core.link_to36309 = (function() { 
var link_to36309__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to36309 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to36309__delegate.call(this,url,content);};
link_to36309.cljs$lang$maxFixedArity = 1;
link_to36309.cljs$lang$applyTo = (function (arglist__36310){
var url = cljs.core.first(arglist__36310);
var content = cljs.core.rest(arglist__36310);
return link_to36309__delegate(url,content);
});
link_to36309.cljs$core$IFn$_invoke$arity$variadic = link_to36309__delegate;
return link_to36309;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to36309);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to36311 = (function() { 
var mail_to36311__delegate = function (e_mail,p__36312){var vec__36314 = p__36312;var content = cljs.core.nth.call(null,vec__36314,0,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__3406__auto__ = content;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to36311 = function (e_mail,var_args){
var p__36312 = null;if (arguments.length > 1) {
  p__36312 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to36311__delegate.call(this,e_mail,p__36312);};
mail_to36311.cljs$lang$maxFixedArity = 1;
mail_to36311.cljs$lang$applyTo = (function (arglist__36315){
var e_mail = cljs.core.first(arglist__36315);
var p__36312 = cljs.core.rest(arglist__36315);
return mail_to36311__delegate(e_mail,p__36312);
});
mail_to36311.cljs$core$IFn$_invoke$arity$variadic = mail_to36311__delegate;
return mail_to36311;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to36311);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list36316 = (function unordered_list36316(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(function (){var iter__4117__auto__ = (function iter__36321(s__36322){return (new cljs.core.LazySeq(null,(function (){var s__36322__$1 = s__36322;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__36322__$1);if(temp__4092__auto__)
{var s__36322__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__36322__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__36322__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__36324 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__36323 = 0;while(true){
if((i__36323 < size__4116__auto__))
{var x = cljs.core._nth.call(null,c__4115__auto__,i__36323);cljs.core.chunk_append.call(null,b__36324,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__36325 = (i__36323 + 1);
i__36323 = G__36325;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36324),iter__36321.call(null,cljs.core.chunk_rest.call(null,s__36322__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36324),null);
}
} else
{var x = cljs.core.first.call(null,s__36322__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__36321.call(null,cljs.core.rest.call(null,s__36322__$2)));
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
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list36316);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list36326 = (function ordered_list36326(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",1013907791),(function (){var iter__4117__auto__ = (function iter__36331(s__36332){return (new cljs.core.LazySeq(null,(function (){var s__36332__$1 = s__36332;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__36332__$1);if(temp__4092__auto__)
{var s__36332__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__36332__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__36332__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__36334 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__36333 = 0;while(true){
if((i__36333 < size__4116__auto__))
{var x = cljs.core._nth.call(null,c__4115__auto__,i__36333);cljs.core.chunk_append.call(null,b__36334,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__36335 = (i__36333 + 1);
i__36333 = G__36335;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36334),iter__36331.call(null,cljs.core.chunk_rest.call(null,s__36332__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36334),null);
}
} else
{var x = cljs.core.first.call(null,s__36332__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__36331.call(null,cljs.core.rest.call(null,s__36332__$2)));
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
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list36326);
/**
* Create an image element.
*/
sablono.core.image36336 = (function() {
var image36336 = null;
var image36336__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src)], null)], null);
});
var image36336__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",1014000923),alt], null)], null);
});
image36336 = function(src,alt){
switch(arguments.length){
case 1:
return image36336__1.call(this,src);
case 2:
return image36336__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image36336.cljs$core$IFn$_invoke$arity$1 = image36336__1;
image36336.cljs$core$IFn$_invoke$arity$2 = image36336__2;
return image36336;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image36336);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__36337_SHARP_,p2__36338_SHARP_){return [cljs.core.str(p1__36337_SHARP_),cljs.core.str("["),cljs.core.str(p2__36338_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__36339_SHARP_,p2__36340_SHARP_){return [cljs.core.str(p1__36339_SHARP_),cljs.core.str("-"),cljs.core.str(p2__36340_SHARP_)].join('');
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
sablono.core.hidden_field36341 = (function() {
var hidden_field36341 = null;
var hidden_field36341__1 = (function (name){return hidden_field36341.call(null,name,null);
});
var hidden_field36341__2 = (function (name,value){return sablono.core.input_field.call(null,"hidden",name,value);
});
hidden_field36341 = function(name,value){
switch(arguments.length){
case 1:
return hidden_field36341__1.call(this,name);
case 2:
return hidden_field36341__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field36341.cljs$core$IFn$_invoke$arity$1 = hidden_field36341__1;
hidden_field36341.cljs$core$IFn$_invoke$arity$2 = hidden_field36341__2;
return hidden_field36341;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field36341);
/**
* Creates a new text input field.
*/
sablono.core.text_field36342 = (function() {
var text_field36342 = null;
var text_field36342__1 = (function (name){return text_field36342.call(null,name,null);
});
var text_field36342__2 = (function (name,value){return sablono.core.input_field.call(null,"text",name,value);
});
text_field36342 = function(name,value){
switch(arguments.length){
case 1:
return text_field36342__1.call(this,name);
case 2:
return text_field36342__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field36342.cljs$core$IFn$_invoke$arity$1 = text_field36342__1;
text_field36342.cljs$core$IFn$_invoke$arity$2 = text_field36342__2;
return text_field36342;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field36342);
/**
* Creates a new password field.
*/
sablono.core.password_field36343 = (function() {
var password_field36343 = null;
var password_field36343__1 = (function (name){return password_field36343.call(null,name,null);
});
var password_field36343__2 = (function (name,value){return sablono.core.input_field.call(null,"password",name,value);
});
password_field36343 = function(name,value){
switch(arguments.length){
case 1:
return password_field36343__1.call(this,name);
case 2:
return password_field36343__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field36343.cljs$core$IFn$_invoke$arity$1 = password_field36343__1;
password_field36343.cljs$core$IFn$_invoke$arity$2 = password_field36343__2;
return password_field36343;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field36343);
/**
* Creates a new email input field.
*/
sablono.core.email_field36344 = (function() {
var email_field36344 = null;
var email_field36344__1 = (function (name){return email_field36344.call(null,name,null);
});
var email_field36344__2 = (function (name,value){return sablono.core.input_field.call(null,"email",name,value);
});
email_field36344 = function(name,value){
switch(arguments.length){
case 1:
return email_field36344__1.call(this,name);
case 2:
return email_field36344__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field36344.cljs$core$IFn$_invoke$arity$1 = email_field36344__1;
email_field36344.cljs$core$IFn$_invoke$arity$2 = email_field36344__2;
return email_field36344;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field36344);
/**
* Creates a check box.
*/
sablono.core.check_box36345 = (function() {
var check_box36345 = null;
var check_box36345__1 = (function (name){return check_box36345.call(null,name,null);
});
var check_box36345__2 = (function (name,checked_QMARK_){return check_box36345.call(null,name,checked_QMARK_,"true");
});
var check_box36345__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"checkbox",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
check_box36345 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box36345__1.call(this,name);
case 2:
return check_box36345__2.call(this,name,checked_QMARK_);
case 3:
return check_box36345__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box36345.cljs$core$IFn$_invoke$arity$1 = check_box36345__1;
check_box36345.cljs$core$IFn$_invoke$arity$2 = check_box36345__2;
check_box36345.cljs$core$IFn$_invoke$arity$3 = check_box36345__3;
return check_box36345;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box36345);
/**
* Creates a radio button.
*/
sablono.core.radio_button36346 = (function() {
var radio_button36346 = null;
var radio_button36346__1 = (function (group){return radio_button36346.call(null,group,null);
});
var radio_button36346__2 = (function (group,checked_QMARK_){return radio_button36346.call(null,group,checked_QMARK_,"true");
});
var radio_button36346__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"radio",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
radio_button36346 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button36346__1.call(this,group);
case 2:
return radio_button36346__2.call(this,group,checked_QMARK_);
case 3:
return radio_button36346__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button36346.cljs$core$IFn$_invoke$arity$1 = radio_button36346__1;
radio_button36346.cljs$core$IFn$_invoke$arity$2 = radio_button36346__2;
radio_button36346.cljs$core$IFn$_invoke$arity$3 = radio_button36346__3;
return radio_button36346;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button36346);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options36347 = (function() {
var select_options36347 = null;
var select_options36347__1 = (function (coll){return select_options36347.call(null,coll,null);
});
var select_options36347__2 = (function (coll,selected){var iter__4117__auto__ = (function iter__36356(s__36357){return (new cljs.core.LazySeq(null,(function (){var s__36357__$1 = s__36357;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__36357__$1);if(temp__4092__auto__)
{var s__36357__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__36357__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__36357__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__36359 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__36358 = 0;while(true){
if((i__36358 < size__4116__auto__))
{var x = cljs.core._nth.call(null,c__4115__auto__,i__36358);cljs.core.chunk_append.call(null,b__36359,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__36362 = x;var text = cljs.core.nth.call(null,vec__36362,0,null);var val = cljs.core.nth.call(null,vec__36362,1,null);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options36347.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__36364 = (i__36358 + 1);
i__36358 = G__36364;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36359),iter__36356.call(null,cljs.core.chunk_rest.call(null,s__36357__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36359),null);
}
} else
{var x = cljs.core.first.call(null,s__36357__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__36363 = x;var text = cljs.core.nth.call(null,vec__36363,0,null);var val = cljs.core.nth.call(null,vec__36363,1,null);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options36347.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__36356.call(null,cljs.core.rest.call(null,s__36357__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__.call(null,coll);
});
select_options36347 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options36347__1.call(this,coll);
case 2:
return select_options36347__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options36347.cljs$core$IFn$_invoke$arity$1 = select_options36347__1;
select_options36347.cljs$core$IFn$_invoke$arity$2 = select_options36347__2;
return select_options36347;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options36347);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down36365 = (function() {
var drop_down36365 = null;
var drop_down36365__2 = (function (name,options){return drop_down36365.call(null,name,options,null);
});
var drop_down36365__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down36365 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down36365__2.call(this,name,options);
case 3:
return drop_down36365__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down36365.cljs$core$IFn$_invoke$arity$2 = drop_down36365__2;
drop_down36365.cljs$core$IFn$_invoke$arity$3 = drop_down36365__3;
return drop_down36365;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down36365);
/**
* Creates a text area element.
*/
sablono.core.text_area36366 = (function() {
var text_area36366 = null;
var text_area36366__1 = (function (name){return text_area36366.call(null,name,null);
});
var text_area36366__2 = (function (name,value){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",4305627820),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),sablono.util.as_str.call(null,value)], null),sablono.util.as_str.call(null,value)], null);
});
text_area36366 = function(name,value){
switch(arguments.length){
case 1:
return text_area36366__1.call(this,name);
case 2:
return text_area36366__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area36366.cljs$core$IFn$_invoke$arity$1 = text_area36366__1;
text_area36366.cljs$core$IFn$_invoke$arity$2 = text_area36366__2;
return text_area36366;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area36366);
/**
* Creates a file upload input.
*/
sablono.core.file_upload36367 = (function file_upload36367(name){return sablono.core.input_field.call(null,"file",name,null);
});
sablono.core.file_upload = sablono.core.wrap_attrs.call(null,sablono.core.file_upload36367);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label36368 = (function label36368(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1116631654),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",2249940112),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label36368);
/**
* Creates a submit button.
*/
sablono.core.submit_button36369 = (function submit_button36369(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"submit",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button36369);
/**
* Creates a form reset button.
*/
sablono.core.reset_button36370 = (function reset_button36370(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"reset",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button36370);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to36371 = (function() { 
var form_to36371__delegate = function (p__36372,body){var vec__36374 = p__36372;var method = cljs.core.nth.call(null,vec__36374,0,null);var action = cljs.core.nth.call(null,vec__36374,1,null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1014006472),null,new cljs.core.Keyword(null,"post","post",1017351186),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),method_str,new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),"POST",new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to36371 = function (p__36372,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to36371__delegate.call(this,p__36372,body);};
form_to36371.cljs$lang$maxFixedArity = 1;
form_to36371.cljs$lang$applyTo = (function (arglist__36375){
var p__36372 = cljs.core.first(arglist__36375);
var body = cljs.core.rest(arglist__36375);
return form_to36371__delegate(p__36372,body);
});
form_to36371.cljs$core$IFn$_invoke$arity$variadic = form_to36371__delegate;
return form_to36371;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to36371);
