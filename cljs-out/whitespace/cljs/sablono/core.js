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
var G__38588__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__38587 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__38587,0,null);var body = cljs.core.nthnext.call(null,vec__38587,1);if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__38588 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__38588__delegate.call(this,args);};
G__38588.cljs$lang$maxFixedArity = 0;
G__38588.cljs$lang$applyTo = (function (arglist__38589){
var args = cljs.core.seq(arglist__38589);
return G__38588__delegate(args);
});
G__38588.cljs$core$IFn$_invoke$arity$variadic = G__38588__delegate;
return G__38588;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4117__auto__ = (function iter__38594(s__38595){return (new cljs.core.LazySeq(null,(function (){var s__38595__$1 = s__38595;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__38595__$1);if(temp__4092__auto__)
{var s__38595__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__38595__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__38595__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__38597 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__38596 = 0;while(true){
if((i__38596 < size__4116__auto__))
{var args = cljs.core._nth.call(null,c__4115__auto__,i__38596);cljs.core.chunk_append.call(null,b__38597,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)));
{
var G__38598 = (i__38596 + 1);
i__38596 = G__38598;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38597),iter__38594.call(null,cljs.core.chunk_rest.call(null,s__38595__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38597),null);
}
} else
{var args = cljs.core.first.call(null,s__38595__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)),iter__38594.call(null,cljs.core.rest.call(null,s__38595__$2)));
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
sablono.core.render = (function render(component){var html = cljs.core.atom.call(null,null);React.renderComponentToString(component,(function (p1__38599_SHARP_){return cljs.core.reset_BANG_.call(null,html,p1__38599_SHARP_);
}));
return cljs.core.deref.call(null,html);
});
/**
* Include a list of external stylesheet files.
* @param {...*} var_args
*/
sablono.core.include_css = (function() { 
var include_css__delegate = function (styles){var iter__4117__auto__ = (function iter__38604(s__38605){return (new cljs.core.LazySeq(null,(function (){var s__38605__$1 = s__38605;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__38605__$1);if(temp__4092__auto__)
{var s__38605__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__38605__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__38605__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__38607 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__38606 = 0;while(true){
if((i__38606 < size__4116__auto__))
{var style = cljs.core._nth.call(null,c__4115__auto__,i__38606);cljs.core.chunk_append.call(null,b__38607,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null));
{
var G__38608 = (i__38606 + 1);
i__38606 = G__38608;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38607),iter__38604.call(null,cljs.core.chunk_rest.call(null,s__38605__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38607),null);
}
} else
{var style = cljs.core.first.call(null,s__38605__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null),iter__38604.call(null,cljs.core.rest.call(null,s__38605__$2)));
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
include_css.cljs$lang$applyTo = (function (arglist__38609){
var styles = cljs.core.seq(arglist__38609);
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
sablono.core.link_to38610 = (function() { 
var link_to38610__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to38610 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to38610__delegate.call(this,url,content);};
link_to38610.cljs$lang$maxFixedArity = 1;
link_to38610.cljs$lang$applyTo = (function (arglist__38611){
var url = cljs.core.first(arglist__38611);
var content = cljs.core.rest(arglist__38611);
return link_to38610__delegate(url,content);
});
link_to38610.cljs$core$IFn$_invoke$arity$variadic = link_to38610__delegate;
return link_to38610;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to38610);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to38612 = (function() { 
var mail_to38612__delegate = function (e_mail,p__38613){var vec__38615 = p__38613;var content = cljs.core.nth.call(null,vec__38615,0,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__3406__auto__ = content;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to38612 = function (e_mail,var_args){
var p__38613 = null;if (arguments.length > 1) {
  p__38613 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to38612__delegate.call(this,e_mail,p__38613);};
mail_to38612.cljs$lang$maxFixedArity = 1;
mail_to38612.cljs$lang$applyTo = (function (arglist__38616){
var e_mail = cljs.core.first(arglist__38616);
var p__38613 = cljs.core.rest(arglist__38616);
return mail_to38612__delegate(e_mail,p__38613);
});
mail_to38612.cljs$core$IFn$_invoke$arity$variadic = mail_to38612__delegate;
return mail_to38612;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to38612);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list38617 = (function unordered_list38617(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(function (){var iter__4117__auto__ = (function iter__38622(s__38623){return (new cljs.core.LazySeq(null,(function (){var s__38623__$1 = s__38623;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__38623__$1);if(temp__4092__auto__)
{var s__38623__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__38623__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__38623__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__38625 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__38624 = 0;while(true){
if((i__38624 < size__4116__auto__))
{var x = cljs.core._nth.call(null,c__4115__auto__,i__38624);cljs.core.chunk_append.call(null,b__38625,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__38626 = (i__38624 + 1);
i__38624 = G__38626;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38625),iter__38622.call(null,cljs.core.chunk_rest.call(null,s__38623__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38625),null);
}
} else
{var x = cljs.core.first.call(null,s__38623__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__38622.call(null,cljs.core.rest.call(null,s__38623__$2)));
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
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list38617);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list38627 = (function ordered_list38627(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",1013907791),(function (){var iter__4117__auto__ = (function iter__38632(s__38633){return (new cljs.core.LazySeq(null,(function (){var s__38633__$1 = s__38633;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__38633__$1);if(temp__4092__auto__)
{var s__38633__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__38633__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__38633__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__38635 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__38634 = 0;while(true){
if((i__38634 < size__4116__auto__))
{var x = cljs.core._nth.call(null,c__4115__auto__,i__38634);cljs.core.chunk_append.call(null,b__38635,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__38636 = (i__38634 + 1);
i__38634 = G__38636;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38635),iter__38632.call(null,cljs.core.chunk_rest.call(null,s__38633__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38635),null);
}
} else
{var x = cljs.core.first.call(null,s__38633__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__38632.call(null,cljs.core.rest.call(null,s__38633__$2)));
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
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list38627);
/**
* Create an image element.
*/
sablono.core.image38637 = (function() {
var image38637 = null;
var image38637__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src)], null)], null);
});
var image38637__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",1014000923),alt], null)], null);
});
image38637 = function(src,alt){
switch(arguments.length){
case 1:
return image38637__1.call(this,src);
case 2:
return image38637__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image38637.cljs$core$IFn$_invoke$arity$1 = image38637__1;
image38637.cljs$core$IFn$_invoke$arity$2 = image38637__2;
return image38637;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image38637);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__38638_SHARP_,p2__38639_SHARP_){return [cljs.core.str(p1__38638_SHARP_),cljs.core.str("["),cljs.core.str(p2__38639_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__38640_SHARP_,p2__38641_SHARP_){return [cljs.core.str(p1__38640_SHARP_),cljs.core.str("-"),cljs.core.str(p2__38641_SHARP_)].join('');
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
sablono.core.hidden_field38642 = (function() {
var hidden_field38642 = null;
var hidden_field38642__1 = (function (name){return hidden_field38642.call(null,name,null);
});
var hidden_field38642__2 = (function (name,value){return sablono.core.input_field.call(null,"hidden",name,value);
});
hidden_field38642 = function(name,value){
switch(arguments.length){
case 1:
return hidden_field38642__1.call(this,name);
case 2:
return hidden_field38642__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field38642.cljs$core$IFn$_invoke$arity$1 = hidden_field38642__1;
hidden_field38642.cljs$core$IFn$_invoke$arity$2 = hidden_field38642__2;
return hidden_field38642;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field38642);
/**
* Creates a new text input field.
*/
sablono.core.text_field38643 = (function() {
var text_field38643 = null;
var text_field38643__1 = (function (name){return text_field38643.call(null,name,null);
});
var text_field38643__2 = (function (name,value){return sablono.core.input_field.call(null,"text",name,value);
});
text_field38643 = function(name,value){
switch(arguments.length){
case 1:
return text_field38643__1.call(this,name);
case 2:
return text_field38643__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field38643.cljs$core$IFn$_invoke$arity$1 = text_field38643__1;
text_field38643.cljs$core$IFn$_invoke$arity$2 = text_field38643__2;
return text_field38643;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field38643);
/**
* Creates a new password field.
*/
sablono.core.password_field38644 = (function() {
var password_field38644 = null;
var password_field38644__1 = (function (name){return password_field38644.call(null,name,null);
});
var password_field38644__2 = (function (name,value){return sablono.core.input_field.call(null,"password",name,value);
});
password_field38644 = function(name,value){
switch(arguments.length){
case 1:
return password_field38644__1.call(this,name);
case 2:
return password_field38644__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field38644.cljs$core$IFn$_invoke$arity$1 = password_field38644__1;
password_field38644.cljs$core$IFn$_invoke$arity$2 = password_field38644__2;
return password_field38644;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field38644);
/**
* Creates a new email input field.
*/
sablono.core.email_field38645 = (function() {
var email_field38645 = null;
var email_field38645__1 = (function (name){return email_field38645.call(null,name,null);
});
var email_field38645__2 = (function (name,value){return sablono.core.input_field.call(null,"email",name,value);
});
email_field38645 = function(name,value){
switch(arguments.length){
case 1:
return email_field38645__1.call(this,name);
case 2:
return email_field38645__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field38645.cljs$core$IFn$_invoke$arity$1 = email_field38645__1;
email_field38645.cljs$core$IFn$_invoke$arity$2 = email_field38645__2;
return email_field38645;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field38645);
/**
* Creates a check box.
*/
sablono.core.check_box38646 = (function() {
var check_box38646 = null;
var check_box38646__1 = (function (name){return check_box38646.call(null,name,null);
});
var check_box38646__2 = (function (name,checked_QMARK_){return check_box38646.call(null,name,checked_QMARK_,"true");
});
var check_box38646__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"checkbox",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
check_box38646 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box38646__1.call(this,name);
case 2:
return check_box38646__2.call(this,name,checked_QMARK_);
case 3:
return check_box38646__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box38646.cljs$core$IFn$_invoke$arity$1 = check_box38646__1;
check_box38646.cljs$core$IFn$_invoke$arity$2 = check_box38646__2;
check_box38646.cljs$core$IFn$_invoke$arity$3 = check_box38646__3;
return check_box38646;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box38646);
/**
* Creates a radio button.
*/
sablono.core.radio_button38647 = (function() {
var radio_button38647 = null;
var radio_button38647__1 = (function (group){return radio_button38647.call(null,group,null);
});
var radio_button38647__2 = (function (group,checked_QMARK_){return radio_button38647.call(null,group,checked_QMARK_,"true");
});
var radio_button38647__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"radio",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
radio_button38647 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button38647__1.call(this,group);
case 2:
return radio_button38647__2.call(this,group,checked_QMARK_);
case 3:
return radio_button38647__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button38647.cljs$core$IFn$_invoke$arity$1 = radio_button38647__1;
radio_button38647.cljs$core$IFn$_invoke$arity$2 = radio_button38647__2;
radio_button38647.cljs$core$IFn$_invoke$arity$3 = radio_button38647__3;
return radio_button38647;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button38647);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options38648 = (function() {
var select_options38648 = null;
var select_options38648__1 = (function (coll){return select_options38648.call(null,coll,null);
});
var select_options38648__2 = (function (coll,selected){var iter__4117__auto__ = (function iter__38657(s__38658){return (new cljs.core.LazySeq(null,(function (){var s__38658__$1 = s__38658;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__38658__$1);if(temp__4092__auto__)
{var s__38658__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__38658__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__38658__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__38660 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__38659 = 0;while(true){
if((i__38659 < size__4116__auto__))
{var x = cljs.core._nth.call(null,c__4115__auto__,i__38659);cljs.core.chunk_append.call(null,b__38660,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__38663 = x;var text = cljs.core.nth.call(null,vec__38663,0,null);var val = cljs.core.nth.call(null,vec__38663,1,null);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options38648.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__38665 = (i__38659 + 1);
i__38659 = G__38665;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38660),iter__38657.call(null,cljs.core.chunk_rest.call(null,s__38658__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38660),null);
}
} else
{var x = cljs.core.first.call(null,s__38658__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__38664 = x;var text = cljs.core.nth.call(null,vec__38664,0,null);var val = cljs.core.nth.call(null,vec__38664,1,null);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options38648.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__38657.call(null,cljs.core.rest.call(null,s__38658__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__.call(null,coll);
});
select_options38648 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options38648__1.call(this,coll);
case 2:
return select_options38648__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options38648.cljs$core$IFn$_invoke$arity$1 = select_options38648__1;
select_options38648.cljs$core$IFn$_invoke$arity$2 = select_options38648__2;
return select_options38648;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options38648);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down38666 = (function() {
var drop_down38666 = null;
var drop_down38666__2 = (function (name,options){return drop_down38666.call(null,name,options,null);
});
var drop_down38666__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down38666 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down38666__2.call(this,name,options);
case 3:
return drop_down38666__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down38666.cljs$core$IFn$_invoke$arity$2 = drop_down38666__2;
drop_down38666.cljs$core$IFn$_invoke$arity$3 = drop_down38666__3;
return drop_down38666;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down38666);
/**
* Creates a text area element.
*/
sablono.core.text_area38667 = (function() {
var text_area38667 = null;
var text_area38667__1 = (function (name){return text_area38667.call(null,name,null);
});
var text_area38667__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",4305627820),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value], null)], null);
});
text_area38667 = function(name,value){
switch(arguments.length){
case 1:
return text_area38667__1.call(this,name);
case 2:
return text_area38667__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area38667.cljs$core$IFn$_invoke$arity$1 = text_area38667__1;
text_area38667.cljs$core$IFn$_invoke$arity$2 = text_area38667__2;
return text_area38667;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area38667);
/**
* Creates a file upload input.
*/
sablono.core.file_upload38668 = (function file_upload38668(name){return sablono.core.input_field.call(null,"file",name,null);
});
sablono.core.file_upload = sablono.core.wrap_attrs.call(null,sablono.core.file_upload38668);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label38669 = (function label38669(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1116631654),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",2249940112),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label38669);
/**
* Creates a submit button.
*/
sablono.core.submit_button38670 = (function submit_button38670(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"submit",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button38670);
/**
* Creates a form reset button.
*/
sablono.core.reset_button38671 = (function reset_button38671(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"reset",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button38671);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to38672 = (function() { 
var form_to38672__delegate = function (p__38673,body){var vec__38675 = p__38673;var method = cljs.core.nth.call(null,vec__38675,0,null);var action = cljs.core.nth.call(null,vec__38675,1,null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1014006472),null,new cljs.core.Keyword(null,"post","post",1017351186),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),method_str,new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),"POST",new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to38672 = function (p__38673,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to38672__delegate.call(this,p__38673,body);};
form_to38672.cljs$lang$maxFixedArity = 1;
form_to38672.cljs$lang$applyTo = (function (arglist__38676){
var p__38673 = cljs.core.first(arglist__38676);
var body = cljs.core.rest(arglist__38676);
return form_to38672__delegate(p__38673,body);
});
form_to38672.cljs$core$IFn$_invoke$arity$variadic = form_to38672__delegate;
return form_to38672;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to38672);
