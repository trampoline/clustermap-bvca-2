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
var G__15919__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__15918 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__15918,0,null);var body = cljs.core.nthnext.call(null,vec__15918,1);if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__15919 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__15919__delegate.call(this,args);};
G__15919.cljs$lang$maxFixedArity = 0;
G__15919.cljs$lang$applyTo = (function (arglist__15920){
var args = cljs.core.seq(arglist__15920);
return G__15919__delegate(args);
});
G__15919.cljs$core$IFn$_invoke$arity$variadic = G__15919__delegate;
return G__15919;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4117__auto__ = (function iter__15925(s__15926){return (new cljs.core.LazySeq(null,(function (){var s__15926__$1 = s__15926;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__15926__$1);if(temp__4092__auto__)
{var s__15926__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__15926__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__15926__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__15928 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__15927 = 0;while(true){
if((i__15927 < size__4116__auto__))
{var args = cljs.core._nth.call(null,c__4115__auto__,i__15927);cljs.core.chunk_append.call(null,b__15928,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)));
{
var G__15929 = (i__15927 + 1);
i__15927 = G__15929;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15928),iter__15925.call(null,cljs.core.chunk_rest.call(null,s__15926__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15928),null);
}
} else
{var args = cljs.core.first.call(null,s__15926__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)),iter__15925.call(null,cljs.core.rest.call(null,s__15926__$2)));
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
sablono.core.render = (function render(component){var html = cljs.core.atom.call(null,null);React.renderComponentToString(component,(function (p1__15930_SHARP_){return cljs.core.reset_BANG_.call(null,html,p1__15930_SHARP_);
}));
return cljs.core.deref.call(null,html);
});
/**
* Include a list of external stylesheet files.
* @param {...*} var_args
*/
sablono.core.include_css = (function() { 
var include_css__delegate = function (styles){var iter__4117__auto__ = (function iter__15935(s__15936){return (new cljs.core.LazySeq(null,(function (){var s__15936__$1 = s__15936;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__15936__$1);if(temp__4092__auto__)
{var s__15936__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__15936__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__15936__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__15938 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__15937 = 0;while(true){
if((i__15937 < size__4116__auto__))
{var style = cljs.core._nth.call(null,c__4115__auto__,i__15937);cljs.core.chunk_append.call(null,b__15938,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null));
{
var G__15939 = (i__15937 + 1);
i__15937 = G__15939;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15938),iter__15935.call(null,cljs.core.chunk_rest.call(null,s__15936__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15938),null);
}
} else
{var style = cljs.core.first.call(null,s__15936__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null),iter__15935.call(null,cljs.core.rest.call(null,s__15936__$2)));
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
include_css.cljs$lang$applyTo = (function (arglist__15940){
var styles = cljs.core.seq(arglist__15940);
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
sablono.core.link_to15941 = (function() { 
var link_to15941__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to15941 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to15941__delegate.call(this,url,content);};
link_to15941.cljs$lang$maxFixedArity = 1;
link_to15941.cljs$lang$applyTo = (function (arglist__15942){
var url = cljs.core.first(arglist__15942);
var content = cljs.core.rest(arglist__15942);
return link_to15941__delegate(url,content);
});
link_to15941.cljs$core$IFn$_invoke$arity$variadic = link_to15941__delegate;
return link_to15941;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to15941);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to15943 = (function() { 
var mail_to15943__delegate = function (e_mail,p__15944){var vec__15946 = p__15944;var content = cljs.core.nth.call(null,vec__15946,0,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__3406__auto__ = content;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to15943 = function (e_mail,var_args){
var p__15944 = null;if (arguments.length > 1) {
  p__15944 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to15943__delegate.call(this,e_mail,p__15944);};
mail_to15943.cljs$lang$maxFixedArity = 1;
mail_to15943.cljs$lang$applyTo = (function (arglist__15947){
var e_mail = cljs.core.first(arglist__15947);
var p__15944 = cljs.core.rest(arglist__15947);
return mail_to15943__delegate(e_mail,p__15944);
});
mail_to15943.cljs$core$IFn$_invoke$arity$variadic = mail_to15943__delegate;
return mail_to15943;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to15943);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list15948 = (function unordered_list15948(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(function (){var iter__4117__auto__ = (function iter__15953(s__15954){return (new cljs.core.LazySeq(null,(function (){var s__15954__$1 = s__15954;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__15954__$1);if(temp__4092__auto__)
{var s__15954__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__15954__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__15954__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__15956 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__15955 = 0;while(true){
if((i__15955 < size__4116__auto__))
{var x = cljs.core._nth.call(null,c__4115__auto__,i__15955);cljs.core.chunk_append.call(null,b__15956,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__15957 = (i__15955 + 1);
i__15955 = G__15957;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15956),iter__15953.call(null,cljs.core.chunk_rest.call(null,s__15954__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15956),null);
}
} else
{var x = cljs.core.first.call(null,s__15954__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__15953.call(null,cljs.core.rest.call(null,s__15954__$2)));
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
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list15948);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list15958 = (function ordered_list15958(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",1013907791),(function (){var iter__4117__auto__ = (function iter__15963(s__15964){return (new cljs.core.LazySeq(null,(function (){var s__15964__$1 = s__15964;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__15964__$1);if(temp__4092__auto__)
{var s__15964__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__15964__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__15964__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__15966 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__15965 = 0;while(true){
if((i__15965 < size__4116__auto__))
{var x = cljs.core._nth.call(null,c__4115__auto__,i__15965);cljs.core.chunk_append.call(null,b__15966,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__15967 = (i__15965 + 1);
i__15965 = G__15967;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15966),iter__15963.call(null,cljs.core.chunk_rest.call(null,s__15964__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15966),null);
}
} else
{var x = cljs.core.first.call(null,s__15964__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__15963.call(null,cljs.core.rest.call(null,s__15964__$2)));
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
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list15958);
/**
* Create an image element.
*/
sablono.core.image15968 = (function() {
var image15968 = null;
var image15968__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src)], null)], null);
});
var image15968__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",1014000923),alt], null)], null);
});
image15968 = function(src,alt){
switch(arguments.length){
case 1:
return image15968__1.call(this,src);
case 2:
return image15968__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image15968.cljs$core$IFn$_invoke$arity$1 = image15968__1;
image15968.cljs$core$IFn$_invoke$arity$2 = image15968__2;
return image15968;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image15968);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__15969_SHARP_,p2__15970_SHARP_){return [cljs.core.str(p1__15969_SHARP_),cljs.core.str("["),cljs.core.str(p2__15970_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__15971_SHARP_,p2__15972_SHARP_){return [cljs.core.str(p1__15971_SHARP_),cljs.core.str("-"),cljs.core.str(p2__15972_SHARP_)].join('');
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
sablono.core.hidden_field15973 = (function() {
var hidden_field15973 = null;
var hidden_field15973__1 = (function (name){return hidden_field15973.call(null,name,null);
});
var hidden_field15973__2 = (function (name,value){return sablono.core.input_field.call(null,"hidden",name,value);
});
hidden_field15973 = function(name,value){
switch(arguments.length){
case 1:
return hidden_field15973__1.call(this,name);
case 2:
return hidden_field15973__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field15973.cljs$core$IFn$_invoke$arity$1 = hidden_field15973__1;
hidden_field15973.cljs$core$IFn$_invoke$arity$2 = hidden_field15973__2;
return hidden_field15973;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field15973);
/**
* Creates a new text input field.
*/
sablono.core.text_field15974 = (function() {
var text_field15974 = null;
var text_field15974__1 = (function (name){return text_field15974.call(null,name,null);
});
var text_field15974__2 = (function (name,value){return sablono.core.input_field.call(null,"text",name,value);
});
text_field15974 = function(name,value){
switch(arguments.length){
case 1:
return text_field15974__1.call(this,name);
case 2:
return text_field15974__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field15974.cljs$core$IFn$_invoke$arity$1 = text_field15974__1;
text_field15974.cljs$core$IFn$_invoke$arity$2 = text_field15974__2;
return text_field15974;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field15974);
/**
* Creates a new password field.
*/
sablono.core.password_field15975 = (function() {
var password_field15975 = null;
var password_field15975__1 = (function (name){return password_field15975.call(null,name,null);
});
var password_field15975__2 = (function (name,value){return sablono.core.input_field.call(null,"password",name,value);
});
password_field15975 = function(name,value){
switch(arguments.length){
case 1:
return password_field15975__1.call(this,name);
case 2:
return password_field15975__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field15975.cljs$core$IFn$_invoke$arity$1 = password_field15975__1;
password_field15975.cljs$core$IFn$_invoke$arity$2 = password_field15975__2;
return password_field15975;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field15975);
/**
* Creates a new email input field.
*/
sablono.core.email_field15976 = (function() {
var email_field15976 = null;
var email_field15976__1 = (function (name){return email_field15976.call(null,name,null);
});
var email_field15976__2 = (function (name,value){return sablono.core.input_field.call(null,"email",name,value);
});
email_field15976 = function(name,value){
switch(arguments.length){
case 1:
return email_field15976__1.call(this,name);
case 2:
return email_field15976__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field15976.cljs$core$IFn$_invoke$arity$1 = email_field15976__1;
email_field15976.cljs$core$IFn$_invoke$arity$2 = email_field15976__2;
return email_field15976;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field15976);
/**
* Creates a check box.
*/
sablono.core.check_box15977 = (function() {
var check_box15977 = null;
var check_box15977__1 = (function (name){return check_box15977.call(null,name,null);
});
var check_box15977__2 = (function (name,checked_QMARK_){return check_box15977.call(null,name,checked_QMARK_,"true");
});
var check_box15977__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"checkbox",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
check_box15977 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box15977__1.call(this,name);
case 2:
return check_box15977__2.call(this,name,checked_QMARK_);
case 3:
return check_box15977__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box15977.cljs$core$IFn$_invoke$arity$1 = check_box15977__1;
check_box15977.cljs$core$IFn$_invoke$arity$2 = check_box15977__2;
check_box15977.cljs$core$IFn$_invoke$arity$3 = check_box15977__3;
return check_box15977;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box15977);
/**
* Creates a radio button.
*/
sablono.core.radio_button15978 = (function() {
var radio_button15978 = null;
var radio_button15978__1 = (function (group){return radio_button15978.call(null,group,null);
});
var radio_button15978__2 = (function (group,checked_QMARK_){return radio_button15978.call(null,group,checked_QMARK_,"true");
});
var radio_button15978__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"radio",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
radio_button15978 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button15978__1.call(this,group);
case 2:
return radio_button15978__2.call(this,group,checked_QMARK_);
case 3:
return radio_button15978__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button15978.cljs$core$IFn$_invoke$arity$1 = radio_button15978__1;
radio_button15978.cljs$core$IFn$_invoke$arity$2 = radio_button15978__2;
radio_button15978.cljs$core$IFn$_invoke$arity$3 = radio_button15978__3;
return radio_button15978;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button15978);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options15979 = (function() {
var select_options15979 = null;
var select_options15979__1 = (function (coll){return select_options15979.call(null,coll,null);
});
var select_options15979__2 = (function (coll,selected){var iter__4117__auto__ = (function iter__15988(s__15989){return (new cljs.core.LazySeq(null,(function (){var s__15989__$1 = s__15989;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__15989__$1);if(temp__4092__auto__)
{var s__15989__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__15989__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__15989__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__15991 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__15990 = 0;while(true){
if((i__15990 < size__4116__auto__))
{var x = cljs.core._nth.call(null,c__4115__auto__,i__15990);cljs.core.chunk_append.call(null,b__15991,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__15994 = x;var text = cljs.core.nth.call(null,vec__15994,0,null);var val = cljs.core.nth.call(null,vec__15994,1,null);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options15979.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__15996 = (i__15990 + 1);
i__15990 = G__15996;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15991),iter__15988.call(null,cljs.core.chunk_rest.call(null,s__15989__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15991),null);
}
} else
{var x = cljs.core.first.call(null,s__15989__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__15995 = x;var text = cljs.core.nth.call(null,vec__15995,0,null);var val = cljs.core.nth.call(null,vec__15995,1,null);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options15979.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__15988.call(null,cljs.core.rest.call(null,s__15989__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__.call(null,coll);
});
select_options15979 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options15979__1.call(this,coll);
case 2:
return select_options15979__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options15979.cljs$core$IFn$_invoke$arity$1 = select_options15979__1;
select_options15979.cljs$core$IFn$_invoke$arity$2 = select_options15979__2;
return select_options15979;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options15979);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down15997 = (function() {
var drop_down15997 = null;
var drop_down15997__2 = (function (name,options){return drop_down15997.call(null,name,options,null);
});
var drop_down15997__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down15997 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down15997__2.call(this,name,options);
case 3:
return drop_down15997__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down15997.cljs$core$IFn$_invoke$arity$2 = drop_down15997__2;
drop_down15997.cljs$core$IFn$_invoke$arity$3 = drop_down15997__3;
return drop_down15997;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down15997);
/**
* Creates a text area element.
*/
sablono.core.text_area15998 = (function() {
var text_area15998 = null;
var text_area15998__1 = (function (name){return text_area15998.call(null,name,null);
});
var text_area15998__2 = (function (name,value){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",4305627820),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name)], null),sablono.util.as_str.call(null,value)], null);
});
text_area15998 = function(name,value){
switch(arguments.length){
case 1:
return text_area15998__1.call(this,name);
case 2:
return text_area15998__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area15998.cljs$core$IFn$_invoke$arity$1 = text_area15998__1;
text_area15998.cljs$core$IFn$_invoke$arity$2 = text_area15998__2;
return text_area15998;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area15998);
/**
* Creates a file upload input.
*/
sablono.core.file_upload15999 = (function file_upload15999(name){return sablono.core.input_field.call(null,"file",name,null);
});
sablono.core.file_upload = sablono.core.wrap_attrs.call(null,sablono.core.file_upload15999);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label16000 = (function label16000(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1116631654),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",2249940112),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label16000);
/**
* Creates a submit button.
*/
sablono.core.submit_button16001 = (function submit_button16001(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"submit",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button16001);
/**
* Creates a form reset button.
*/
sablono.core.reset_button16002 = (function reset_button16002(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"reset",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button16002);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to16003 = (function() { 
var form_to16003__delegate = function (p__16004,body){var vec__16006 = p__16004;var method = cljs.core.nth.call(null,vec__16006,0,null);var action = cljs.core.nth.call(null,vec__16006,1,null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1014006472),null,new cljs.core.Keyword(null,"post","post",1017351186),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),method_str,new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),"POST",new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to16003 = function (p__16004,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to16003__delegate.call(this,p__16004,body);};
form_to16003.cljs$lang$maxFixedArity = 1;
form_to16003.cljs$lang$applyTo = (function (arglist__16007){
var p__16004 = cljs.core.first(arglist__16007);
var body = cljs.core.rest(arglist__16007);
return form_to16003__delegate(p__16004,body);
});
form_to16003.cljs$core$IFn$_invoke$arity$variadic = form_to16003__delegate;
return form_to16003;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to16003);

//# sourceMappingURL=core.js.map