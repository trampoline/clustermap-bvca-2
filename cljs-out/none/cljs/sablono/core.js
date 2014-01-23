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
var G__15469__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__15468 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__15468,0,null);var body = cljs.core.nthnext.call(null,vec__15468,1);if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__15469 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__15469__delegate.call(this,args);};
G__15469.cljs$lang$maxFixedArity = 0;
G__15469.cljs$lang$applyTo = (function (arglist__15470){
var args = cljs.core.seq(arglist__15470);
return G__15469__delegate(args);
});
G__15469.cljs$core$IFn$_invoke$arity$variadic = G__15469__delegate;
return G__15469;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4117__auto__ = (function iter__15475(s__15476){return (new cljs.core.LazySeq(null,(function (){var s__15476__$1 = s__15476;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__15476__$1);if(temp__4092__auto__)
{var s__15476__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__15476__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__15476__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__15478 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__15477 = 0;while(true){
if((i__15477 < size__4116__auto__))
{var args = cljs.core._nth.call(null,c__4115__auto__,i__15477);cljs.core.chunk_append.call(null,b__15478,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)));
{
var G__15479 = (i__15477 + 1);
i__15477 = G__15479;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15478),iter__15475.call(null,cljs.core.chunk_rest.call(null,s__15476__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15478),null);
}
} else
{var args = cljs.core.first.call(null,s__15476__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)),iter__15475.call(null,cljs.core.rest.call(null,s__15476__$2)));
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
sablono.core.render = (function render(component){var html = cljs.core.atom.call(null,null);React.renderComponentToString(component,(function (p1__15480_SHARP_){return cljs.core.reset_BANG_.call(null,html,p1__15480_SHARP_);
}));
return cljs.core.deref.call(null,html);
});
/**
* Include a list of external stylesheet files.
* @param {...*} var_args
*/
sablono.core.include_css = (function() { 
var include_css__delegate = function (styles){var iter__4117__auto__ = (function iter__15485(s__15486){return (new cljs.core.LazySeq(null,(function (){var s__15486__$1 = s__15486;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__15486__$1);if(temp__4092__auto__)
{var s__15486__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__15486__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__15486__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__15488 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__15487 = 0;while(true){
if((i__15487 < size__4116__auto__))
{var style = cljs.core._nth.call(null,c__4115__auto__,i__15487);cljs.core.chunk_append.call(null,b__15488,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null));
{
var G__15489 = (i__15487 + 1);
i__15487 = G__15489;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15488),iter__15485.call(null,cljs.core.chunk_rest.call(null,s__15486__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15488),null);
}
} else
{var style = cljs.core.first.call(null,s__15486__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null),iter__15485.call(null,cljs.core.rest.call(null,s__15486__$2)));
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
include_css.cljs$lang$applyTo = (function (arglist__15490){
var styles = cljs.core.seq(arglist__15490);
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
sablono.core.link_to15491 = (function() { 
var link_to15491__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to15491 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to15491__delegate.call(this,url,content);};
link_to15491.cljs$lang$maxFixedArity = 1;
link_to15491.cljs$lang$applyTo = (function (arglist__15492){
var url = cljs.core.first(arglist__15492);
var content = cljs.core.rest(arglist__15492);
return link_to15491__delegate(url,content);
});
link_to15491.cljs$core$IFn$_invoke$arity$variadic = link_to15491__delegate;
return link_to15491;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to15491);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to15493 = (function() { 
var mail_to15493__delegate = function (e_mail,p__15494){var vec__15496 = p__15494;var content = cljs.core.nth.call(null,vec__15496,0,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__3406__auto__ = content;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to15493 = function (e_mail,var_args){
var p__15494 = null;if (arguments.length > 1) {
  p__15494 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to15493__delegate.call(this,e_mail,p__15494);};
mail_to15493.cljs$lang$maxFixedArity = 1;
mail_to15493.cljs$lang$applyTo = (function (arglist__15497){
var e_mail = cljs.core.first(arglist__15497);
var p__15494 = cljs.core.rest(arglist__15497);
return mail_to15493__delegate(e_mail,p__15494);
});
mail_to15493.cljs$core$IFn$_invoke$arity$variadic = mail_to15493__delegate;
return mail_to15493;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to15493);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list15498 = (function unordered_list15498(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(function (){var iter__4117__auto__ = (function iter__15503(s__15504){return (new cljs.core.LazySeq(null,(function (){var s__15504__$1 = s__15504;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__15504__$1);if(temp__4092__auto__)
{var s__15504__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__15504__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__15504__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__15506 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__15505 = 0;while(true){
if((i__15505 < size__4116__auto__))
{var x = cljs.core._nth.call(null,c__4115__auto__,i__15505);cljs.core.chunk_append.call(null,b__15506,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__15507 = (i__15505 + 1);
i__15505 = G__15507;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15506),iter__15503.call(null,cljs.core.chunk_rest.call(null,s__15504__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15506),null);
}
} else
{var x = cljs.core.first.call(null,s__15504__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__15503.call(null,cljs.core.rest.call(null,s__15504__$2)));
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
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list15498);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list15508 = (function ordered_list15508(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",1013907791),(function (){var iter__4117__auto__ = (function iter__15513(s__15514){return (new cljs.core.LazySeq(null,(function (){var s__15514__$1 = s__15514;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__15514__$1);if(temp__4092__auto__)
{var s__15514__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__15514__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__15514__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__15516 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__15515 = 0;while(true){
if((i__15515 < size__4116__auto__))
{var x = cljs.core._nth.call(null,c__4115__auto__,i__15515);cljs.core.chunk_append.call(null,b__15516,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__15517 = (i__15515 + 1);
i__15515 = G__15517;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15516),iter__15513.call(null,cljs.core.chunk_rest.call(null,s__15514__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15516),null);
}
} else
{var x = cljs.core.first.call(null,s__15514__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__15513.call(null,cljs.core.rest.call(null,s__15514__$2)));
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
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list15508);
/**
* Create an image element.
*/
sablono.core.image15518 = (function() {
var image15518 = null;
var image15518__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src)], null)], null);
});
var image15518__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",1014000923),alt], null)], null);
});
image15518 = function(src,alt){
switch(arguments.length){
case 1:
return image15518__1.call(this,src);
case 2:
return image15518__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image15518.cljs$core$IFn$_invoke$arity$1 = image15518__1;
image15518.cljs$core$IFn$_invoke$arity$2 = image15518__2;
return image15518;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image15518);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__15519_SHARP_,p2__15520_SHARP_){return [cljs.core.str(p1__15519_SHARP_),cljs.core.str("["),cljs.core.str(p2__15520_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__15521_SHARP_,p2__15522_SHARP_){return [cljs.core.str(p1__15521_SHARP_),cljs.core.str("-"),cljs.core.str(p2__15522_SHARP_)].join('');
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
sablono.core.hidden_field15523 = (function() {
var hidden_field15523 = null;
var hidden_field15523__1 = (function (name){return hidden_field15523.call(null,name,null);
});
var hidden_field15523__2 = (function (name,value){return sablono.core.input_field.call(null,"hidden",name,value);
});
hidden_field15523 = function(name,value){
switch(arguments.length){
case 1:
return hidden_field15523__1.call(this,name);
case 2:
return hidden_field15523__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field15523.cljs$core$IFn$_invoke$arity$1 = hidden_field15523__1;
hidden_field15523.cljs$core$IFn$_invoke$arity$2 = hidden_field15523__2;
return hidden_field15523;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field15523);
/**
* Creates a new text input field.
*/
sablono.core.text_field15524 = (function() {
var text_field15524 = null;
var text_field15524__1 = (function (name){return text_field15524.call(null,name,null);
});
var text_field15524__2 = (function (name,value){return sablono.core.input_field.call(null,"text",name,value);
});
text_field15524 = function(name,value){
switch(arguments.length){
case 1:
return text_field15524__1.call(this,name);
case 2:
return text_field15524__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field15524.cljs$core$IFn$_invoke$arity$1 = text_field15524__1;
text_field15524.cljs$core$IFn$_invoke$arity$2 = text_field15524__2;
return text_field15524;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field15524);
/**
* Creates a new password field.
*/
sablono.core.password_field15525 = (function() {
var password_field15525 = null;
var password_field15525__1 = (function (name){return password_field15525.call(null,name,null);
});
var password_field15525__2 = (function (name,value){return sablono.core.input_field.call(null,"password",name,value);
});
password_field15525 = function(name,value){
switch(arguments.length){
case 1:
return password_field15525__1.call(this,name);
case 2:
return password_field15525__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field15525.cljs$core$IFn$_invoke$arity$1 = password_field15525__1;
password_field15525.cljs$core$IFn$_invoke$arity$2 = password_field15525__2;
return password_field15525;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field15525);
/**
* Creates a new email input field.
*/
sablono.core.email_field15526 = (function() {
var email_field15526 = null;
var email_field15526__1 = (function (name){return email_field15526.call(null,name,null);
});
var email_field15526__2 = (function (name,value){return sablono.core.input_field.call(null,"email",name,value);
});
email_field15526 = function(name,value){
switch(arguments.length){
case 1:
return email_field15526__1.call(this,name);
case 2:
return email_field15526__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field15526.cljs$core$IFn$_invoke$arity$1 = email_field15526__1;
email_field15526.cljs$core$IFn$_invoke$arity$2 = email_field15526__2;
return email_field15526;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field15526);
/**
* Creates a check box.
*/
sablono.core.check_box15527 = (function() {
var check_box15527 = null;
var check_box15527__1 = (function (name){return check_box15527.call(null,name,null);
});
var check_box15527__2 = (function (name,checked_QMARK_){return check_box15527.call(null,name,checked_QMARK_,"true");
});
var check_box15527__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"checkbox",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
check_box15527 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box15527__1.call(this,name);
case 2:
return check_box15527__2.call(this,name,checked_QMARK_);
case 3:
return check_box15527__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box15527.cljs$core$IFn$_invoke$arity$1 = check_box15527__1;
check_box15527.cljs$core$IFn$_invoke$arity$2 = check_box15527__2;
check_box15527.cljs$core$IFn$_invoke$arity$3 = check_box15527__3;
return check_box15527;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box15527);
/**
* Creates a radio button.
*/
sablono.core.radio_button15528 = (function() {
var radio_button15528 = null;
var radio_button15528__1 = (function (group){return radio_button15528.call(null,group,null);
});
var radio_button15528__2 = (function (group,checked_QMARK_){return radio_button15528.call(null,group,checked_QMARK_,"true");
});
var radio_button15528__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"radio",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
radio_button15528 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button15528__1.call(this,group);
case 2:
return radio_button15528__2.call(this,group,checked_QMARK_);
case 3:
return radio_button15528__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button15528.cljs$core$IFn$_invoke$arity$1 = radio_button15528__1;
radio_button15528.cljs$core$IFn$_invoke$arity$2 = radio_button15528__2;
radio_button15528.cljs$core$IFn$_invoke$arity$3 = radio_button15528__3;
return radio_button15528;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button15528);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options15529 = (function() {
var select_options15529 = null;
var select_options15529__1 = (function (coll){return select_options15529.call(null,coll,null);
});
var select_options15529__2 = (function (coll,selected){var iter__4117__auto__ = (function iter__15538(s__15539){return (new cljs.core.LazySeq(null,(function (){var s__15539__$1 = s__15539;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__15539__$1);if(temp__4092__auto__)
{var s__15539__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__15539__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__15539__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__15541 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__15540 = 0;while(true){
if((i__15540 < size__4116__auto__))
{var x = cljs.core._nth.call(null,c__4115__auto__,i__15540);cljs.core.chunk_append.call(null,b__15541,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__15544 = x;var text = cljs.core.nth.call(null,vec__15544,0,null);var val = cljs.core.nth.call(null,vec__15544,1,null);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options15529.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__15546 = (i__15540 + 1);
i__15540 = G__15546;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15541),iter__15538.call(null,cljs.core.chunk_rest.call(null,s__15539__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15541),null);
}
} else
{var x = cljs.core.first.call(null,s__15539__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__15545 = x;var text = cljs.core.nth.call(null,vec__15545,0,null);var val = cljs.core.nth.call(null,vec__15545,1,null);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options15529.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__15538.call(null,cljs.core.rest.call(null,s__15539__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__.call(null,coll);
});
select_options15529 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options15529__1.call(this,coll);
case 2:
return select_options15529__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options15529.cljs$core$IFn$_invoke$arity$1 = select_options15529__1;
select_options15529.cljs$core$IFn$_invoke$arity$2 = select_options15529__2;
return select_options15529;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options15529);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down15547 = (function() {
var drop_down15547 = null;
var drop_down15547__2 = (function (name,options){return drop_down15547.call(null,name,options,null);
});
var drop_down15547__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down15547 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down15547__2.call(this,name,options);
case 3:
return drop_down15547__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down15547.cljs$core$IFn$_invoke$arity$2 = drop_down15547__2;
drop_down15547.cljs$core$IFn$_invoke$arity$3 = drop_down15547__3;
return drop_down15547;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down15547);
/**
* Creates a text area element.
*/
sablono.core.text_area15548 = (function() {
var text_area15548 = null;
var text_area15548__1 = (function (name){return text_area15548.call(null,name,null);
});
var text_area15548__2 = (function (name,value){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",4305627820),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name)], null),sablono.util.as_str.call(null,value)], null);
});
text_area15548 = function(name,value){
switch(arguments.length){
case 1:
return text_area15548__1.call(this,name);
case 2:
return text_area15548__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area15548.cljs$core$IFn$_invoke$arity$1 = text_area15548__1;
text_area15548.cljs$core$IFn$_invoke$arity$2 = text_area15548__2;
return text_area15548;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area15548);
/**
* Creates a file upload input.
*/
sablono.core.file_upload15549 = (function file_upload15549(name){return sablono.core.input_field.call(null,"file",name,null);
});
sablono.core.file_upload = sablono.core.wrap_attrs.call(null,sablono.core.file_upload15549);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label15550 = (function label15550(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1116631654),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",2249940112),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label15550);
/**
* Creates a submit button.
*/
sablono.core.submit_button15551 = (function submit_button15551(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"submit",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button15551);
/**
* Creates a form reset button.
*/
sablono.core.reset_button15552 = (function reset_button15552(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"reset",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button15552);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to15553 = (function() { 
var form_to15553__delegate = function (p__15554,body){var vec__15556 = p__15554;var method = cljs.core.nth.call(null,vec__15556,0,null);var action = cljs.core.nth.call(null,vec__15556,1,null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1014006472),null,new cljs.core.Keyword(null,"post","post",1017351186),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),method_str,new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),"POST",new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to15553 = function (p__15554,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to15553__delegate.call(this,p__15554,body);};
form_to15553.cljs$lang$maxFixedArity = 1;
form_to15553.cljs$lang$applyTo = (function (arglist__15557){
var p__15554 = cljs.core.first(arglist__15557);
var body = cljs.core.rest(arglist__15557);
return form_to15553__delegate(p__15554,body);
});
form_to15553.cljs$core$IFn$_invoke$arity$variadic = form_to15553__delegate;
return form_to15553;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to15553);

//# sourceMappingURL=core.js.map