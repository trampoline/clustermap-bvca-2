// Compiled by ClojureScript 0.0-2138
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('clojure.string');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('sablono.interpreter');
goog.require('sablono.util');
goog.require('clojure.walk');
goog.require('clojure.string');
/**
* Add an optional attribute argument to a function that returns a element vector.
*/
sablono.core.wrap_attrs = (function wrap_attrs(func){return (function() { 
var G__15608__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__15607 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__15607,0,null);var body = cljs.core.nthnext.call(null,vec__15607,1);if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__15608 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__15608__delegate.call(this,args);};
G__15608.cljs$lang$maxFixedArity = 0;
G__15608.cljs$lang$applyTo = (function (arglist__15609){
var args = cljs.core.seq(arglist__15609);
return G__15608__delegate(args);
});
G__15608.cljs$core$IFn$_invoke$arity$variadic = G__15608__delegate;
return G__15608;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4117__auto__ = (function iter__15614(s__15615){return (new cljs.core.LazySeq(null,(function (){var s__15615__$1 = s__15615;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__15615__$1);if(temp__4092__auto__)
{var s__15615__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__15615__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__15615__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__15617 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__15616 = 0;while(true){
if((i__15616 < size__4116__auto__))
{var args = cljs.core._nth.call(null,c__4115__auto__,i__15616);cljs.core.chunk_append.call(null,b__15617,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)));
{
var G__15618 = (i__15616 + 1);
i__15616 = G__15618;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15617),iter__15614.call(null,cljs.core.chunk_rest.call(null,s__15615__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15617),null);
}
} else
{var args = cljs.core.first.call(null,s__15615__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)),iter__15614.call(null,cljs.core.rest.call(null,s__15615__$2)));
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
sablono.core.render = (function render(component){var html = cljs.core.atom.call(null,null);React.renderComponentToString(component,(function (p1__15619_SHARP_){return cljs.core.reset_BANG_.call(null,html,p1__15619_SHARP_);
}));
return cljs.core.deref.call(null,html);
});
/**
* Include a list of external stylesheet files.
* @param {...*} var_args
*/
sablono.core.include_css = (function() { 
var include_css__delegate = function (styles){var iter__4117__auto__ = (function iter__15624(s__15625){return (new cljs.core.LazySeq(null,(function (){var s__15625__$1 = s__15625;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__15625__$1);if(temp__4092__auto__)
{var s__15625__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__15625__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__15625__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__15627 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__15626 = 0;while(true){
if((i__15626 < size__4116__auto__))
{var style = cljs.core._nth.call(null,c__4115__auto__,i__15626);cljs.core.chunk_append.call(null,b__15627,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null));
{
var G__15628 = (i__15626 + 1);
i__15626 = G__15628;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15627),iter__15624.call(null,cljs.core.chunk_rest.call(null,s__15625__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15627),null);
}
} else
{var style = cljs.core.first.call(null,s__15625__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null),iter__15624.call(null,cljs.core.rest.call(null,s__15625__$2)));
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
include_css.cljs$lang$applyTo = (function (arglist__15629){
var styles = cljs.core.seq(arglist__15629);
return include_css__delegate(styles);
});
include_css.cljs$core$IFn$_invoke$arity$variadic = include_css__delegate;
return include_css;
})()
;
/**
* Wraps some content in a HTML hyperlink with the supplied URL.
* @param {...*} var_args
*/
sablono.core.link_to15630 = (function() { 
var link_to15630__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to15630 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to15630__delegate.call(this,url,content);};
link_to15630.cljs$lang$maxFixedArity = 1;
link_to15630.cljs$lang$applyTo = (function (arglist__15631){
var url = cljs.core.first(arglist__15631);
var content = cljs.core.rest(arglist__15631);
return link_to15630__delegate(url,content);
});
link_to15630.cljs$core$IFn$_invoke$arity$variadic = link_to15630__delegate;
return link_to15630;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to15630);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to15632 = (function() { 
var mail_to15632__delegate = function (e_mail,p__15633){var vec__15635 = p__15633;var content = cljs.core.nth.call(null,vec__15635,0,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__3406__auto__ = content;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to15632 = function (e_mail,var_args){
var p__15633 = null;if (arguments.length > 1) {
  p__15633 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to15632__delegate.call(this,e_mail,p__15633);};
mail_to15632.cljs$lang$maxFixedArity = 1;
mail_to15632.cljs$lang$applyTo = (function (arglist__15636){
var e_mail = cljs.core.first(arglist__15636);
var p__15633 = cljs.core.rest(arglist__15636);
return mail_to15632__delegate(e_mail,p__15633);
});
mail_to15632.cljs$core$IFn$_invoke$arity$variadic = mail_to15632__delegate;
return mail_to15632;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to15632);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list15637 = (function unordered_list15637(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(function (){var iter__4117__auto__ = (function iter__15642(s__15643){return (new cljs.core.LazySeq(null,(function (){var s__15643__$1 = s__15643;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__15643__$1);if(temp__4092__auto__)
{var s__15643__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__15643__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__15643__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__15645 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__15644 = 0;while(true){
if((i__15644 < size__4116__auto__))
{var x = cljs.core._nth.call(null,c__4115__auto__,i__15644);cljs.core.chunk_append.call(null,b__15645,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__15646 = (i__15644 + 1);
i__15644 = G__15646;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15645),iter__15642.call(null,cljs.core.chunk_rest.call(null,s__15643__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15645),null);
}
} else
{var x = cljs.core.first.call(null,s__15643__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__15642.call(null,cljs.core.rest.call(null,s__15643__$2)));
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
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list15637);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list15647 = (function ordered_list15647(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",1013907791),(function (){var iter__4117__auto__ = (function iter__15652(s__15653){return (new cljs.core.LazySeq(null,(function (){var s__15653__$1 = s__15653;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__15653__$1);if(temp__4092__auto__)
{var s__15653__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__15653__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__15653__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__15655 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__15654 = 0;while(true){
if((i__15654 < size__4116__auto__))
{var x = cljs.core._nth.call(null,c__4115__auto__,i__15654);cljs.core.chunk_append.call(null,b__15655,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__15656 = (i__15654 + 1);
i__15654 = G__15656;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15655),iter__15652.call(null,cljs.core.chunk_rest.call(null,s__15653__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15655),null);
}
} else
{var x = cljs.core.first.call(null,s__15653__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__15652.call(null,cljs.core.rest.call(null,s__15653__$2)));
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
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list15647);
/**
* Create an image element.
*/
sablono.core.image15657 = (function() {
var image15657 = null;
var image15657__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src)], null)], null);
});
var image15657__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",1014000923),alt], null)], null);
});
image15657 = function(src,alt){
switch(arguments.length){
case 1:
return image15657__1.call(this,src);
case 2:
return image15657__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image15657.cljs$core$IFn$_invoke$arity$1 = image15657__1;
image15657.cljs$core$IFn$_invoke$arity$2 = image15657__2;
return image15657;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image15657);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__15658_SHARP_,p2__15659_SHARP_){return [cljs.core.str(p1__15658_SHARP_),cljs.core.str("["),cljs.core.str(p2__15659_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__15660_SHARP_,p2__15661_SHARP_){return [cljs.core.str(p1__15660_SHARP_),cljs.core.str("-"),cljs.core.str(p2__15661_SHARP_)].join('');
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
sablono.core.hidden_field15662 = (function() {
var hidden_field15662 = null;
var hidden_field15662__1 = (function (name){return hidden_field15662.call(null,name,null);
});
var hidden_field15662__2 = (function (name,value){return sablono.core.input_field.call(null,"hidden",name,value);
});
hidden_field15662 = function(name,value){
switch(arguments.length){
case 1:
return hidden_field15662__1.call(this,name);
case 2:
return hidden_field15662__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field15662.cljs$core$IFn$_invoke$arity$1 = hidden_field15662__1;
hidden_field15662.cljs$core$IFn$_invoke$arity$2 = hidden_field15662__2;
return hidden_field15662;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field15662);
/**
* Creates a new text input field.
*/
sablono.core.text_field15663 = (function() {
var text_field15663 = null;
var text_field15663__1 = (function (name){return text_field15663.call(null,name,null);
});
var text_field15663__2 = (function (name,value){return sablono.core.input_field.call(null,"text",name,value);
});
text_field15663 = function(name,value){
switch(arguments.length){
case 1:
return text_field15663__1.call(this,name);
case 2:
return text_field15663__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field15663.cljs$core$IFn$_invoke$arity$1 = text_field15663__1;
text_field15663.cljs$core$IFn$_invoke$arity$2 = text_field15663__2;
return text_field15663;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field15663);
/**
* Creates a new password field.
*/
sablono.core.password_field15664 = (function() {
var password_field15664 = null;
var password_field15664__1 = (function (name){return password_field15664.call(null,name,null);
});
var password_field15664__2 = (function (name,value){return sablono.core.input_field.call(null,"password",name,value);
});
password_field15664 = function(name,value){
switch(arguments.length){
case 1:
return password_field15664__1.call(this,name);
case 2:
return password_field15664__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field15664.cljs$core$IFn$_invoke$arity$1 = password_field15664__1;
password_field15664.cljs$core$IFn$_invoke$arity$2 = password_field15664__2;
return password_field15664;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field15664);
/**
* Creates a new email input field.
*/
sablono.core.email_field15665 = (function() {
var email_field15665 = null;
var email_field15665__1 = (function (name){return email_field15665.call(null,name,null);
});
var email_field15665__2 = (function (name,value){return sablono.core.input_field.call(null,"email",name,value);
});
email_field15665 = function(name,value){
switch(arguments.length){
case 1:
return email_field15665__1.call(this,name);
case 2:
return email_field15665__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field15665.cljs$core$IFn$_invoke$arity$1 = email_field15665__1;
email_field15665.cljs$core$IFn$_invoke$arity$2 = email_field15665__2;
return email_field15665;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field15665);
/**
* Creates a check box.
*/
sablono.core.check_box15666 = (function() {
var check_box15666 = null;
var check_box15666__1 = (function (name){return check_box15666.call(null,name,null);
});
var check_box15666__2 = (function (name,checked_QMARK_){return check_box15666.call(null,name,checked_QMARK_,"true");
});
var check_box15666__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"checkbox",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
check_box15666 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box15666__1.call(this,name);
case 2:
return check_box15666__2.call(this,name,checked_QMARK_);
case 3:
return check_box15666__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box15666.cljs$core$IFn$_invoke$arity$1 = check_box15666__1;
check_box15666.cljs$core$IFn$_invoke$arity$2 = check_box15666__2;
check_box15666.cljs$core$IFn$_invoke$arity$3 = check_box15666__3;
return check_box15666;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box15666);
/**
* Creates a radio button.
*/
sablono.core.radio_button15667 = (function() {
var radio_button15667 = null;
var radio_button15667__1 = (function (group){return radio_button15667.call(null,group,null);
});
var radio_button15667__2 = (function (group,checked_QMARK_){return radio_button15667.call(null,group,checked_QMARK_,"true");
});
var radio_button15667__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"radio",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
radio_button15667 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button15667__1.call(this,group);
case 2:
return radio_button15667__2.call(this,group,checked_QMARK_);
case 3:
return radio_button15667__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button15667.cljs$core$IFn$_invoke$arity$1 = radio_button15667__1;
radio_button15667.cljs$core$IFn$_invoke$arity$2 = radio_button15667__2;
radio_button15667.cljs$core$IFn$_invoke$arity$3 = radio_button15667__3;
return radio_button15667;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button15667);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options15668 = (function() {
var select_options15668 = null;
var select_options15668__1 = (function (coll){return select_options15668.call(null,coll,null);
});
var select_options15668__2 = (function (coll,selected){var iter__4117__auto__ = (function iter__15677(s__15678){return (new cljs.core.LazySeq(null,(function (){var s__15678__$1 = s__15678;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__15678__$1);if(temp__4092__auto__)
{var s__15678__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__15678__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__15678__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__15680 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__15679 = 0;while(true){
if((i__15679 < size__4116__auto__))
{var x = cljs.core._nth.call(null,c__4115__auto__,i__15679);cljs.core.chunk_append.call(null,b__15680,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__15683 = x;var text = cljs.core.nth.call(null,vec__15683,0,null);var val = cljs.core.nth.call(null,vec__15683,1,null);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options15668.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__15685 = (i__15679 + 1);
i__15679 = G__15685;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15680),iter__15677.call(null,cljs.core.chunk_rest.call(null,s__15678__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15680),null);
}
} else
{var x = cljs.core.first.call(null,s__15678__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__15684 = x;var text = cljs.core.nth.call(null,vec__15684,0,null);var val = cljs.core.nth.call(null,vec__15684,1,null);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options15668.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__15677.call(null,cljs.core.rest.call(null,s__15678__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__.call(null,coll);
});
select_options15668 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options15668__1.call(this,coll);
case 2:
return select_options15668__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options15668.cljs$core$IFn$_invoke$arity$1 = select_options15668__1;
select_options15668.cljs$core$IFn$_invoke$arity$2 = select_options15668__2;
return select_options15668;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options15668);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down15686 = (function() {
var drop_down15686 = null;
var drop_down15686__2 = (function (name,options){return drop_down15686.call(null,name,options,null);
});
var drop_down15686__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down15686 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down15686__2.call(this,name,options);
case 3:
return drop_down15686__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down15686.cljs$core$IFn$_invoke$arity$2 = drop_down15686__2;
drop_down15686.cljs$core$IFn$_invoke$arity$3 = drop_down15686__3;
return drop_down15686;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down15686);
/**
* Creates a text area element.
*/
sablono.core.text_area15687 = (function() {
var text_area15687 = null;
var text_area15687__1 = (function (name){return text_area15687.call(null,name,null);
});
var text_area15687__2 = (function (name,value){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",4305627820),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name)], null),sablono.util.as_str.call(null,value)], null);
});
text_area15687 = function(name,value){
switch(arguments.length){
case 1:
return text_area15687__1.call(this,name);
case 2:
return text_area15687__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area15687.cljs$core$IFn$_invoke$arity$1 = text_area15687__1;
text_area15687.cljs$core$IFn$_invoke$arity$2 = text_area15687__2;
return text_area15687;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area15687);
/**
* Creates a file upload input.
*/
sablono.core.file_upload15688 = (function file_upload15688(name){return sablono.core.input_field.call(null,"file",name,null);
});
sablono.core.file_upload = sablono.core.wrap_attrs.call(null,sablono.core.file_upload15688);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label15689 = (function label15689(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1116631654),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",2249940112),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label15689);
/**
* Creates a submit button.
*/
sablono.core.submit_button15690 = (function submit_button15690(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"submit",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button15690);
/**
* Creates a form reset button.
*/
sablono.core.reset_button15691 = (function reset_button15691(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"reset",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button15691);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to15692 = (function() { 
var form_to15692__delegate = function (p__15693,body){var vec__15695 = p__15693;var method = cljs.core.nth.call(null,vec__15695,0,null);var action = cljs.core.nth.call(null,vec__15695,1,null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1014006472),null,new cljs.core.Keyword(null,"post","post",1017351186),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),method_str,new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),"POST",new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to15692 = function (p__15693,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to15692__delegate.call(this,p__15693,body);};
form_to15692.cljs$lang$maxFixedArity = 1;
form_to15692.cljs$lang$applyTo = (function (arglist__15696){
var p__15693 = cljs.core.first(arglist__15696);
var body = cljs.core.rest(arglist__15696);
return form_to15692__delegate(p__15693,body);
});
form_to15692.cljs$core$IFn$_invoke$arity$variadic = form_to15692__delegate;
return form_to15692;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to15692);

//# sourceMappingURL=core.js.map