// Compiled by ClojureScript 0.0-2173
goog.provide('domina');
goog.require('cljs.core');
goog.require('goog.dom.classes');
goog.require('domina.support');
goog.require('goog.dom.classes');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.string');
goog.require('goog.dom.xml');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('goog.style');
goog.require('clojure.string');
goog.require('goog.dom.xml');
goog.require('goog.style');
goog.require('goog.dom.forms');
goog.require('domina.support');
goog.require('goog.events');
goog.require('cljs.core');
domina.re_html = /<|&#?\w+;/;
domina.re_leading_whitespace = /^\s+/;
domina.re_xhtml_tag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/i;
domina.re_tag_name = /<([\w:]+)/;
domina.re_no_inner_html = /<(?:script|style)/i;
domina.re_tbody = /<tbody/i;
var opt_wrapper_50164 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_50165 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_50166 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",new cljs.core.Keyword(null,"default","default",2558708147),"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_50165,table_section_wrapper_50165,opt_wrapper_50164,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_50166,table_section_wrapper_50165,cell_wrapper_50166,opt_wrapper_50164,table_section_wrapper_50165,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_50165]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3429__auto__ = div.firstChild;if(cljs.core.truth_(and__3429__auto__))
{return div.firstChild.childNodes;
} else
{return and__3429__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__50171 = cljs.core.seq.call(null,tbody);var chunk__50172 = null;var count__50173 = 0;var i__50174 = 0;while(true){
if((i__50174 < count__50173))
{var child = cljs.core._nth.call(null,chunk__50172,i__50174);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__50175 = seq__50171;
var G__50176 = chunk__50172;
var G__50177 = count__50173;
var G__50178 = (i__50174 + 1);
seq__50171 = G__50175;
chunk__50172 = G__50176;
count__50173 = G__50177;
i__50174 = G__50178;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__50171);if(temp__4092__auto__)
{var seq__50171__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__50171__$1))
{var c__4189__auto__ = cljs.core.chunk_first.call(null,seq__50171__$1);{
var G__50179 = cljs.core.chunk_rest.call(null,seq__50171__$1);
var G__50180 = c__4189__auto__;
var G__50181 = cljs.core.count.call(null,c__4189__auto__);
var G__50182 = 0;
seq__50171 = G__50179;
chunk__50172 = G__50180;
count__50173 = G__50181;
i__50174 = G__50182;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__50171__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__50183 = cljs.core.next.call(null,seq__50171__$1);
var G__50184 = null;
var G__50185 = 0;
var G__50186 = 0;
seq__50171 = G__50183;
chunk__50172 = G__50184;
count__50173 = G__50185;
i__50174 = G__50186;
continue;
}
}
} else
{return null;
}
}
break;
}
});
domina.restore_leading_whitespace_BANG_ = (function restore_leading_whitespace_BANG_(div,html){return div.insertBefore(document.createTextNode(cljs.core.first.call(null,cljs.core.re_find.call(null,domina.re_leading_whitespace,html))),div.firstChild);
});
/**
* takes an string of html and returns a NodeList of dom fragments
*/
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__50188 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__50188,0,null);var start_wrap = cljs.core.nth.call(null,vec__50188,1,null);var end_wrap = cljs.core.nth.call(null,vec__50188,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__50189 = wrapper.lastChild;
var G__50190 = (level - 1);
wrapper = G__50189;
level = G__50190;
continue;
}
} else
{return wrapper;
}
break;
}
})();if(cljs.core.truth_(domina.support.extraneous_tbody_QMARK_))
{domina.remove_extraneous_tbody_BANG_.call(null,div,html__$1,tag_name,start_wrap);
} else
{}
if(cljs.core.truth_((function (){var and__3429__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);if(and__3429__auto__)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else
{return and__3429__auto__;
}
})()))
{domina.restore_leading_whitespace_BANG_.call(null,div,html__$1);
} else
{}
return div.childNodes;
});
domina.string_to_dom = (function string_to_dom(s){if(cljs.core.truth_(cljs.core.re_find.call(null,domina.re_html,s)))
{return domina.html_to_dom.call(null,s);
} else
{return document.createTextNode(s);
}
});
domina.DomContent = (function (){var obj50192 = {};return obj50192;
})();
domina.nodes = (function nodes(content){if((function (){var and__3429__auto__ = content;if(and__3429__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3429__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__4068__auto__ = (((content == null))?null:content);return (function (){var or__3441__auto__ = (domina.nodes[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (domina.nodes["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){if((function (){var and__3429__auto__ = nodeseq;if(and__3429__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3429__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__4068__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__3441__auto__ = (domina.single_node[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (domina.single_node["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
}
}
})().call(null,nodeseq);
}
});
domina._STAR_debug_STAR_ = true;
/**
* @param {...*} var_args
*/
domina.log_debug = (function() { 
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__3429__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__3429__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3429__auto__;
}
})()))
{return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else
{return null;
}
};
var log_debug = function (var_args){
var mesg = null;if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log_debug__delegate.call(this,mesg);};
log_debug.cljs$lang$maxFixedArity = 0;
log_debug.cljs$lang$applyTo = (function (arglist__50193){
var mesg = cljs.core.seq(arglist__50193);
return log_debug__delegate(mesg);
});
log_debug.cljs$core$IFn$_invoke$arity$variadic = log_debug__delegate;
return log_debug;
})()
;
/**
* @param {...*} var_args
*/
domina.log = (function() { 
var log__delegate = function (mesg){if(cljs.core.truth_(window.console))
{return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else
{return null;
}
};
var log = function (var_args){
var mesg = null;if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log__delegate.call(this,mesg);};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__50194){
var mesg = cljs.core.seq(arglist__50194);
return log__delegate(mesg);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
/**
* Returns content containing a single node by looking up the given ID
*/
domina.by_id = (function by_id(id){return goog.dom.getElement(cljs.core.name.call(null,id));
});
/**
* Returns content containing nodes which have the specified CSS class.
*/
domina.by_class = (function by_class(class_name){return domina.normalize_seq.call(null,goog.dom.getElementsByClass(cljs.core.name.call(null,class_name)));
});
/**
* Gets all the child nodes of the elements in a content. Same as (xpath content '*') but more efficient.
*/
domina.children = (function children(content){return cljs.core.doall.call(null,cljs.core.mapcat.call(null,goog.dom.getChildren,domina.nodes.call(null,content)));
});
/**
* Returns the deepest common ancestor of the argument contents (which are presumed to be single nodes), or nil if they are from different documents.
* @param {...*} var_args
*/
domina.common_ancestor = (function() { 
var common_ancestor__delegate = function (contents){return cljs.core.apply.call(null,goog.dom.findCommonAncestor,cljs.core.map.call(null,domina.single_node,contents));
};
var common_ancestor = function (var_args){
var contents = null;if (arguments.length > 0) {
  contents = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return common_ancestor__delegate.call(this,contents);};
common_ancestor.cljs$lang$maxFixedArity = 0;
common_ancestor.cljs$lang$applyTo = (function (arglist__50195){
var contents = cljs.core.seq(arglist__50195);
return common_ancestor__delegate(contents);
});
common_ancestor.cljs$core$IFn$_invoke$arity$variadic = common_ancestor__delegate;
return common_ancestor;
})()
;
/**
* Returns true if the first argument is an ancestor of the second argument. Presumes both arguments are single-node contents.
*/
domina.ancestor_QMARK_ = (function ancestor_QMARK_(ancestor_content,descendant_content){return cljs.core._EQ_.call(null,domina.common_ancestor.call(null,ancestor_content,descendant_content),domina.single_node.call(null,ancestor_content));
});
/**
* Returns a deep clone of content.
*/
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__50196_SHARP_){return p1__50196_SHARP_.cloneNode(true);
}),domina.nodes.call(null,content));
});
/**
* Given a parent and child contents, appends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.append_BANG_ = (function append_BANG_(parent_content,child_content){domina.apply_with_cloning.call(null,goog.dom.appendChild,parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, appends each of the children to all of the parents at the specified index. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__50197_SHARP_,p2__50198_SHARP_){return goog.dom.insertChildAt(p1__50197_SHARP_,p2__50198_SHARP_,idx);
}),parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.prepend_BANG_ = (function prepend_BANG_(parent_content,child_content){domina.insert_BANG_.call(null,parent_content,child_content,0);
return parent_content;
});
/**
* Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__50200_SHARP_,p2__50199_SHARP_){return goog.dom.insertSiblingBefore(p2__50199_SHARP_,p1__50200_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__50202_SHARP_,p2__50201_SHARP_){return goog.dom.insertSiblingAfter(p2__50201_SHARP_,p1__50202_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__50204_SHARP_,p2__50203_SHARP_){return goog.dom.replaceNode(p2__50203_SHARP_,p1__50204_SHARP_);
}),old_content,new_content);
return old_content;
});
/**
* Removes all the nodes in a content from the DOM and returns them.
*/
domina.detach_BANG_ = (function detach_BANG_(content){return cljs.core.doall.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the nodes in a content from the DOM. Returns nil.
*/
domina.destroy_BANG_ = (function destroy_BANG_(content){return cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the child nodes in a content from the DOM. Returns the original content.
*/
domina.destroy_children_BANG_ = (function destroy_children_BANG_(content){cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeChildren,domina.nodes.call(null,content)));
return content;
});
/**
* Gets the value of a CSS property. Assumes content will be a single node. Name may be a string or keyword. Returns nil if there is no value set for the style.
*/
domina.style = (function style(content,name){var s = goog.style.getStyle(domina.single_node.call(null,content),cljs.core.name.call(null,name));if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,s)))
{return null;
} else
{return s;
}
});
/**
* Gets the value of an HTML attribute. Assumes content will be a single node. Name may be a stirng or keyword. Returns nil if there is no value set for the style.
*/
domina.attr = (function attr(content,name){return domina.single_node.call(null,content).getAttribute(cljs.core.name.call(null,name));
});
/**
* Sets the value of a CSS property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (content,name,value){var seq__50209_50213 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__50210_50214 = null;var count__50211_50215 = 0;var i__50212_50216 = 0;while(true){
if((i__50212_50216 < count__50211_50215))
{var n_50217 = cljs.core._nth.call(null,chunk__50210_50214,i__50212_50216);goog.style.setStyle(n_50217,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__50218 = seq__50209_50213;
var G__50219 = chunk__50210_50214;
var G__50220 = count__50211_50215;
var G__50221 = (i__50212_50216 + 1);
seq__50209_50213 = G__50218;
chunk__50210_50214 = G__50219;
count__50211_50215 = G__50220;
i__50212_50216 = G__50221;
continue;
}
} else
{var temp__4092__auto___50222 = cljs.core.seq.call(null,seq__50209_50213);if(temp__4092__auto___50222)
{var seq__50209_50223__$1 = temp__4092__auto___50222;if(cljs.core.chunked_seq_QMARK_.call(null,seq__50209_50223__$1))
{var c__4189__auto___50224 = cljs.core.chunk_first.call(null,seq__50209_50223__$1);{
var G__50225 = cljs.core.chunk_rest.call(null,seq__50209_50223__$1);
var G__50226 = c__4189__auto___50224;
var G__50227 = cljs.core.count.call(null,c__4189__auto___50224);
var G__50228 = 0;
seq__50209_50213 = G__50225;
chunk__50210_50214 = G__50226;
count__50211_50215 = G__50227;
i__50212_50216 = G__50228;
continue;
}
} else
{var n_50229 = cljs.core.first.call(null,seq__50209_50223__$1);goog.style.setStyle(n_50229,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__50230 = cljs.core.next.call(null,seq__50209_50223__$1);
var G__50231 = null;
var G__50232 = 0;
var G__50233 = 0;
seq__50209_50213 = G__50230;
chunk__50210_50214 = G__50231;
count__50211_50215 = G__50232;
i__50212_50216 = G__50233;
continue;
}
}
} else
{}
}
break;
}
return content;
};
var set_style_BANG_ = function (content,name,var_args){
var value = null;if (arguments.length > 2) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return set_style_BANG___delegate.call(this,content,name,value);};
set_style_BANG_.cljs$lang$maxFixedArity = 2;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__50234){
var content = cljs.core.first(arglist__50234);
arglist__50234 = cljs.core.next(arglist__50234);
var name = cljs.core.first(arglist__50234);
var value = cljs.core.rest(arglist__50234);
return set_style_BANG___delegate(content,name,value);
});
set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_style_BANG___delegate;
return set_style_BANG_;
})()
;
/**
* Sets the value of an HTML property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_attr_BANG_ = (function() { 
var set_attr_BANG___delegate = function (content,name,value){var seq__50239_50243 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__50240_50244 = null;var count__50241_50245 = 0;var i__50242_50246 = 0;while(true){
if((i__50242_50246 < count__50241_50245))
{var n_50247 = cljs.core._nth.call(null,chunk__50240_50244,i__50242_50246);n_50247.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__50248 = seq__50239_50243;
var G__50249 = chunk__50240_50244;
var G__50250 = count__50241_50245;
var G__50251 = (i__50242_50246 + 1);
seq__50239_50243 = G__50248;
chunk__50240_50244 = G__50249;
count__50241_50245 = G__50250;
i__50242_50246 = G__50251;
continue;
}
} else
{var temp__4092__auto___50252 = cljs.core.seq.call(null,seq__50239_50243);if(temp__4092__auto___50252)
{var seq__50239_50253__$1 = temp__4092__auto___50252;if(cljs.core.chunked_seq_QMARK_.call(null,seq__50239_50253__$1))
{var c__4189__auto___50254 = cljs.core.chunk_first.call(null,seq__50239_50253__$1);{
var G__50255 = cljs.core.chunk_rest.call(null,seq__50239_50253__$1);
var G__50256 = c__4189__auto___50254;
var G__50257 = cljs.core.count.call(null,c__4189__auto___50254);
var G__50258 = 0;
seq__50239_50243 = G__50255;
chunk__50240_50244 = G__50256;
count__50241_50245 = G__50257;
i__50242_50246 = G__50258;
continue;
}
} else
{var n_50259 = cljs.core.first.call(null,seq__50239_50253__$1);n_50259.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__50260 = cljs.core.next.call(null,seq__50239_50253__$1);
var G__50261 = null;
var G__50262 = 0;
var G__50263 = 0;
seq__50239_50243 = G__50260;
chunk__50240_50244 = G__50261;
count__50241_50245 = G__50262;
i__50242_50246 = G__50263;
continue;
}
}
} else
{}
}
break;
}
return content;
};
var set_attr_BANG_ = function (content,name,var_args){
var value = null;if (arguments.length > 2) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return set_attr_BANG___delegate.call(this,content,name,value);};
set_attr_BANG_.cljs$lang$maxFixedArity = 2;
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__50264){
var content = cljs.core.first(arglist__50264);
arglist__50264 = cljs.core.next(arglist__50264);
var name = cljs.core.first(arglist__50264);
var value = cljs.core.rest(arglist__50264);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__50269_50273 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__50270_50274 = null;var count__50271_50275 = 0;var i__50272_50276 = 0;while(true){
if((i__50272_50276 < count__50271_50275))
{var n_50277 = cljs.core._nth.call(null,chunk__50270_50274,i__50272_50276);n_50277.removeAttribute(cljs.core.name.call(null,name));
{
var G__50278 = seq__50269_50273;
var G__50279 = chunk__50270_50274;
var G__50280 = count__50271_50275;
var G__50281 = (i__50272_50276 + 1);
seq__50269_50273 = G__50278;
chunk__50270_50274 = G__50279;
count__50271_50275 = G__50280;
i__50272_50276 = G__50281;
continue;
}
} else
{var temp__4092__auto___50282 = cljs.core.seq.call(null,seq__50269_50273);if(temp__4092__auto___50282)
{var seq__50269_50283__$1 = temp__4092__auto___50282;if(cljs.core.chunked_seq_QMARK_.call(null,seq__50269_50283__$1))
{var c__4189__auto___50284 = cljs.core.chunk_first.call(null,seq__50269_50283__$1);{
var G__50285 = cljs.core.chunk_rest.call(null,seq__50269_50283__$1);
var G__50286 = c__4189__auto___50284;
var G__50287 = cljs.core.count.call(null,c__4189__auto___50284);
var G__50288 = 0;
seq__50269_50273 = G__50285;
chunk__50270_50274 = G__50286;
count__50271_50275 = G__50287;
i__50272_50276 = G__50288;
continue;
}
} else
{var n_50289 = cljs.core.first.call(null,seq__50269_50283__$1);n_50289.removeAttribute(cljs.core.name.call(null,name));
{
var G__50290 = cljs.core.next.call(null,seq__50269_50283__$1);
var G__50291 = null;
var G__50292 = 0;
var G__50293 = 0;
seq__50269_50273 = G__50290;
chunk__50270_50274 = G__50291;
count__50271_50275 = G__50292;
i__50272_50276 = G__50293;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Parses a CSS style string and returns the properties as a map.
*/
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__50295 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__50295,0,null);var v = cljs.core.nth.call(null,vec__50295,1,null);if(cljs.core.truth_((function (){var and__3429__auto__ = k;if(cljs.core.truth_(and__3429__auto__))
{return v;
} else
{return and__3429__auto__;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k.toLowerCase()),v);
} else
{return acc;
}
}),cljs.core.PersistentArrayMap.EMPTY,style.split(/\s*;\s*/));
});
/**
* Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
*/
domina.styles = (function styles(content){var style = domina.attr.call(null,content,"style");if(typeof style === 'string')
{return domina.parse_style_attributes.call(null,style);
} else
{if((style == null))
{return cljs.core.PersistentArrayMap.EMPTY;
} else
{if(cljs.core.truth_(style.cssText))
{return domina.parse_style_attributes.call(null,style.cssText);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.PersistentArrayMap.EMPTY;
} else
{return null;
}
}
}
}
});
/**
* Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
*/
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__50296_SHARP_){var attr = attrs__$1.item(p1__50296_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__50303_50309 = cljs.core.seq.call(null,styles);var chunk__50304_50310 = null;var count__50305_50311 = 0;var i__50306_50312 = 0;while(true){
if((i__50306_50312 < count__50305_50311))
{var vec__50307_50313 = cljs.core._nth.call(null,chunk__50304_50310,i__50306_50312);var name_50314 = cljs.core.nth.call(null,vec__50307_50313,0,null);var value_50315 = cljs.core.nth.call(null,vec__50307_50313,1,null);domina.set_style_BANG_.call(null,content,name_50314,value_50315);
{
var G__50316 = seq__50303_50309;
var G__50317 = chunk__50304_50310;
var G__50318 = count__50305_50311;
var G__50319 = (i__50306_50312 + 1);
seq__50303_50309 = G__50316;
chunk__50304_50310 = G__50317;
count__50305_50311 = G__50318;
i__50306_50312 = G__50319;
continue;
}
} else
{var temp__4092__auto___50320 = cljs.core.seq.call(null,seq__50303_50309);if(temp__4092__auto___50320)
{var seq__50303_50321__$1 = temp__4092__auto___50320;if(cljs.core.chunked_seq_QMARK_.call(null,seq__50303_50321__$1))
{var c__4189__auto___50322 = cljs.core.chunk_first.call(null,seq__50303_50321__$1);{
var G__50323 = cljs.core.chunk_rest.call(null,seq__50303_50321__$1);
var G__50324 = c__4189__auto___50322;
var G__50325 = cljs.core.count.call(null,c__4189__auto___50322);
var G__50326 = 0;
seq__50303_50309 = G__50323;
chunk__50304_50310 = G__50324;
count__50305_50311 = G__50325;
i__50306_50312 = G__50326;
continue;
}
} else
{var vec__50308_50327 = cljs.core.first.call(null,seq__50303_50321__$1);var name_50328 = cljs.core.nth.call(null,vec__50308_50327,0,null);var value_50329 = cljs.core.nth.call(null,vec__50308_50327,1,null);domina.set_style_BANG_.call(null,content,name_50328,value_50329);
{
var G__50330 = cljs.core.next.call(null,seq__50303_50321__$1);
var G__50331 = null;
var G__50332 = 0;
var G__50333 = 0;
seq__50303_50309 = G__50330;
chunk__50304_50310 = G__50331;
count__50305_50311 = G__50332;
i__50306_50312 = G__50333;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Sets the specified attributes for each node in the content, given a map of names and values. Names may be a string or keyword. Values will be cast to a string, multiple values wil be concatenated.
*/
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__50340_50346 = cljs.core.seq.call(null,attrs);var chunk__50341_50347 = null;var count__50342_50348 = 0;var i__50343_50349 = 0;while(true){
if((i__50343_50349 < count__50342_50348))
{var vec__50344_50350 = cljs.core._nth.call(null,chunk__50341_50347,i__50343_50349);var name_50351 = cljs.core.nth.call(null,vec__50344_50350,0,null);var value_50352 = cljs.core.nth.call(null,vec__50344_50350,1,null);domina.set_attr_BANG_.call(null,content,name_50351,value_50352);
{
var G__50353 = seq__50340_50346;
var G__50354 = chunk__50341_50347;
var G__50355 = count__50342_50348;
var G__50356 = (i__50343_50349 + 1);
seq__50340_50346 = G__50353;
chunk__50341_50347 = G__50354;
count__50342_50348 = G__50355;
i__50343_50349 = G__50356;
continue;
}
} else
{var temp__4092__auto___50357 = cljs.core.seq.call(null,seq__50340_50346);if(temp__4092__auto___50357)
{var seq__50340_50358__$1 = temp__4092__auto___50357;if(cljs.core.chunked_seq_QMARK_.call(null,seq__50340_50358__$1))
{var c__4189__auto___50359 = cljs.core.chunk_first.call(null,seq__50340_50358__$1);{
var G__50360 = cljs.core.chunk_rest.call(null,seq__50340_50358__$1);
var G__50361 = c__4189__auto___50359;
var G__50362 = cljs.core.count.call(null,c__4189__auto___50359);
var G__50363 = 0;
seq__50340_50346 = G__50360;
chunk__50341_50347 = G__50361;
count__50342_50348 = G__50362;
i__50343_50349 = G__50363;
continue;
}
} else
{var vec__50345_50364 = cljs.core.first.call(null,seq__50340_50358__$1);var name_50365 = cljs.core.nth.call(null,vec__50345_50364,0,null);var value_50366 = cljs.core.nth.call(null,vec__50345_50364,1,null);domina.set_attr_BANG_.call(null,content,name_50365,value_50366);
{
var G__50367 = cljs.core.next.call(null,seq__50340_50358__$1);
var G__50368 = null;
var G__50369 = 0;
var G__50370 = 0;
seq__50340_50346 = G__50367;
chunk__50341_50347 = G__50368;
count__50342_50348 = G__50369;
i__50343_50349 = G__50370;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns true if the node has the specified CSS class. Assumes content is a single node.
*/
domina.has_class_QMARK_ = (function has_class_QMARK_(content,class$){return goog.dom.classes.has(domina.single_node.call(null,content),class$);
});
/**
* Adds the specified CSS class to each node in the content.
*/
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__50375_50379 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__50376_50380 = null;var count__50377_50381 = 0;var i__50378_50382 = 0;while(true){
if((i__50378_50382 < count__50377_50381))
{var node_50383 = cljs.core._nth.call(null,chunk__50376_50380,i__50378_50382);goog.dom.classes.add(node_50383,class$);
{
var G__50384 = seq__50375_50379;
var G__50385 = chunk__50376_50380;
var G__50386 = count__50377_50381;
var G__50387 = (i__50378_50382 + 1);
seq__50375_50379 = G__50384;
chunk__50376_50380 = G__50385;
count__50377_50381 = G__50386;
i__50378_50382 = G__50387;
continue;
}
} else
{var temp__4092__auto___50388 = cljs.core.seq.call(null,seq__50375_50379);if(temp__4092__auto___50388)
{var seq__50375_50389__$1 = temp__4092__auto___50388;if(cljs.core.chunked_seq_QMARK_.call(null,seq__50375_50389__$1))
{var c__4189__auto___50390 = cljs.core.chunk_first.call(null,seq__50375_50389__$1);{
var G__50391 = cljs.core.chunk_rest.call(null,seq__50375_50389__$1);
var G__50392 = c__4189__auto___50390;
var G__50393 = cljs.core.count.call(null,c__4189__auto___50390);
var G__50394 = 0;
seq__50375_50379 = G__50391;
chunk__50376_50380 = G__50392;
count__50377_50381 = G__50393;
i__50378_50382 = G__50394;
continue;
}
} else
{var node_50395 = cljs.core.first.call(null,seq__50375_50389__$1);goog.dom.classes.add(node_50395,class$);
{
var G__50396 = cljs.core.next.call(null,seq__50375_50389__$1);
var G__50397 = null;
var G__50398 = 0;
var G__50399 = 0;
seq__50375_50379 = G__50396;
chunk__50376_50380 = G__50397;
count__50377_50381 = G__50398;
i__50378_50382 = G__50399;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Removes the specified CSS class from each node in the content.
*/
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__50404_50408 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__50405_50409 = null;var count__50406_50410 = 0;var i__50407_50411 = 0;while(true){
if((i__50407_50411 < count__50406_50410))
{var node_50412 = cljs.core._nth.call(null,chunk__50405_50409,i__50407_50411);goog.dom.classes.remove(node_50412,class$);
{
var G__50413 = seq__50404_50408;
var G__50414 = chunk__50405_50409;
var G__50415 = count__50406_50410;
var G__50416 = (i__50407_50411 + 1);
seq__50404_50408 = G__50413;
chunk__50405_50409 = G__50414;
count__50406_50410 = G__50415;
i__50407_50411 = G__50416;
continue;
}
} else
{var temp__4092__auto___50417 = cljs.core.seq.call(null,seq__50404_50408);if(temp__4092__auto___50417)
{var seq__50404_50418__$1 = temp__4092__auto___50417;if(cljs.core.chunked_seq_QMARK_.call(null,seq__50404_50418__$1))
{var c__4189__auto___50419 = cljs.core.chunk_first.call(null,seq__50404_50418__$1);{
var G__50420 = cljs.core.chunk_rest.call(null,seq__50404_50418__$1);
var G__50421 = c__4189__auto___50419;
var G__50422 = cljs.core.count.call(null,c__4189__auto___50419);
var G__50423 = 0;
seq__50404_50408 = G__50420;
chunk__50405_50409 = G__50421;
count__50406_50410 = G__50422;
i__50407_50411 = G__50423;
continue;
}
} else
{var node_50424 = cljs.core.first.call(null,seq__50404_50418__$1);goog.dom.classes.remove(node_50424,class$);
{
var G__50425 = cljs.core.next.call(null,seq__50404_50418__$1);
var G__50426 = null;
var G__50427 = 0;
var G__50428 = 0;
seq__50404_50408 = G__50425;
chunk__50405_50409 = G__50426;
count__50406_50410 = G__50427;
i__50407_50411 = G__50428;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Toggles the specified CSS class from each node in the content.
*/
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__50433_50437 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__50434_50438 = null;var count__50435_50439 = 0;var i__50436_50440 = 0;while(true){
if((i__50436_50440 < count__50435_50439))
{var node_50441 = cljs.core._nth.call(null,chunk__50434_50438,i__50436_50440);goog.dom.classes.toggle(node_50441,class$);
{
var G__50442 = seq__50433_50437;
var G__50443 = chunk__50434_50438;
var G__50444 = count__50435_50439;
var G__50445 = (i__50436_50440 + 1);
seq__50433_50437 = G__50442;
chunk__50434_50438 = G__50443;
count__50435_50439 = G__50444;
i__50436_50440 = G__50445;
continue;
}
} else
{var temp__4092__auto___50446 = cljs.core.seq.call(null,seq__50433_50437);if(temp__4092__auto___50446)
{var seq__50433_50447__$1 = temp__4092__auto___50446;if(cljs.core.chunked_seq_QMARK_.call(null,seq__50433_50447__$1))
{var c__4189__auto___50448 = cljs.core.chunk_first.call(null,seq__50433_50447__$1);{
var G__50449 = cljs.core.chunk_rest.call(null,seq__50433_50447__$1);
var G__50450 = c__4189__auto___50448;
var G__50451 = cljs.core.count.call(null,c__4189__auto___50448);
var G__50452 = 0;
seq__50433_50437 = G__50449;
chunk__50434_50438 = G__50450;
count__50435_50439 = G__50451;
i__50436_50440 = G__50452;
continue;
}
} else
{var node_50453 = cljs.core.first.call(null,seq__50433_50447__$1);goog.dom.classes.toggle(node_50453,class$);
{
var G__50454 = cljs.core.next.call(null,seq__50433_50447__$1);
var G__50455 = null;
var G__50456 = 0;
var G__50457 = 0;
seq__50433_50437 = G__50454;
chunk__50434_50438 = G__50455;
count__50435_50439 = G__50456;
i__50436_50440 = G__50457;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns a seq of all the CSS classes currently applied to a node. Assumes content is a single node.
*/
domina.classes = (function classes(content){return cljs.core.seq.call(null,goog.dom.classes.get(domina.single_node.call(null,content)));
});
/**
* Sets the class attribute of the content nodes to classes, which can
* be either a class attribute string or a seq of classname strings.
*/
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_50466__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__50462_50467 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__50463_50468 = null;var count__50464_50469 = 0;var i__50465_50470 = 0;while(true){
if((i__50465_50470 < count__50464_50469))
{var node_50471 = cljs.core._nth.call(null,chunk__50463_50468,i__50465_50470);goog.dom.classes.set(node_50471,classes_50466__$1);
{
var G__50472 = seq__50462_50467;
var G__50473 = chunk__50463_50468;
var G__50474 = count__50464_50469;
var G__50475 = (i__50465_50470 + 1);
seq__50462_50467 = G__50472;
chunk__50463_50468 = G__50473;
count__50464_50469 = G__50474;
i__50465_50470 = G__50475;
continue;
}
} else
{var temp__4092__auto___50476 = cljs.core.seq.call(null,seq__50462_50467);if(temp__4092__auto___50476)
{var seq__50462_50477__$1 = temp__4092__auto___50476;if(cljs.core.chunked_seq_QMARK_.call(null,seq__50462_50477__$1))
{var c__4189__auto___50478 = cljs.core.chunk_first.call(null,seq__50462_50477__$1);{
var G__50479 = cljs.core.chunk_rest.call(null,seq__50462_50477__$1);
var G__50480 = c__4189__auto___50478;
var G__50481 = cljs.core.count.call(null,c__4189__auto___50478);
var G__50482 = 0;
seq__50462_50467 = G__50479;
chunk__50463_50468 = G__50480;
count__50464_50469 = G__50481;
i__50465_50470 = G__50482;
continue;
}
} else
{var node_50483 = cljs.core.first.call(null,seq__50462_50477__$1);goog.dom.classes.set(node_50483,classes_50466__$1);
{
var G__50484 = cljs.core.next.call(null,seq__50462_50477__$1);
var G__50485 = null;
var G__50486 = 0;
var G__50487 = 0;
seq__50462_50467 = G__50484;
chunk__50463_50468 = G__50485;
count__50464_50469 = G__50486;
i__50465_50470 = G__50487;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the text of a node. Assumes content is a single node. For consistency across browsers, will always trim whitespace of the beginning and end of the returned text.
*/
domina.text = (function text(content){return goog.string.trim(goog.dom.getTextContent(domina.single_node.call(null,content)));
});
/**
* Sets the text value of all the nodes in the given content.
*/
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__50492_50496 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__50493_50497 = null;var count__50494_50498 = 0;var i__50495_50499 = 0;while(true){
if((i__50495_50499 < count__50494_50498))
{var node_50500 = cljs.core._nth.call(null,chunk__50493_50497,i__50495_50499);goog.dom.setTextContent(node_50500,value);
{
var G__50501 = seq__50492_50496;
var G__50502 = chunk__50493_50497;
var G__50503 = count__50494_50498;
var G__50504 = (i__50495_50499 + 1);
seq__50492_50496 = G__50501;
chunk__50493_50497 = G__50502;
count__50494_50498 = G__50503;
i__50495_50499 = G__50504;
continue;
}
} else
{var temp__4092__auto___50505 = cljs.core.seq.call(null,seq__50492_50496);if(temp__4092__auto___50505)
{var seq__50492_50506__$1 = temp__4092__auto___50505;if(cljs.core.chunked_seq_QMARK_.call(null,seq__50492_50506__$1))
{var c__4189__auto___50507 = cljs.core.chunk_first.call(null,seq__50492_50506__$1);{
var G__50508 = cljs.core.chunk_rest.call(null,seq__50492_50506__$1);
var G__50509 = c__4189__auto___50507;
var G__50510 = cljs.core.count.call(null,c__4189__auto___50507);
var G__50511 = 0;
seq__50492_50496 = G__50508;
chunk__50493_50497 = G__50509;
count__50494_50498 = G__50510;
i__50495_50499 = G__50511;
continue;
}
} else
{var node_50512 = cljs.core.first.call(null,seq__50492_50506__$1);goog.dom.setTextContent(node_50512,value);
{
var G__50513 = cljs.core.next.call(null,seq__50492_50506__$1);
var G__50514 = null;
var G__50515 = 0;
var G__50516 = 0;
seq__50492_50496 = G__50513;
chunk__50493_50497 = G__50514;
count__50494_50498 = G__50515;
i__50495_50499 = G__50516;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the value of a node (presumably a form field). Assumes content is a single node.
*/
domina.value = (function value(content){return goog.dom.forms.getValue(domina.single_node.call(null,content));
});
/**
* Sets the value of all the nodes (presumably form fields) in the given content.
*/
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__50521_50525 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__50522_50526 = null;var count__50523_50527 = 0;var i__50524_50528 = 0;while(true){
if((i__50524_50528 < count__50523_50527))
{var node_50529 = cljs.core._nth.call(null,chunk__50522_50526,i__50524_50528);goog.dom.forms.setValue(node_50529,value);
{
var G__50530 = seq__50521_50525;
var G__50531 = chunk__50522_50526;
var G__50532 = count__50523_50527;
var G__50533 = (i__50524_50528 + 1);
seq__50521_50525 = G__50530;
chunk__50522_50526 = G__50531;
count__50523_50527 = G__50532;
i__50524_50528 = G__50533;
continue;
}
} else
{var temp__4092__auto___50534 = cljs.core.seq.call(null,seq__50521_50525);if(temp__4092__auto___50534)
{var seq__50521_50535__$1 = temp__4092__auto___50534;if(cljs.core.chunked_seq_QMARK_.call(null,seq__50521_50535__$1))
{var c__4189__auto___50536 = cljs.core.chunk_first.call(null,seq__50521_50535__$1);{
var G__50537 = cljs.core.chunk_rest.call(null,seq__50521_50535__$1);
var G__50538 = c__4189__auto___50536;
var G__50539 = cljs.core.count.call(null,c__4189__auto___50536);
var G__50540 = 0;
seq__50521_50525 = G__50537;
chunk__50522_50526 = G__50538;
count__50523_50527 = G__50539;
i__50524_50528 = G__50540;
continue;
}
} else
{var node_50541 = cljs.core.first.call(null,seq__50521_50535__$1);goog.dom.forms.setValue(node_50541,value);
{
var G__50542 = cljs.core.next.call(null,seq__50521_50535__$1);
var G__50543 = null;
var G__50544 = 0;
var G__50545 = 0;
seq__50521_50525 = G__50542;
chunk__50522_50526 = G__50543;
count__50523_50527 = G__50544;
i__50524_50528 = G__50545;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the innerHTML of a node. Assumes content is a single node.
*/
domina.html = (function html(content){return domina.single_node.call(null,content).innerHTML;
});
domina.replace_children_BANG_ = (function replace_children_BANG_(content,inner_content){return domina.append_BANG_.call(null,domina.destroy_children_BANG_.call(null,content),inner_content);
});
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))].join('').toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__3429__auto__ = allows_inner_html_QMARK_;if(and__3429__auto__)
{var and__3429__auto____$1 = (function (){var or__3441__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();if(cljs.core.truth_(and__3429__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__3429__auto____$1;
}
} else
{return and__3429__auto__;
}
})()))
{var value_50556 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__50552_50557 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__50553_50558 = null;var count__50554_50559 = 0;var i__50555_50560 = 0;while(true){
if((i__50555_50560 < count__50554_50559))
{var node_50561 = cljs.core._nth.call(null,chunk__50553_50558,i__50555_50560);node_50561.innerHTML = value_50556;
{
var G__50562 = seq__50552_50557;
var G__50563 = chunk__50553_50558;
var G__50564 = count__50554_50559;
var G__50565 = (i__50555_50560 + 1);
seq__50552_50557 = G__50562;
chunk__50553_50558 = G__50563;
count__50554_50559 = G__50564;
i__50555_50560 = G__50565;
continue;
}
} else
{var temp__4092__auto___50566 = cljs.core.seq.call(null,seq__50552_50557);if(temp__4092__auto___50566)
{var seq__50552_50567__$1 = temp__4092__auto___50566;if(cljs.core.chunked_seq_QMARK_.call(null,seq__50552_50567__$1))
{var c__4189__auto___50568 = cljs.core.chunk_first.call(null,seq__50552_50567__$1);{
var G__50569 = cljs.core.chunk_rest.call(null,seq__50552_50567__$1);
var G__50570 = c__4189__auto___50568;
var G__50571 = cljs.core.count.call(null,c__4189__auto___50568);
var G__50572 = 0;
seq__50552_50557 = G__50569;
chunk__50553_50558 = G__50570;
count__50554_50559 = G__50571;
i__50555_50560 = G__50572;
continue;
}
} else
{var node_50573 = cljs.core.first.call(null,seq__50552_50567__$1);node_50573.innerHTML = value_50556;
{
var G__50574 = cljs.core.next.call(null,seq__50552_50567__$1);
var G__50575 = null;
var G__50576 = 0;
var G__50577 = 0;
seq__50552_50557 = G__50574;
chunk__50553_50558 = G__50575;
count__50554_50559 = G__50576;
i__50555_50560 = G__50577;
continue;
}
}
} else
{}
}
break;
}
}catch (e50551){if((e50551 instanceof Error))
{var e_50578 = e50551;domina.replace_children_BANG_.call(null,content,value_50556);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e50551;
} else
{}
}
}} else
{domina.replace_children_BANG_.call(null,content,html_string);
}
return content;
});
/**
* Sets the innerHTML value for all the nodes in the given content.
*/
domina.set_html_BANG_ = (function set_html_BANG_(content,inner_content){if(typeof inner_content === 'string')
{return domina.set_inner_html_BANG_.call(null,content,inner_content);
} else
{return domina.replace_children_BANG_.call(null,content,inner_content);
}
});
/**
* Returns data associated with a node for a given key. Assumes
* content is a single node. If the bubble parameter is set to true,
* will search parent nodes if the key is not found.
*/
domina.get_data = (function() {
var get_data = null;
var get_data__2 = (function (node,key){return get_data.call(null,node,key,false);
});
var get_data__3 = (function (node,key,bubble){var m = domina.single_node.call(null,node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);if(cljs.core.truth_((function (){var and__3429__auto__ = bubble;if(cljs.core.truth_(and__3429__auto__))
{return (value == null);
} else
{return and__3429__auto__;
}
})()))
{var temp__4092__auto__ = domina.single_node.call(null,node).parentNode;if(cljs.core.truth_(temp__4092__auto__))
{var parent = temp__4092__auto__;return get_data.call(null,parent,key,true);
} else
{return null;
}
} else
{return value;
}
});
get_data = function(node,key,bubble){
switch(arguments.length){
case 2:
return get_data__2.call(this,node,key);
case 3:
return get_data__3.call(this,node,key,bubble);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_data.cljs$core$IFn$_invoke$arity$2 = get_data__2;
get_data.cljs$core$IFn$_invoke$arity$3 = get_data__3;
return get_data;
})()
;
/**
* Sets a data on the node for a given key. Assumes content is a
* single node. Data should be ClojureScript values and data structures
* only; using other objects as data may result in memory leaks on some
* browsers.
*/
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__3441__auto__ = domina.single_node.call(null,node).__domina_data;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})();return domina.single_node.call(null,node).__domina_data = cljs.core.assoc.call(null,m,key,value);
});
/**
* Takes a two-arg function, a reference DomContent and new
* DomContent. Applies the function for each reference / content
* combination. Uses clones of the new content for each additional
* parent after the first.
*/
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__50585_50589 = cljs.core.seq.call(null,children);var chunk__50586_50590 = null;var count__50587_50591 = 0;var i__50588_50592 = 0;while(true){
if((i__50588_50592 < count__50587_50591))
{var child_50593 = cljs.core._nth.call(null,chunk__50586_50590,i__50588_50592);frag.appendChild(child_50593);
{
var G__50594 = seq__50585_50589;
var G__50595 = chunk__50586_50590;
var G__50596 = count__50587_50591;
var G__50597 = (i__50588_50592 + 1);
seq__50585_50589 = G__50594;
chunk__50586_50590 = G__50595;
count__50587_50591 = G__50596;
i__50588_50592 = G__50597;
continue;
}
} else
{var temp__4092__auto___50598 = cljs.core.seq.call(null,seq__50585_50589);if(temp__4092__auto___50598)
{var seq__50585_50599__$1 = temp__4092__auto___50598;if(cljs.core.chunked_seq_QMARK_.call(null,seq__50585_50599__$1))
{var c__4189__auto___50600 = cljs.core.chunk_first.call(null,seq__50585_50599__$1);{
var G__50601 = cljs.core.chunk_rest.call(null,seq__50585_50599__$1);
var G__50602 = c__4189__auto___50600;
var G__50603 = cljs.core.count.call(null,c__4189__auto___50600);
var G__50604 = 0;
seq__50585_50589 = G__50601;
chunk__50586_50590 = G__50602;
count__50587_50591 = G__50603;
i__50588_50592 = G__50604;
continue;
}
} else
{var child_50605 = cljs.core.first.call(null,seq__50585_50599__$1);frag.appendChild(child_50605);
{
var G__50606 = cljs.core.next.call(null,seq__50585_50599__$1);
var G__50607 = null;
var G__50608 = 0;
var G__50609 = 0;
seq__50585_50589 = G__50606;
chunk__50586_50590 = G__50607;
count__50587_50591 = G__50608;
i__50588_50592 = G__50609;
continue;
}
}
} else
{}
}
break;
}
return frag;
})();var other_children = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents) - 1),((function (parents,children,first_child){
return (function (){return first_child.cloneNode(true);
});})(parents,children,first_child))
));if(cljs.core.seq.call(null,parents))
{f.call(null,cljs.core.first.call(null,parents),first_child);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__50579_SHARP_,p2__50580_SHARP_){return f.call(null,p1__50579_SHARP_,p2__50580_SHARP_);
}),cljs.core.rest.call(null,parents),other_children));
} else
{return null;
}
});
domina.lazy_nl_via_item = (function() {
var lazy_nl_via_item = null;
var lazy_nl_via_item__1 = (function (nl){return lazy_nl_via_item.call(null,nl,0);
});
var lazy_nl_via_item__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,nl.item(n),lazy_nl_via_item.call(null,nl,(n + 1)));
}),null,null));
} else
{return null;
}
});
lazy_nl_via_item = function(nl,n){
switch(arguments.length){
case 1:
return lazy_nl_via_item__1.call(this,nl);
case 2:
return lazy_nl_via_item__2.call(this,nl,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lazy_nl_via_item.cljs$core$IFn$_invoke$arity$1 = lazy_nl_via_item__1;
lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2 = lazy_nl_via_item__2;
return lazy_nl_via_item;
})()
;
domina.lazy_nl_via_array_ref = (function() {
var lazy_nl_via_array_ref = null;
var lazy_nl_via_array_ref__1 = (function (nl){return lazy_nl_via_array_ref.call(null,nl,0);
});
var lazy_nl_via_array_ref__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,(nl[n]),lazy_nl_via_array_ref.call(null,nl,(n + 1)));
}),null,null));
} else
{return null;
}
});
lazy_nl_via_array_ref = function(nl,n){
switch(arguments.length){
case 1:
return lazy_nl_via_array_ref__1.call(this,nl);
case 2:
return lazy_nl_via_array_ref__2.call(this,nl,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$1 = lazy_nl_via_array_ref__1;
lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2 = lazy_nl_via_array_ref__2;
return lazy_nl_via_array_ref;
})()
;
/**
* A lazy seq view of a js/NodeList, or other array-like javascript things
*/
domina.lazy_nodelist = (function lazy_nodelist(nl){if(cljs.core.truth_(nl.item))
{return domina.lazy_nl_via_item.call(null,nl);
} else
{return domina.lazy_nl_via_array_ref.call(null,nl);
}
});
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__3429__auto__ = obj;if(cljs.core.truth_(and__3429__auto__))
{var and__3429__auto____$1 = cljs.core.not.call(null,obj.nodeName);if(and__3429__auto____$1)
{return obj.length;
} else
{return and__3429__auto____$1;
}
} else
{return and__3429__auto__;
}
});
/**
* Some versions of IE have things that are like arrays in that they
* respond to .length, but are not arrays nor NodeSets. This returns a
* real sequence view of such objects. If passed an object that is not
* a logical sequence at all, returns a single-item seq containing the
* object.
*/
domina.normalize_seq = (function normalize_seq(list_thing){if((list_thing == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__50611 = list_thing;if(G__50611)
{var bit__4091__auto__ = (G__50611.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4091__auto__) || (G__50611.cljs$core$ISeqable$))
{return true;
} else
{if((!G__50611.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__50611);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__50611);
}
})())
{return cljs.core.seq.call(null,list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,list_thing)))
{return domina.lazy_nodelist.call(null,list_thing);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [list_thing], null));
} else
{return null;
}
}
}
}
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){if((content == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__50612 = content;if(G__50612)
{var bit__4091__auto__ = (G__50612.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4091__auto__) || (G__50612.cljs$core$ISeqable$))
{return true;
} else
{if((!G__50612.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__50612);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__50612);
}
})())
{return cljs.core.seq.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return domina.lazy_nodelist.call(null,content);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content], null));
} else
{return null;
}
}
}
}
}));
(domina.single_node["_"] = (function (content){if((content == null))
{return null;
} else
{if((function (){var G__50613 = content;if(G__50613)
{var bit__4091__auto__ = (G__50613.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4091__auto__) || (G__50613.cljs$core$ISeqable$))
{return true;
} else
{if((!G__50613.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__50613);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__50613);
}
})())
{return cljs.core.first.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return content.item(0);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{return content;
} else
{return null;
}
}
}
}
}));
(domina.DomContent["string"] = true);
(domina.nodes["string"] = (function (s){return cljs.core.doall.call(null,domina.nodes.call(null,domina.string_to_dom.call(null,s)));
}));
(domina.single_node["string"] = (function (s){return domina.single_node.call(null,domina.string_to_dom.call(null,s));
}));
if(cljs.core.truth_((typeof NodeList != 'undefined')))
{NodeList.prototype.cljs$core$ISeqable$ = true;
NodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){var nodelist__$1 = this;return domina.lazy_nodelist.call(null,nodelist__$1);
});
NodeList.prototype.cljs$core$IIndexed$ = true;
NodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){var nodelist__$1 = this;return nodelist__$1.item(n);
});
NodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){var nodelist__$1 = this;if((nodelist__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist__$1,n);
}
});
NodeList.prototype.cljs$core$ICounted$ = true;
NodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){var nodelist__$1 = this;return nodelist__$1.length;
});
} else
{}
if(cljs.core.truth_((typeof StaticNodeList != 'undefined')))
{StaticNodeList.prototype.cljs$core$ISeqable$ = true;
StaticNodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){var nodelist__$1 = this;return domina.lazy_nodelist.call(null,nodelist__$1);
});
StaticNodeList.prototype.cljs$core$IIndexed$ = true;
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){var nodelist__$1 = this;return nodelist__$1.item(n);
});
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){var nodelist__$1 = this;if((nodelist__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist__$1,n);
}
});
StaticNodeList.prototype.cljs$core$ICounted$ = true;
StaticNodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){var nodelist__$1 = this;return nodelist__$1.length;
});
} else
{}
if(cljs.core.truth_((typeof HTMLCollection != 'undefined')))
{HTMLCollection.prototype.cljs$core$ISeqable$ = true;
HTMLCollection.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var coll__$1 = this;return domina.lazy_nodelist.call(null,coll__$1);
});
HTMLCollection.prototype.cljs$core$IIndexed$ = true;
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){var coll__$1 = this;return coll__$1.item(n);
});
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){var coll__$1 = this;if((coll__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,coll__$1,n);
}
});
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var coll__$1 = this;return coll__$1.length;
});
} else
{}
