// Compiled by ClojureScript 0.0-2173
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
var G__49684__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__49683 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__49683,0,null);var body = cljs.core.nthnext.call(null,vec__49683,1);if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__49684 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__49684__delegate.call(this,args);};
G__49684.cljs$lang$maxFixedArity = 0;
G__49684.cljs$lang$applyTo = (function (arglist__49685){
var args = cljs.core.seq(arglist__49685);
return G__49684__delegate(args);
});
G__49684.cljs$core$IFn$_invoke$arity$variadic = G__49684__delegate;
return G__49684;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4158__auto__ = (function iter__49690(s__49691){return (new cljs.core.LazySeq(null,(function (){var s__49691__$1 = s__49691;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__49691__$1);if(temp__4092__auto__)
{var s__49691__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__49691__$2))
{var c__4156__auto__ = cljs.core.chunk_first.call(null,s__49691__$2);var size__4157__auto__ = cljs.core.count.call(null,c__4156__auto__);var b__49693 = cljs.core.chunk_buffer.call(null,size__4157__auto__);if((function (){var i__49692 = 0;while(true){
if((i__49692 < size__4157__auto__))
{var args = cljs.core._nth.call(null,c__4156__auto__,i__49692);cljs.core.chunk_append.call(null,b__49693,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)));
{
var G__49694 = (i__49692 + 1);
i__49692 = G__49694;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__49693),iter__49690.call(null,cljs.core.chunk_rest.call(null,s__49691__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__49693),null);
}
} else
{var args = cljs.core.first.call(null,s__49691__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)),iter__49690.call(null,cljs.core.rest.call(null,s__49691__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4158__auto__.call(null,arglists);
});
/**
* Render the React `component` as an HTML string.
*/
sablono.core.render = (function render(component){var html = cljs.core.atom.call(null,null);React.renderComponentToString(component,(function (p1__49695_SHARP_){return cljs.core.reset_BANG_.call(null,html,p1__49695_SHARP_);
}));
return cljs.core.deref.call(null,html);
});
/**
* Include a list of external stylesheet files.
* @param {...*} var_args
*/
sablono.core.include_css = (function() { 
var include_css__delegate = function (styles){var iter__4158__auto__ = (function iter__49700(s__49701){return (new cljs.core.LazySeq(null,(function (){var s__49701__$1 = s__49701;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__49701__$1);if(temp__4092__auto__)
{var s__49701__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__49701__$2))
{var c__4156__auto__ = cljs.core.chunk_first.call(null,s__49701__$2);var size__4157__auto__ = cljs.core.count.call(null,c__4156__auto__);var b__49703 = cljs.core.chunk_buffer.call(null,size__4157__auto__);if((function (){var i__49702 = 0;while(true){
if((i__49702 < size__4157__auto__))
{var style = cljs.core._nth.call(null,c__4156__auto__,i__49702);cljs.core.chunk_append.call(null,b__49703,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null));
{
var G__49704 = (i__49702 + 1);
i__49702 = G__49704;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__49703),iter__49700.call(null,cljs.core.chunk_rest.call(null,s__49701__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__49703),null);
}
} else
{var style = cljs.core.first.call(null,s__49701__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null),iter__49700.call(null,cljs.core.rest.call(null,s__49701__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4158__auto__.call(null,styles);
};
var include_css = function (var_args){
var styles = null;if (arguments.length > 0) {
  styles = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return include_css__delegate.call(this,styles);};
include_css.cljs$lang$maxFixedArity = 0;
include_css.cljs$lang$applyTo = (function (arglist__49705){
var styles = cljs.core.seq(arglist__49705);
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
sablono.core.link_to49706 = (function() { 
var link_to49706__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to49706 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to49706__delegate.call(this,url,content);};
link_to49706.cljs$lang$maxFixedArity = 1;
link_to49706.cljs$lang$applyTo = (function (arglist__49707){
var url = cljs.core.first(arglist__49707);
var content = cljs.core.rest(arglist__49707);
return link_to49706__delegate(url,content);
});
link_to49706.cljs$core$IFn$_invoke$arity$variadic = link_to49706__delegate;
return link_to49706;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to49706);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to49708 = (function() { 
var mail_to49708__delegate = function (e_mail,p__49709){var vec__49711 = p__49709;var content = cljs.core.nth.call(null,vec__49711,0,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__3441__auto__ = content;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to49708 = function (e_mail,var_args){
var p__49709 = null;if (arguments.length > 1) {
  p__49709 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to49708__delegate.call(this,e_mail,p__49709);};
mail_to49708.cljs$lang$maxFixedArity = 1;
mail_to49708.cljs$lang$applyTo = (function (arglist__49712){
var e_mail = cljs.core.first(arglist__49712);
var p__49709 = cljs.core.rest(arglist__49712);
return mail_to49708__delegate(e_mail,p__49709);
});
mail_to49708.cljs$core$IFn$_invoke$arity$variadic = mail_to49708__delegate;
return mail_to49708;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to49708);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list49713 = (function unordered_list49713(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(function (){var iter__4158__auto__ = (function iter__49718(s__49719){return (new cljs.core.LazySeq(null,(function (){var s__49719__$1 = s__49719;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__49719__$1);if(temp__4092__auto__)
{var s__49719__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__49719__$2))
{var c__4156__auto__ = cljs.core.chunk_first.call(null,s__49719__$2);var size__4157__auto__ = cljs.core.count.call(null,c__4156__auto__);var b__49721 = cljs.core.chunk_buffer.call(null,size__4157__auto__);if((function (){var i__49720 = 0;while(true){
if((i__49720 < size__4157__auto__))
{var x = cljs.core._nth.call(null,c__4156__auto__,i__49720);cljs.core.chunk_append.call(null,b__49721,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__49722 = (i__49720 + 1);
i__49720 = G__49722;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__49721),iter__49718.call(null,cljs.core.chunk_rest.call(null,s__49719__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__49721),null);
}
} else
{var x = cljs.core.first.call(null,s__49719__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__49718.call(null,cljs.core.rest.call(null,s__49719__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4158__auto__.call(null,coll);
})()], null);
});
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list49713);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list49723 = (function ordered_list49723(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",1013907791),(function (){var iter__4158__auto__ = (function iter__49728(s__49729){return (new cljs.core.LazySeq(null,(function (){var s__49729__$1 = s__49729;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__49729__$1);if(temp__4092__auto__)
{var s__49729__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__49729__$2))
{var c__4156__auto__ = cljs.core.chunk_first.call(null,s__49729__$2);var size__4157__auto__ = cljs.core.count.call(null,c__4156__auto__);var b__49731 = cljs.core.chunk_buffer.call(null,size__4157__auto__);if((function (){var i__49730 = 0;while(true){
if((i__49730 < size__4157__auto__))
{var x = cljs.core._nth.call(null,c__4156__auto__,i__49730);cljs.core.chunk_append.call(null,b__49731,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__49732 = (i__49730 + 1);
i__49730 = G__49732;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__49731),iter__49728.call(null,cljs.core.chunk_rest.call(null,s__49729__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__49731),null);
}
} else
{var x = cljs.core.first.call(null,s__49729__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__49728.call(null,cljs.core.rest.call(null,s__49729__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4158__auto__.call(null,coll);
})()], null);
});
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list49723);
/**
* Create an image element.
*/
sablono.core.image49733 = (function() {
var image49733 = null;
var image49733__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src)], null)], null);
});
var image49733__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",1014000923),alt], null)], null);
});
image49733 = function(src,alt){
switch(arguments.length){
case 1:
return image49733__1.call(this,src);
case 2:
return image49733__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image49733.cljs$core$IFn$_invoke$arity$1 = image49733__1;
image49733.cljs$core$IFn$_invoke$arity$2 = image49733__2;
return image49733;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image49733);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__49734_SHARP_,p2__49735_SHARP_){return [cljs.core.str(p1__49734_SHARP_),cljs.core.str("["),cljs.core.str(p2__49735_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__49736_SHARP_,p2__49737_SHARP_){return [cljs.core.str(p1__49736_SHARP_),cljs.core.str("-"),cljs.core.str(p2__49737_SHARP_)].join('');
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
sablono.core.hidden_field49738 = (function() {
var hidden_field49738 = null;
var hidden_field49738__1 = (function (name){return hidden_field49738.call(null,name,null);
});
var hidden_field49738__2 = (function (name,value){return sablono.core.input_field.call(null,"hidden",name,value);
});
hidden_field49738 = function(name,value){
switch(arguments.length){
case 1:
return hidden_field49738__1.call(this,name);
case 2:
return hidden_field49738__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field49738.cljs$core$IFn$_invoke$arity$1 = hidden_field49738__1;
hidden_field49738.cljs$core$IFn$_invoke$arity$2 = hidden_field49738__2;
return hidden_field49738;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field49738);
/**
* Creates a new text input field.
*/
sablono.core.text_field49739 = (function() {
var text_field49739 = null;
var text_field49739__1 = (function (name){return text_field49739.call(null,name,null);
});
var text_field49739__2 = (function (name,value){return sablono.core.input_field.call(null,"text",name,value);
});
text_field49739 = function(name,value){
switch(arguments.length){
case 1:
return text_field49739__1.call(this,name);
case 2:
return text_field49739__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field49739.cljs$core$IFn$_invoke$arity$1 = text_field49739__1;
text_field49739.cljs$core$IFn$_invoke$arity$2 = text_field49739__2;
return text_field49739;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field49739);
/**
* Creates a new password field.
*/
sablono.core.password_field49740 = (function() {
var password_field49740 = null;
var password_field49740__1 = (function (name){return password_field49740.call(null,name,null);
});
var password_field49740__2 = (function (name,value){return sablono.core.input_field.call(null,"password",name,value);
});
password_field49740 = function(name,value){
switch(arguments.length){
case 1:
return password_field49740__1.call(this,name);
case 2:
return password_field49740__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field49740.cljs$core$IFn$_invoke$arity$1 = password_field49740__1;
password_field49740.cljs$core$IFn$_invoke$arity$2 = password_field49740__2;
return password_field49740;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field49740);
/**
* Creates a new email input field.
*/
sablono.core.email_field49741 = (function() {
var email_field49741 = null;
var email_field49741__1 = (function (name){return email_field49741.call(null,name,null);
});
var email_field49741__2 = (function (name,value){return sablono.core.input_field.call(null,"email",name,value);
});
email_field49741 = function(name,value){
switch(arguments.length){
case 1:
return email_field49741__1.call(this,name);
case 2:
return email_field49741__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field49741.cljs$core$IFn$_invoke$arity$1 = email_field49741__1;
email_field49741.cljs$core$IFn$_invoke$arity$2 = email_field49741__2;
return email_field49741;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field49741);
/**
* Creates a check box.
*/
sablono.core.check_box49742 = (function() {
var check_box49742 = null;
var check_box49742__1 = (function (name){return check_box49742.call(null,name,null);
});
var check_box49742__2 = (function (name,checked_QMARK_){return check_box49742.call(null,name,checked_QMARK_,"true");
});
var check_box49742__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"checkbox",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
check_box49742 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box49742__1.call(this,name);
case 2:
return check_box49742__2.call(this,name,checked_QMARK_);
case 3:
return check_box49742__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box49742.cljs$core$IFn$_invoke$arity$1 = check_box49742__1;
check_box49742.cljs$core$IFn$_invoke$arity$2 = check_box49742__2;
check_box49742.cljs$core$IFn$_invoke$arity$3 = check_box49742__3;
return check_box49742;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box49742);
/**
* Creates a radio button.
*/
sablono.core.radio_button49743 = (function() {
var radio_button49743 = null;
var radio_button49743__1 = (function (group){return radio_button49743.call(null,group,null);
});
var radio_button49743__2 = (function (group,checked_QMARK_){return radio_button49743.call(null,group,checked_QMARK_,"true");
});
var radio_button49743__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"radio",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
radio_button49743 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button49743__1.call(this,group);
case 2:
return radio_button49743__2.call(this,group,checked_QMARK_);
case 3:
return radio_button49743__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button49743.cljs$core$IFn$_invoke$arity$1 = radio_button49743__1;
radio_button49743.cljs$core$IFn$_invoke$arity$2 = radio_button49743__2;
radio_button49743.cljs$core$IFn$_invoke$arity$3 = radio_button49743__3;
return radio_button49743;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button49743);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options49744 = (function() {
var select_options49744 = null;
var select_options49744__1 = (function (coll){return select_options49744.call(null,coll,null);
});
var select_options49744__2 = (function (coll,selected){var iter__4158__auto__ = (function iter__49753(s__49754){return (new cljs.core.LazySeq(null,(function (){var s__49754__$1 = s__49754;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__49754__$1);if(temp__4092__auto__)
{var s__49754__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__49754__$2))
{var c__4156__auto__ = cljs.core.chunk_first.call(null,s__49754__$2);var size__4157__auto__ = cljs.core.count.call(null,c__4156__auto__);var b__49756 = cljs.core.chunk_buffer.call(null,size__4157__auto__);if((function (){var i__49755 = 0;while(true){
if((i__49755 < size__4157__auto__))
{var x = cljs.core._nth.call(null,c__4156__auto__,i__49755);cljs.core.chunk_append.call(null,b__49756,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__49759 = x;var text = cljs.core.nth.call(null,vec__49759,0,null);var val = cljs.core.nth.call(null,vec__49759,1,null);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options49744.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__49761 = (i__49755 + 1);
i__49755 = G__49761;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__49756),iter__49753.call(null,cljs.core.chunk_rest.call(null,s__49754__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__49756),null);
}
} else
{var x = cljs.core.first.call(null,s__49754__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__49760 = x;var text = cljs.core.nth.call(null,vec__49760,0,null);var val = cljs.core.nth.call(null,vec__49760,1,null);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options49744.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__49753.call(null,cljs.core.rest.call(null,s__49754__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4158__auto__.call(null,coll);
});
select_options49744 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options49744__1.call(this,coll);
case 2:
return select_options49744__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options49744.cljs$core$IFn$_invoke$arity$1 = select_options49744__1;
select_options49744.cljs$core$IFn$_invoke$arity$2 = select_options49744__2;
return select_options49744;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options49744);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down49762 = (function() {
var drop_down49762 = null;
var drop_down49762__2 = (function (name,options){return drop_down49762.call(null,name,options,null);
});
var drop_down49762__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down49762 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down49762__2.call(this,name,options);
case 3:
return drop_down49762__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down49762.cljs$core$IFn$_invoke$arity$2 = drop_down49762__2;
drop_down49762.cljs$core$IFn$_invoke$arity$3 = drop_down49762__3;
return drop_down49762;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down49762);
/**
* Creates a text area element.
*/
sablono.core.text_area49763 = (function() {
var text_area49763 = null;
var text_area49763__1 = (function (name){return text_area49763.call(null,name,null);
});
var text_area49763__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",4305627820),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value], null)], null);
});
text_area49763 = function(name,value){
switch(arguments.length){
case 1:
return text_area49763__1.call(this,name);
case 2:
return text_area49763__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area49763.cljs$core$IFn$_invoke$arity$1 = text_area49763__1;
text_area49763.cljs$core$IFn$_invoke$arity$2 = text_area49763__2;
return text_area49763;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area49763);
/**
* Creates a file upload input.
*/
sablono.core.file_upload49764 = (function file_upload49764(name){return sablono.core.input_field.call(null,"file",name,null);
});
sablono.core.file_upload = sablono.core.wrap_attrs.call(null,sablono.core.file_upload49764);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label49765 = (function label49765(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1116631654),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",2249940112),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label49765);
/**
* Creates a submit button.
*/
sablono.core.submit_button49766 = (function submit_button49766(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"submit",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button49766);
/**
* Creates a form reset button.
*/
sablono.core.reset_button49767 = (function reset_button49767(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"reset",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button49767);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to49768 = (function() { 
var form_to49768__delegate = function (p__49769,body){var vec__49771 = p__49769;var method = cljs.core.nth.call(null,vec__49771,0,null);var action = cljs.core.nth.call(null,vec__49771,1,null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1014006472),null,new cljs.core.Keyword(null,"post","post",1017351186),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),method_str,new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),"POST",new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to49768 = function (p__49769,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to49768__delegate.call(this,p__49769,body);};
form_to49768.cljs$lang$maxFixedArity = 1;
form_to49768.cljs$lang$applyTo = (function (arglist__49772){
var p__49769 = cljs.core.first(arglist__49772);
var body = cljs.core.rest(arglist__49772);
return form_to49768__delegate(p__49769,body);
});
form_to49768.cljs$core$IFn$_invoke$arity$variadic = form_to49768__delegate;
return form_to49768;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to49768);
