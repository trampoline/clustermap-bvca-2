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
var G__16632__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__16631 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__16631,0,null);var body = cljs.core.nthnext.call(null,vec__16631,1);if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__16632 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__16632__delegate.call(this,args);};
G__16632.cljs$lang$maxFixedArity = 0;
G__16632.cljs$lang$applyTo = (function (arglist__16633){
var args = cljs.core.seq(arglist__16633);
return G__16632__delegate(args);
});
G__16632.cljs$core$IFn$_invoke$arity$variadic = G__16632__delegate;
return G__16632;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4117__auto__ = (function iter__16638(s__16639){return (new cljs.core.LazySeq(null,(function (){var s__16639__$1 = s__16639;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__16639__$1);if(temp__4092__auto__)
{var s__16639__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__16639__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__16639__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__16641 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__16640 = 0;while(true){
if((i__16640 < size__4116__auto__))
{var args = cljs.core._nth.call(null,c__4115__auto__,i__16640);cljs.core.chunk_append.call(null,b__16641,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)));
{
var G__16642 = (i__16640 + 1);
i__16640 = G__16642;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16641),iter__16638.call(null,cljs.core.chunk_rest.call(null,s__16639__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16641),null);
}
} else
{var args = cljs.core.first.call(null,s__16639__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)),iter__16638.call(null,cljs.core.rest.call(null,s__16639__$2)));
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
sablono.core.render = (function render(component){var html = cljs.core.atom.call(null,null);React.renderComponentToString(component,(function (p1__16643_SHARP_){return cljs.core.reset_BANG_.call(null,html,p1__16643_SHARP_);
}));
return cljs.core.deref.call(null,html);
});
/**
* Include a list of external stylesheet files.
* @param {...*} var_args
*/
sablono.core.include_css = (function() { 
var include_css__delegate = function (styles){var iter__4117__auto__ = (function iter__16648(s__16649){return (new cljs.core.LazySeq(null,(function (){var s__16649__$1 = s__16649;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__16649__$1);if(temp__4092__auto__)
{var s__16649__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__16649__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__16649__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__16651 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__16650 = 0;while(true){
if((i__16650 < size__4116__auto__))
{var style = cljs.core._nth.call(null,c__4115__auto__,i__16650);cljs.core.chunk_append.call(null,b__16651,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null));
{
var G__16652 = (i__16650 + 1);
i__16650 = G__16652;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16651),iter__16648.call(null,cljs.core.chunk_rest.call(null,s__16649__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16651),null);
}
} else
{var style = cljs.core.first.call(null,s__16649__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null),iter__16648.call(null,cljs.core.rest.call(null,s__16649__$2)));
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
include_css.cljs$lang$applyTo = (function (arglist__16653){
var styles = cljs.core.seq(arglist__16653);
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
sablono.core.link_to16654 = (function() { 
var link_to16654__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to16654 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to16654__delegate.call(this,url,content);};
link_to16654.cljs$lang$maxFixedArity = 1;
link_to16654.cljs$lang$applyTo = (function (arglist__16655){
var url = cljs.core.first(arglist__16655);
var content = cljs.core.rest(arglist__16655);
return link_to16654__delegate(url,content);
});
link_to16654.cljs$core$IFn$_invoke$arity$variadic = link_to16654__delegate;
return link_to16654;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to16654);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to16656 = (function() { 
var mail_to16656__delegate = function (e_mail,p__16657){var vec__16659 = p__16657;var content = cljs.core.nth.call(null,vec__16659,0,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__3406__auto__ = content;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to16656 = function (e_mail,var_args){
var p__16657 = null;if (arguments.length > 1) {
  p__16657 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to16656__delegate.call(this,e_mail,p__16657);};
mail_to16656.cljs$lang$maxFixedArity = 1;
mail_to16656.cljs$lang$applyTo = (function (arglist__16660){
var e_mail = cljs.core.first(arglist__16660);
var p__16657 = cljs.core.rest(arglist__16660);
return mail_to16656__delegate(e_mail,p__16657);
});
mail_to16656.cljs$core$IFn$_invoke$arity$variadic = mail_to16656__delegate;
return mail_to16656;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to16656);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list16661 = (function unordered_list16661(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(function (){var iter__4117__auto__ = (function iter__16666(s__16667){return (new cljs.core.LazySeq(null,(function (){var s__16667__$1 = s__16667;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__16667__$1);if(temp__4092__auto__)
{var s__16667__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__16667__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__16667__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__16669 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__16668 = 0;while(true){
if((i__16668 < size__4116__auto__))
{var x = cljs.core._nth.call(null,c__4115__auto__,i__16668);cljs.core.chunk_append.call(null,b__16669,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__16670 = (i__16668 + 1);
i__16668 = G__16670;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16669),iter__16666.call(null,cljs.core.chunk_rest.call(null,s__16667__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16669),null);
}
} else
{var x = cljs.core.first.call(null,s__16667__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__16666.call(null,cljs.core.rest.call(null,s__16667__$2)));
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
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list16661);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list16671 = (function ordered_list16671(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",1013907791),(function (){var iter__4117__auto__ = (function iter__16676(s__16677){return (new cljs.core.LazySeq(null,(function (){var s__16677__$1 = s__16677;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__16677__$1);if(temp__4092__auto__)
{var s__16677__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__16677__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__16677__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__16679 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__16678 = 0;while(true){
if((i__16678 < size__4116__auto__))
{var x = cljs.core._nth.call(null,c__4115__auto__,i__16678);cljs.core.chunk_append.call(null,b__16679,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__16680 = (i__16678 + 1);
i__16678 = G__16680;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16679),iter__16676.call(null,cljs.core.chunk_rest.call(null,s__16677__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16679),null);
}
} else
{var x = cljs.core.first.call(null,s__16677__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__16676.call(null,cljs.core.rest.call(null,s__16677__$2)));
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
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list16671);
/**
* Create an image element.
*/
sablono.core.image16681 = (function() {
var image16681 = null;
var image16681__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src)], null)], null);
});
var image16681__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",1014000923),alt], null)], null);
});
image16681 = function(src,alt){
switch(arguments.length){
case 1:
return image16681__1.call(this,src);
case 2:
return image16681__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image16681.cljs$core$IFn$_invoke$arity$1 = image16681__1;
image16681.cljs$core$IFn$_invoke$arity$2 = image16681__2;
return image16681;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image16681);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__16682_SHARP_,p2__16683_SHARP_){return [cljs.core.str(p1__16682_SHARP_),cljs.core.str("["),cljs.core.str(p2__16683_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__16684_SHARP_,p2__16685_SHARP_){return [cljs.core.str(p1__16684_SHARP_),cljs.core.str("-"),cljs.core.str(p2__16685_SHARP_)].join('');
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
sablono.core.hidden_field16686 = (function() {
var hidden_field16686 = null;
var hidden_field16686__1 = (function (name){return hidden_field16686.call(null,name,null);
});
var hidden_field16686__2 = (function (name,value){return sablono.core.input_field.call(null,"hidden",name,value);
});
hidden_field16686 = function(name,value){
switch(arguments.length){
case 1:
return hidden_field16686__1.call(this,name);
case 2:
return hidden_field16686__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field16686.cljs$core$IFn$_invoke$arity$1 = hidden_field16686__1;
hidden_field16686.cljs$core$IFn$_invoke$arity$2 = hidden_field16686__2;
return hidden_field16686;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field16686);
/**
* Creates a new text input field.
*/
sablono.core.text_field16687 = (function() {
var text_field16687 = null;
var text_field16687__1 = (function (name){return text_field16687.call(null,name,null);
});
var text_field16687__2 = (function (name,value){return sablono.core.input_field.call(null,"text",name,value);
});
text_field16687 = function(name,value){
switch(arguments.length){
case 1:
return text_field16687__1.call(this,name);
case 2:
return text_field16687__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field16687.cljs$core$IFn$_invoke$arity$1 = text_field16687__1;
text_field16687.cljs$core$IFn$_invoke$arity$2 = text_field16687__2;
return text_field16687;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field16687);
/**
* Creates a new password field.
*/
sablono.core.password_field16688 = (function() {
var password_field16688 = null;
var password_field16688__1 = (function (name){return password_field16688.call(null,name,null);
});
var password_field16688__2 = (function (name,value){return sablono.core.input_field.call(null,"password",name,value);
});
password_field16688 = function(name,value){
switch(arguments.length){
case 1:
return password_field16688__1.call(this,name);
case 2:
return password_field16688__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field16688.cljs$core$IFn$_invoke$arity$1 = password_field16688__1;
password_field16688.cljs$core$IFn$_invoke$arity$2 = password_field16688__2;
return password_field16688;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field16688);
/**
* Creates a new email input field.
*/
sablono.core.email_field16689 = (function() {
var email_field16689 = null;
var email_field16689__1 = (function (name){return email_field16689.call(null,name,null);
});
var email_field16689__2 = (function (name,value){return sablono.core.input_field.call(null,"email",name,value);
});
email_field16689 = function(name,value){
switch(arguments.length){
case 1:
return email_field16689__1.call(this,name);
case 2:
return email_field16689__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field16689.cljs$core$IFn$_invoke$arity$1 = email_field16689__1;
email_field16689.cljs$core$IFn$_invoke$arity$2 = email_field16689__2;
return email_field16689;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field16689);
/**
* Creates a check box.
*/
sablono.core.check_box16690 = (function() {
var check_box16690 = null;
var check_box16690__1 = (function (name){return check_box16690.call(null,name,null);
});
var check_box16690__2 = (function (name,checked_QMARK_){return check_box16690.call(null,name,checked_QMARK_,"true");
});
var check_box16690__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"checkbox",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
check_box16690 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box16690__1.call(this,name);
case 2:
return check_box16690__2.call(this,name,checked_QMARK_);
case 3:
return check_box16690__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box16690.cljs$core$IFn$_invoke$arity$1 = check_box16690__1;
check_box16690.cljs$core$IFn$_invoke$arity$2 = check_box16690__2;
check_box16690.cljs$core$IFn$_invoke$arity$3 = check_box16690__3;
return check_box16690;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box16690);
/**
* Creates a radio button.
*/
sablono.core.radio_button16691 = (function() {
var radio_button16691 = null;
var radio_button16691__1 = (function (group){return radio_button16691.call(null,group,null);
});
var radio_button16691__2 = (function (group,checked_QMARK_){return radio_button16691.call(null,group,checked_QMARK_,"true");
});
var radio_button16691__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"radio",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
radio_button16691 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button16691__1.call(this,group);
case 2:
return radio_button16691__2.call(this,group,checked_QMARK_);
case 3:
return radio_button16691__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button16691.cljs$core$IFn$_invoke$arity$1 = radio_button16691__1;
radio_button16691.cljs$core$IFn$_invoke$arity$2 = radio_button16691__2;
radio_button16691.cljs$core$IFn$_invoke$arity$3 = radio_button16691__3;
return radio_button16691;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button16691);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options16692 = (function() {
var select_options16692 = null;
var select_options16692__1 = (function (coll){return select_options16692.call(null,coll,null);
});
var select_options16692__2 = (function (coll,selected){var iter__4117__auto__ = (function iter__16701(s__16702){return (new cljs.core.LazySeq(null,(function (){var s__16702__$1 = s__16702;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__16702__$1);if(temp__4092__auto__)
{var s__16702__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__16702__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__16702__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__16704 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__16703 = 0;while(true){
if((i__16703 < size__4116__auto__))
{var x = cljs.core._nth.call(null,c__4115__auto__,i__16703);cljs.core.chunk_append.call(null,b__16704,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__16707 = x;var text = cljs.core.nth.call(null,vec__16707,0,null);var val = cljs.core.nth.call(null,vec__16707,1,null);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options16692.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__16709 = (i__16703 + 1);
i__16703 = G__16709;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16704),iter__16701.call(null,cljs.core.chunk_rest.call(null,s__16702__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16704),null);
}
} else
{var x = cljs.core.first.call(null,s__16702__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__16708 = x;var text = cljs.core.nth.call(null,vec__16708,0,null);var val = cljs.core.nth.call(null,vec__16708,1,null);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options16692.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__16701.call(null,cljs.core.rest.call(null,s__16702__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__.call(null,coll);
});
select_options16692 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options16692__1.call(this,coll);
case 2:
return select_options16692__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options16692.cljs$core$IFn$_invoke$arity$1 = select_options16692__1;
select_options16692.cljs$core$IFn$_invoke$arity$2 = select_options16692__2;
return select_options16692;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options16692);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down16710 = (function() {
var drop_down16710 = null;
var drop_down16710__2 = (function (name,options){return drop_down16710.call(null,name,options,null);
});
var drop_down16710__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down16710 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down16710__2.call(this,name,options);
case 3:
return drop_down16710__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down16710.cljs$core$IFn$_invoke$arity$2 = drop_down16710__2;
drop_down16710.cljs$core$IFn$_invoke$arity$3 = drop_down16710__3;
return drop_down16710;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down16710);
/**
* Creates a text area element.
*/
sablono.core.text_area16711 = (function() {
var text_area16711 = null;
var text_area16711__1 = (function (name){return text_area16711.call(null,name,null);
});
var text_area16711__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",4305627820),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value], null)], null);
});
text_area16711 = function(name,value){
switch(arguments.length){
case 1:
return text_area16711__1.call(this,name);
case 2:
return text_area16711__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area16711.cljs$core$IFn$_invoke$arity$1 = text_area16711__1;
text_area16711.cljs$core$IFn$_invoke$arity$2 = text_area16711__2;
return text_area16711;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area16711);
/**
* Creates a file upload input.
*/
sablono.core.file_upload16712 = (function file_upload16712(name){return sablono.core.input_field.call(null,"file",name,null);
});
sablono.core.file_upload = sablono.core.wrap_attrs.call(null,sablono.core.file_upload16712);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label16713 = (function label16713(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1116631654),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",2249940112),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label16713);
/**
* Creates a submit button.
*/
sablono.core.submit_button16714 = (function submit_button16714(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"submit",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button16714);
/**
* Creates a form reset button.
*/
sablono.core.reset_button16715 = (function reset_button16715(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"reset",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button16715);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to16716 = (function() { 
var form_to16716__delegate = function (p__16717,body){var vec__16719 = p__16717;var method = cljs.core.nth.call(null,vec__16719,0,null);var action = cljs.core.nth.call(null,vec__16719,1,null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1014006472),null,new cljs.core.Keyword(null,"post","post",1017351186),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),method_str,new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),"POST",new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to16716 = function (p__16717,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to16716__delegate.call(this,p__16717,body);};
form_to16716.cljs$lang$maxFixedArity = 1;
form_to16716.cljs$lang$applyTo = (function (arglist__16720){
var p__16717 = cljs.core.first(arglist__16720);
var body = cljs.core.rest(arglist__16720);
return form_to16716__delegate(p__16717,body);
});
form_to16716.cljs$core$IFn$_invoke$arity$variadic = form_to16716__delegate;
return form_to16716;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to16716);

//# sourceMappingURL=core.js.map