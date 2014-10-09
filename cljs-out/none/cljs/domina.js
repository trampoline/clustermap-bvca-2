// Compiled by ClojureScript 0.0-2322
goog.provide('domina');
goog.require('cljs.core');
goog.require('goog.dom.forms');
goog.require('goog.dom');
goog.require('goog.dom.classes');
goog.require('goog.dom.xml');
goog.require('goog.dom');
goog.require('goog.dom.classes');
goog.require('goog.dom.forms');
goog.require('goog.string');
goog.require('cljs.core');
goog.require('domina.support');
goog.require('goog.events');
goog.require('goog.string');
goog.require('domina.support');
goog.require('goog.style');
goog.require('goog.style');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('goog.events');
goog.require('goog.dom.xml');
goog.require('cljs.core');
domina.re_html = /<|&#?\w+;/;
domina.re_leading_whitespace = /^\s+/;
domina.re_xhtml_tag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/i;
domina.re_tag_name = /<([\w:]+)/;
domina.re_no_inner_html = /<(?:script|style)/i;
domina.re_tbody = /<tbody/i;
var opt_wrapper_68192 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_68193 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);var cell_wrapper_68194 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_68194,opt_wrapper_68192,table_section_wrapper_68193,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_68192,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_68193,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_68193,cell_wrapper_68194,table_section_wrapper_68193,table_section_wrapper_68193]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3546__auto__ = div.firstChild;if(cljs.core.truth_(and__3546__auto__))
{return div.firstChild.childNodes;
} else
{return and__3546__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));var seq__68199 = cljs.core.seq.call(null,tbody);var chunk__68200 = null;var count__68201 = (0);var i__68202 = (0);while(true){
if((i__68202 < count__68201))
{var child = cljs.core._nth.call(null,chunk__68200,i__68202);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__68203 = seq__68199;
var G__68204 = chunk__68200;
var G__68205 = count__68201;
var G__68206 = (i__68202 + (1));
seq__68199 = G__68203;
chunk__68200 = G__68204;
count__68201 = G__68205;
i__68202 = G__68206;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__68199);if(temp__4126__auto__)
{var seq__68199__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__68199__$1))
{var c__4314__auto__ = cljs.core.chunk_first.call(null,seq__68199__$1);{
var G__68207 = cljs.core.chunk_rest.call(null,seq__68199__$1);
var G__68208 = c__4314__auto__;
var G__68209 = cljs.core.count.call(null,c__4314__auto__);
var G__68210 = (0);
seq__68199 = G__68207;
chunk__68200 = G__68208;
count__68201 = G__68209;
i__68202 = G__68210;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__68199__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__68211 = cljs.core.next.call(null,seq__68199__$1);
var G__68212 = null;
var G__68213 = (0);
var G__68214 = (0);
seq__68199 = G__68211;
chunk__68200 = G__68212;
count__68201 = G__68213;
i__68202 = G__68214;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))).toLowerCase();var vec__68216 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__68216,(0),null);var start_wrap = cljs.core.nth.call(null,vec__68216,(1),null);var end_wrap = cljs.core.nth.call(null,vec__68216,(2),null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_wrap)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(html__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_wrap));
return div;
})();var level = depth;while(true){
if((level > (0)))
{{
var G__68217 = wrapper.lastChild;
var G__68218 = (level - (1));
wrapper = G__68217;
level = G__68218;
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
if(cljs.core.truth_((function (){var and__3546__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);if(and__3546__auto__)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else
{return and__3546__auto__;
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
domina.DomContent = (function (){var obj68220 = {};return obj68220;
})();
domina.nodes = (function nodes(content){if((function (){var and__3546__auto__ = content;if(and__3546__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3546__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__4185__auto__ = (((content == null))?null:content);return (function (){var or__3558__auto__ = (domina.nodes[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (domina.nodes["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){if((function (){var and__3546__auto__ = nodeseq;if(and__3546__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3546__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__4185__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__3558__auto__ = (domina.single_node[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (domina.single_node["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
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
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__3546__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__3546__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3546__auto__;
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
log_debug.cljs$lang$applyTo = (function (arglist__68221){
var mesg = cljs.core.seq(arglist__68221);
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
log.cljs$lang$applyTo = (function (arglist__68222){
var mesg = cljs.core.seq(arglist__68222);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__68223){
var contents = cljs.core.seq(arglist__68223);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__68224_SHARP_){return p1__68224_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__68225_SHARP_,p2__68226_SHARP_){return goog.dom.insertChildAt(p1__68225_SHARP_,p2__68226_SHARP_,idx);
}),parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.prepend_BANG_ = (function prepend_BANG_(parent_content,child_content){domina.insert_BANG_.call(null,parent_content,child_content,(0));
return parent_content;
});
/**
* Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__68228_SHARP_,p2__68227_SHARP_){return goog.dom.insertSiblingBefore(p2__68227_SHARP_,p1__68228_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__68230_SHARP_,p2__68229_SHARP_){return goog.dom.insertSiblingAfter(p2__68229_SHARP_,p1__68230_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__68232_SHARP_,p2__68231_SHARP_){return goog.dom.replaceNode(p2__68231_SHARP_,p1__68232_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__68237_68241 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__68238_68242 = null;var count__68239_68243 = (0);var i__68240_68244 = (0);while(true){
if((i__68240_68244 < count__68239_68243))
{var n_68245 = cljs.core._nth.call(null,chunk__68238_68242,i__68240_68244);goog.style.setStyle(n_68245,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__68246 = seq__68237_68241;
var G__68247 = chunk__68238_68242;
var G__68248 = count__68239_68243;
var G__68249 = (i__68240_68244 + (1));
seq__68237_68241 = G__68246;
chunk__68238_68242 = G__68247;
count__68239_68243 = G__68248;
i__68240_68244 = G__68249;
continue;
}
} else
{var temp__4126__auto___68250 = cljs.core.seq.call(null,seq__68237_68241);if(temp__4126__auto___68250)
{var seq__68237_68251__$1 = temp__4126__auto___68250;if(cljs.core.chunked_seq_QMARK_.call(null,seq__68237_68251__$1))
{var c__4314__auto___68252 = cljs.core.chunk_first.call(null,seq__68237_68251__$1);{
var G__68253 = cljs.core.chunk_rest.call(null,seq__68237_68251__$1);
var G__68254 = c__4314__auto___68252;
var G__68255 = cljs.core.count.call(null,c__4314__auto___68252);
var G__68256 = (0);
seq__68237_68241 = G__68253;
chunk__68238_68242 = G__68254;
count__68239_68243 = G__68255;
i__68240_68244 = G__68256;
continue;
}
} else
{var n_68257 = cljs.core.first.call(null,seq__68237_68251__$1);goog.style.setStyle(n_68257,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__68258 = cljs.core.next.call(null,seq__68237_68251__$1);
var G__68259 = null;
var G__68260 = (0);
var G__68261 = (0);
seq__68237_68241 = G__68258;
chunk__68238_68242 = G__68259;
count__68239_68243 = G__68260;
i__68240_68244 = G__68261;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__68262){
var content = cljs.core.first(arglist__68262);
arglist__68262 = cljs.core.next(arglist__68262);
var name = cljs.core.first(arglist__68262);
var value = cljs.core.rest(arglist__68262);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__68267_68271 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__68268_68272 = null;var count__68269_68273 = (0);var i__68270_68274 = (0);while(true){
if((i__68270_68274 < count__68269_68273))
{var n_68275 = cljs.core._nth.call(null,chunk__68268_68272,i__68270_68274);n_68275.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__68276 = seq__68267_68271;
var G__68277 = chunk__68268_68272;
var G__68278 = count__68269_68273;
var G__68279 = (i__68270_68274 + (1));
seq__68267_68271 = G__68276;
chunk__68268_68272 = G__68277;
count__68269_68273 = G__68278;
i__68270_68274 = G__68279;
continue;
}
} else
{var temp__4126__auto___68280 = cljs.core.seq.call(null,seq__68267_68271);if(temp__4126__auto___68280)
{var seq__68267_68281__$1 = temp__4126__auto___68280;if(cljs.core.chunked_seq_QMARK_.call(null,seq__68267_68281__$1))
{var c__4314__auto___68282 = cljs.core.chunk_first.call(null,seq__68267_68281__$1);{
var G__68283 = cljs.core.chunk_rest.call(null,seq__68267_68281__$1);
var G__68284 = c__4314__auto___68282;
var G__68285 = cljs.core.count.call(null,c__4314__auto___68282);
var G__68286 = (0);
seq__68267_68271 = G__68283;
chunk__68268_68272 = G__68284;
count__68269_68273 = G__68285;
i__68270_68274 = G__68286;
continue;
}
} else
{var n_68287 = cljs.core.first.call(null,seq__68267_68281__$1);n_68287.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__68288 = cljs.core.next.call(null,seq__68267_68281__$1);
var G__68289 = null;
var G__68290 = (0);
var G__68291 = (0);
seq__68267_68271 = G__68288;
chunk__68268_68272 = G__68289;
count__68269_68273 = G__68290;
i__68270_68274 = G__68291;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__68292){
var content = cljs.core.first(arglist__68292);
arglist__68292 = cljs.core.next(arglist__68292);
var name = cljs.core.first(arglist__68292);
var value = cljs.core.rest(arglist__68292);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__68297_68301 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__68298_68302 = null;var count__68299_68303 = (0);var i__68300_68304 = (0);while(true){
if((i__68300_68304 < count__68299_68303))
{var n_68305 = cljs.core._nth.call(null,chunk__68298_68302,i__68300_68304);n_68305.removeAttribute(cljs.core.name.call(null,name));
{
var G__68306 = seq__68297_68301;
var G__68307 = chunk__68298_68302;
var G__68308 = count__68299_68303;
var G__68309 = (i__68300_68304 + (1));
seq__68297_68301 = G__68306;
chunk__68298_68302 = G__68307;
count__68299_68303 = G__68308;
i__68300_68304 = G__68309;
continue;
}
} else
{var temp__4126__auto___68310 = cljs.core.seq.call(null,seq__68297_68301);if(temp__4126__auto___68310)
{var seq__68297_68311__$1 = temp__4126__auto___68310;if(cljs.core.chunked_seq_QMARK_.call(null,seq__68297_68311__$1))
{var c__4314__auto___68312 = cljs.core.chunk_first.call(null,seq__68297_68311__$1);{
var G__68313 = cljs.core.chunk_rest.call(null,seq__68297_68311__$1);
var G__68314 = c__4314__auto___68312;
var G__68315 = cljs.core.count.call(null,c__4314__auto___68312);
var G__68316 = (0);
seq__68297_68301 = G__68313;
chunk__68298_68302 = G__68314;
count__68299_68303 = G__68315;
i__68300_68304 = G__68316;
continue;
}
} else
{var n_68317 = cljs.core.first.call(null,seq__68297_68311__$1);n_68317.removeAttribute(cljs.core.name.call(null,name));
{
var G__68318 = cljs.core.next.call(null,seq__68297_68311__$1);
var G__68319 = null;
var G__68320 = (0);
var G__68321 = (0);
seq__68297_68301 = G__68318;
chunk__68298_68302 = G__68319;
count__68299_68303 = G__68320;
i__68300_68304 = G__68321;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__68323 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__68323,(0),null);var v = cljs.core.nth.call(null,vec__68323,(1),null);if(cljs.core.truth_((function (){var and__3546__auto__ = k;if(cljs.core.truth_(and__3546__auto__))
{return v;
} else
{return and__3546__auto__;
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
{return cljs.core.PersistentArrayMap.EMPTY;

}
}
}
});
/**
* Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
*/
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,((function (node,attrs__$1){
return (function (p1__68324_SHARP_){var attr = attrs__$1.item(p1__68324_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
});})(node,attrs__$1))
,cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__68331_68337 = cljs.core.seq.call(null,styles);var chunk__68332_68338 = null;var count__68333_68339 = (0);var i__68334_68340 = (0);while(true){
if((i__68334_68340 < count__68333_68339))
{var vec__68335_68341 = cljs.core._nth.call(null,chunk__68332_68338,i__68334_68340);var name_68342 = cljs.core.nth.call(null,vec__68335_68341,(0),null);var value_68343 = cljs.core.nth.call(null,vec__68335_68341,(1),null);domina.set_style_BANG_.call(null,content,name_68342,value_68343);
{
var G__68344 = seq__68331_68337;
var G__68345 = chunk__68332_68338;
var G__68346 = count__68333_68339;
var G__68347 = (i__68334_68340 + (1));
seq__68331_68337 = G__68344;
chunk__68332_68338 = G__68345;
count__68333_68339 = G__68346;
i__68334_68340 = G__68347;
continue;
}
} else
{var temp__4126__auto___68348 = cljs.core.seq.call(null,seq__68331_68337);if(temp__4126__auto___68348)
{var seq__68331_68349__$1 = temp__4126__auto___68348;if(cljs.core.chunked_seq_QMARK_.call(null,seq__68331_68349__$1))
{var c__4314__auto___68350 = cljs.core.chunk_first.call(null,seq__68331_68349__$1);{
var G__68351 = cljs.core.chunk_rest.call(null,seq__68331_68349__$1);
var G__68352 = c__4314__auto___68350;
var G__68353 = cljs.core.count.call(null,c__4314__auto___68350);
var G__68354 = (0);
seq__68331_68337 = G__68351;
chunk__68332_68338 = G__68352;
count__68333_68339 = G__68353;
i__68334_68340 = G__68354;
continue;
}
} else
{var vec__68336_68355 = cljs.core.first.call(null,seq__68331_68349__$1);var name_68356 = cljs.core.nth.call(null,vec__68336_68355,(0),null);var value_68357 = cljs.core.nth.call(null,vec__68336_68355,(1),null);domina.set_style_BANG_.call(null,content,name_68356,value_68357);
{
var G__68358 = cljs.core.next.call(null,seq__68331_68349__$1);
var G__68359 = null;
var G__68360 = (0);
var G__68361 = (0);
seq__68331_68337 = G__68358;
chunk__68332_68338 = G__68359;
count__68333_68339 = G__68360;
i__68334_68340 = G__68361;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__68368_68374 = cljs.core.seq.call(null,attrs);var chunk__68369_68375 = null;var count__68370_68376 = (0);var i__68371_68377 = (0);while(true){
if((i__68371_68377 < count__68370_68376))
{var vec__68372_68378 = cljs.core._nth.call(null,chunk__68369_68375,i__68371_68377);var name_68379 = cljs.core.nth.call(null,vec__68372_68378,(0),null);var value_68380 = cljs.core.nth.call(null,vec__68372_68378,(1),null);domina.set_attr_BANG_.call(null,content,name_68379,value_68380);
{
var G__68381 = seq__68368_68374;
var G__68382 = chunk__68369_68375;
var G__68383 = count__68370_68376;
var G__68384 = (i__68371_68377 + (1));
seq__68368_68374 = G__68381;
chunk__68369_68375 = G__68382;
count__68370_68376 = G__68383;
i__68371_68377 = G__68384;
continue;
}
} else
{var temp__4126__auto___68385 = cljs.core.seq.call(null,seq__68368_68374);if(temp__4126__auto___68385)
{var seq__68368_68386__$1 = temp__4126__auto___68385;if(cljs.core.chunked_seq_QMARK_.call(null,seq__68368_68386__$1))
{var c__4314__auto___68387 = cljs.core.chunk_first.call(null,seq__68368_68386__$1);{
var G__68388 = cljs.core.chunk_rest.call(null,seq__68368_68386__$1);
var G__68389 = c__4314__auto___68387;
var G__68390 = cljs.core.count.call(null,c__4314__auto___68387);
var G__68391 = (0);
seq__68368_68374 = G__68388;
chunk__68369_68375 = G__68389;
count__68370_68376 = G__68390;
i__68371_68377 = G__68391;
continue;
}
} else
{var vec__68373_68392 = cljs.core.first.call(null,seq__68368_68386__$1);var name_68393 = cljs.core.nth.call(null,vec__68373_68392,(0),null);var value_68394 = cljs.core.nth.call(null,vec__68373_68392,(1),null);domina.set_attr_BANG_.call(null,content,name_68393,value_68394);
{
var G__68395 = cljs.core.next.call(null,seq__68368_68386__$1);
var G__68396 = null;
var G__68397 = (0);
var G__68398 = (0);
seq__68368_68374 = G__68395;
chunk__68369_68375 = G__68396;
count__68370_68376 = G__68397;
i__68371_68377 = G__68398;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__68403_68407 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__68404_68408 = null;var count__68405_68409 = (0);var i__68406_68410 = (0);while(true){
if((i__68406_68410 < count__68405_68409))
{var node_68411 = cljs.core._nth.call(null,chunk__68404_68408,i__68406_68410);goog.dom.classes.add(node_68411,class$);
{
var G__68412 = seq__68403_68407;
var G__68413 = chunk__68404_68408;
var G__68414 = count__68405_68409;
var G__68415 = (i__68406_68410 + (1));
seq__68403_68407 = G__68412;
chunk__68404_68408 = G__68413;
count__68405_68409 = G__68414;
i__68406_68410 = G__68415;
continue;
}
} else
{var temp__4126__auto___68416 = cljs.core.seq.call(null,seq__68403_68407);if(temp__4126__auto___68416)
{var seq__68403_68417__$1 = temp__4126__auto___68416;if(cljs.core.chunked_seq_QMARK_.call(null,seq__68403_68417__$1))
{var c__4314__auto___68418 = cljs.core.chunk_first.call(null,seq__68403_68417__$1);{
var G__68419 = cljs.core.chunk_rest.call(null,seq__68403_68417__$1);
var G__68420 = c__4314__auto___68418;
var G__68421 = cljs.core.count.call(null,c__4314__auto___68418);
var G__68422 = (0);
seq__68403_68407 = G__68419;
chunk__68404_68408 = G__68420;
count__68405_68409 = G__68421;
i__68406_68410 = G__68422;
continue;
}
} else
{var node_68423 = cljs.core.first.call(null,seq__68403_68417__$1);goog.dom.classes.add(node_68423,class$);
{
var G__68424 = cljs.core.next.call(null,seq__68403_68417__$1);
var G__68425 = null;
var G__68426 = (0);
var G__68427 = (0);
seq__68403_68407 = G__68424;
chunk__68404_68408 = G__68425;
count__68405_68409 = G__68426;
i__68406_68410 = G__68427;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__68432_68436 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__68433_68437 = null;var count__68434_68438 = (0);var i__68435_68439 = (0);while(true){
if((i__68435_68439 < count__68434_68438))
{var node_68440 = cljs.core._nth.call(null,chunk__68433_68437,i__68435_68439);goog.dom.classes.remove(node_68440,class$);
{
var G__68441 = seq__68432_68436;
var G__68442 = chunk__68433_68437;
var G__68443 = count__68434_68438;
var G__68444 = (i__68435_68439 + (1));
seq__68432_68436 = G__68441;
chunk__68433_68437 = G__68442;
count__68434_68438 = G__68443;
i__68435_68439 = G__68444;
continue;
}
} else
{var temp__4126__auto___68445 = cljs.core.seq.call(null,seq__68432_68436);if(temp__4126__auto___68445)
{var seq__68432_68446__$1 = temp__4126__auto___68445;if(cljs.core.chunked_seq_QMARK_.call(null,seq__68432_68446__$1))
{var c__4314__auto___68447 = cljs.core.chunk_first.call(null,seq__68432_68446__$1);{
var G__68448 = cljs.core.chunk_rest.call(null,seq__68432_68446__$1);
var G__68449 = c__4314__auto___68447;
var G__68450 = cljs.core.count.call(null,c__4314__auto___68447);
var G__68451 = (0);
seq__68432_68436 = G__68448;
chunk__68433_68437 = G__68449;
count__68434_68438 = G__68450;
i__68435_68439 = G__68451;
continue;
}
} else
{var node_68452 = cljs.core.first.call(null,seq__68432_68446__$1);goog.dom.classes.remove(node_68452,class$);
{
var G__68453 = cljs.core.next.call(null,seq__68432_68446__$1);
var G__68454 = null;
var G__68455 = (0);
var G__68456 = (0);
seq__68432_68436 = G__68453;
chunk__68433_68437 = G__68454;
count__68434_68438 = G__68455;
i__68435_68439 = G__68456;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__68461_68465 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__68462_68466 = null;var count__68463_68467 = (0);var i__68464_68468 = (0);while(true){
if((i__68464_68468 < count__68463_68467))
{var node_68469 = cljs.core._nth.call(null,chunk__68462_68466,i__68464_68468);goog.dom.classes.toggle(node_68469,class$);
{
var G__68470 = seq__68461_68465;
var G__68471 = chunk__68462_68466;
var G__68472 = count__68463_68467;
var G__68473 = (i__68464_68468 + (1));
seq__68461_68465 = G__68470;
chunk__68462_68466 = G__68471;
count__68463_68467 = G__68472;
i__68464_68468 = G__68473;
continue;
}
} else
{var temp__4126__auto___68474 = cljs.core.seq.call(null,seq__68461_68465);if(temp__4126__auto___68474)
{var seq__68461_68475__$1 = temp__4126__auto___68474;if(cljs.core.chunked_seq_QMARK_.call(null,seq__68461_68475__$1))
{var c__4314__auto___68476 = cljs.core.chunk_first.call(null,seq__68461_68475__$1);{
var G__68477 = cljs.core.chunk_rest.call(null,seq__68461_68475__$1);
var G__68478 = c__4314__auto___68476;
var G__68479 = cljs.core.count.call(null,c__4314__auto___68476);
var G__68480 = (0);
seq__68461_68465 = G__68477;
chunk__68462_68466 = G__68478;
count__68463_68467 = G__68479;
i__68464_68468 = G__68480;
continue;
}
} else
{var node_68481 = cljs.core.first.call(null,seq__68461_68475__$1);goog.dom.classes.toggle(node_68481,class$);
{
var G__68482 = cljs.core.next.call(null,seq__68461_68475__$1);
var G__68483 = null;
var G__68484 = (0);
var G__68485 = (0);
seq__68461_68465 = G__68482;
chunk__68462_68466 = G__68483;
count__68463_68467 = G__68484;
i__68464_68468 = G__68485;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_68494__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__68490_68495 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__68491_68496 = null;var count__68492_68497 = (0);var i__68493_68498 = (0);while(true){
if((i__68493_68498 < count__68492_68497))
{var node_68499 = cljs.core._nth.call(null,chunk__68491_68496,i__68493_68498);goog.dom.classes.set(node_68499,classes_68494__$1);
{
var G__68500 = seq__68490_68495;
var G__68501 = chunk__68491_68496;
var G__68502 = count__68492_68497;
var G__68503 = (i__68493_68498 + (1));
seq__68490_68495 = G__68500;
chunk__68491_68496 = G__68501;
count__68492_68497 = G__68502;
i__68493_68498 = G__68503;
continue;
}
} else
{var temp__4126__auto___68504 = cljs.core.seq.call(null,seq__68490_68495);if(temp__4126__auto___68504)
{var seq__68490_68505__$1 = temp__4126__auto___68504;if(cljs.core.chunked_seq_QMARK_.call(null,seq__68490_68505__$1))
{var c__4314__auto___68506 = cljs.core.chunk_first.call(null,seq__68490_68505__$1);{
var G__68507 = cljs.core.chunk_rest.call(null,seq__68490_68505__$1);
var G__68508 = c__4314__auto___68506;
var G__68509 = cljs.core.count.call(null,c__4314__auto___68506);
var G__68510 = (0);
seq__68490_68495 = G__68507;
chunk__68491_68496 = G__68508;
count__68492_68497 = G__68509;
i__68493_68498 = G__68510;
continue;
}
} else
{var node_68511 = cljs.core.first.call(null,seq__68490_68505__$1);goog.dom.classes.set(node_68511,classes_68494__$1);
{
var G__68512 = cljs.core.next.call(null,seq__68490_68505__$1);
var G__68513 = null;
var G__68514 = (0);
var G__68515 = (0);
seq__68490_68495 = G__68512;
chunk__68491_68496 = G__68513;
count__68492_68497 = G__68514;
i__68493_68498 = G__68515;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__68520_68524 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__68521_68525 = null;var count__68522_68526 = (0);var i__68523_68527 = (0);while(true){
if((i__68523_68527 < count__68522_68526))
{var node_68528 = cljs.core._nth.call(null,chunk__68521_68525,i__68523_68527);goog.dom.setTextContent(node_68528,value);
{
var G__68529 = seq__68520_68524;
var G__68530 = chunk__68521_68525;
var G__68531 = count__68522_68526;
var G__68532 = (i__68523_68527 + (1));
seq__68520_68524 = G__68529;
chunk__68521_68525 = G__68530;
count__68522_68526 = G__68531;
i__68523_68527 = G__68532;
continue;
}
} else
{var temp__4126__auto___68533 = cljs.core.seq.call(null,seq__68520_68524);if(temp__4126__auto___68533)
{var seq__68520_68534__$1 = temp__4126__auto___68533;if(cljs.core.chunked_seq_QMARK_.call(null,seq__68520_68534__$1))
{var c__4314__auto___68535 = cljs.core.chunk_first.call(null,seq__68520_68534__$1);{
var G__68536 = cljs.core.chunk_rest.call(null,seq__68520_68534__$1);
var G__68537 = c__4314__auto___68535;
var G__68538 = cljs.core.count.call(null,c__4314__auto___68535);
var G__68539 = (0);
seq__68520_68524 = G__68536;
chunk__68521_68525 = G__68537;
count__68522_68526 = G__68538;
i__68523_68527 = G__68539;
continue;
}
} else
{var node_68540 = cljs.core.first.call(null,seq__68520_68534__$1);goog.dom.setTextContent(node_68540,value);
{
var G__68541 = cljs.core.next.call(null,seq__68520_68534__$1);
var G__68542 = null;
var G__68543 = (0);
var G__68544 = (0);
seq__68520_68524 = G__68541;
chunk__68521_68525 = G__68542;
count__68522_68526 = G__68543;
i__68523_68527 = G__68544;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__68549_68553 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__68550_68554 = null;var count__68551_68555 = (0);var i__68552_68556 = (0);while(true){
if((i__68552_68556 < count__68551_68555))
{var node_68557 = cljs.core._nth.call(null,chunk__68550_68554,i__68552_68556);goog.dom.forms.setValue(node_68557,value);
{
var G__68558 = seq__68549_68553;
var G__68559 = chunk__68550_68554;
var G__68560 = count__68551_68555;
var G__68561 = (i__68552_68556 + (1));
seq__68549_68553 = G__68558;
chunk__68550_68554 = G__68559;
count__68551_68555 = G__68560;
i__68552_68556 = G__68561;
continue;
}
} else
{var temp__4126__auto___68562 = cljs.core.seq.call(null,seq__68549_68553);if(temp__4126__auto___68562)
{var seq__68549_68563__$1 = temp__4126__auto___68562;if(cljs.core.chunked_seq_QMARK_.call(null,seq__68549_68563__$1))
{var c__4314__auto___68564 = cljs.core.chunk_first.call(null,seq__68549_68563__$1);{
var G__68565 = cljs.core.chunk_rest.call(null,seq__68549_68563__$1);
var G__68566 = c__4314__auto___68564;
var G__68567 = cljs.core.count.call(null,c__4314__auto___68564);
var G__68568 = (0);
seq__68549_68553 = G__68565;
chunk__68550_68554 = G__68566;
count__68551_68555 = G__68567;
i__68552_68556 = G__68568;
continue;
}
} else
{var node_68569 = cljs.core.first.call(null,seq__68549_68563__$1);goog.dom.forms.setValue(node_68569,value);
{
var G__68570 = cljs.core.next.call(null,seq__68549_68563__$1);
var G__68571 = null;
var G__68572 = (0);
var G__68573 = (0);
seq__68549_68553 = G__68570;
chunk__68550_68554 = G__68571;
count__68551_68555 = G__68572;
i__68552_68556 = G__68573;
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
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))).toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__3546__auto__ = allows_inner_html_QMARK_;if(and__3546__auto__)
{var and__3546__auto____$1 = (function (){var or__3558__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();if(cljs.core.truth_(and__3546__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__3546__auto____$1;
}
} else
{return and__3546__auto__;
}
})()))
{var value_68584 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__68580_68585 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__68581_68586 = null;var count__68582_68587 = (0);var i__68583_68588 = (0);while(true){
if((i__68583_68588 < count__68582_68587))
{var node_68589 = cljs.core._nth.call(null,chunk__68581_68586,i__68583_68588);node_68589.innerHTML = value_68584;
{
var G__68590 = seq__68580_68585;
var G__68591 = chunk__68581_68586;
var G__68592 = count__68582_68587;
var G__68593 = (i__68583_68588 + (1));
seq__68580_68585 = G__68590;
chunk__68581_68586 = G__68591;
count__68582_68587 = G__68592;
i__68583_68588 = G__68593;
continue;
}
} else
{var temp__4126__auto___68594 = cljs.core.seq.call(null,seq__68580_68585);if(temp__4126__auto___68594)
{var seq__68580_68595__$1 = temp__4126__auto___68594;if(cljs.core.chunked_seq_QMARK_.call(null,seq__68580_68595__$1))
{var c__4314__auto___68596 = cljs.core.chunk_first.call(null,seq__68580_68595__$1);{
var G__68597 = cljs.core.chunk_rest.call(null,seq__68580_68595__$1);
var G__68598 = c__4314__auto___68596;
var G__68599 = cljs.core.count.call(null,c__4314__auto___68596);
var G__68600 = (0);
seq__68580_68585 = G__68597;
chunk__68581_68586 = G__68598;
count__68582_68587 = G__68599;
i__68583_68588 = G__68600;
continue;
}
} else
{var node_68601 = cljs.core.first.call(null,seq__68580_68595__$1);node_68601.innerHTML = value_68584;
{
var G__68602 = cljs.core.next.call(null,seq__68580_68595__$1);
var G__68603 = null;
var G__68604 = (0);
var G__68605 = (0);
seq__68580_68585 = G__68602;
chunk__68581_68586 = G__68603;
count__68582_68587 = G__68604;
i__68583_68588 = G__68605;
continue;
}
}
} else
{}
}
break;
}
}catch (e68579){if((e68579 instanceof Error))
{var e_68606 = e68579;domina.replace_children_BANG_.call(null,content,value_68584);
} else
{throw e68579;

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
var get_data__3 = (function (node,key,bubble){var m = domina.single_node.call(null,node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);if(cljs.core.truth_((function (){var and__3546__auto__ = bubble;if(cljs.core.truth_(and__3546__auto__))
{return (value == null);
} else
{return and__3546__auto__;
}
})()))
{var temp__4126__auto__ = domina.single_node.call(null,node).parentNode;if(cljs.core.truth_(temp__4126__auto__))
{var parent = temp__4126__auto__;return get_data.call(null,parent,key,true);
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
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__3558__auto__ = domina.single_node.call(null,node).__domina_data;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__68613_68617 = cljs.core.seq.call(null,children);var chunk__68614_68618 = null;var count__68615_68619 = (0);var i__68616_68620 = (0);while(true){
if((i__68616_68620 < count__68615_68619))
{var child_68621 = cljs.core._nth.call(null,chunk__68614_68618,i__68616_68620);frag.appendChild(child_68621);
{
var G__68622 = seq__68613_68617;
var G__68623 = chunk__68614_68618;
var G__68624 = count__68615_68619;
var G__68625 = (i__68616_68620 + (1));
seq__68613_68617 = G__68622;
chunk__68614_68618 = G__68623;
count__68615_68619 = G__68624;
i__68616_68620 = G__68625;
continue;
}
} else
{var temp__4126__auto___68626 = cljs.core.seq.call(null,seq__68613_68617);if(temp__4126__auto___68626)
{var seq__68613_68627__$1 = temp__4126__auto___68626;if(cljs.core.chunked_seq_QMARK_.call(null,seq__68613_68627__$1))
{var c__4314__auto___68628 = cljs.core.chunk_first.call(null,seq__68613_68627__$1);{
var G__68629 = cljs.core.chunk_rest.call(null,seq__68613_68627__$1);
var G__68630 = c__4314__auto___68628;
var G__68631 = cljs.core.count.call(null,c__4314__auto___68628);
var G__68632 = (0);
seq__68613_68617 = G__68629;
chunk__68614_68618 = G__68630;
count__68615_68619 = G__68631;
i__68616_68620 = G__68632;
continue;
}
} else
{var child_68633 = cljs.core.first.call(null,seq__68613_68627__$1);frag.appendChild(child_68633);
{
var G__68634 = cljs.core.next.call(null,seq__68613_68627__$1);
var G__68635 = null;
var G__68636 = (0);
var G__68637 = (0);
seq__68613_68617 = G__68634;
chunk__68614_68618 = G__68635;
count__68615_68619 = G__68636;
i__68616_68620 = G__68637;
continue;
}
}
} else
{}
}
break;
}
return frag;
})();var other_children = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents) - (1)),((function (parents,children,first_child){
return (function (){return first_child.cloneNode(true);
});})(parents,children,first_child))
));if(cljs.core.seq.call(null,parents))
{f.call(null,cljs.core.first.call(null,parents),first_child);
return cljs.core.doall.call(null,cljs.core.map.call(null,((function (parents,children,first_child,other_children){
return (function (p1__68607_SHARP_,p2__68608_SHARP_){return f.call(null,p1__68607_SHARP_,p2__68608_SHARP_);
});})(parents,children,first_child,other_children))
,cljs.core.rest.call(null,parents),other_children));
} else
{return null;
}
});
domina.lazy_nl_via_item = (function() {
var lazy_nl_via_item = null;
var lazy_nl_via_item__1 = (function (nl){return lazy_nl_via_item.call(null,nl,(0));
});
var lazy_nl_via_item__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,nl.item(n),lazy_nl_via_item.call(null,nl,(n + (1))));
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
var lazy_nl_via_array_ref__1 = (function (nl){return lazy_nl_via_array_ref.call(null,nl,(0));
});
var lazy_nl_via_array_ref__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,(nl[n]),lazy_nl_via_array_ref.call(null,nl,(n + (1))));
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
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__3546__auto__ = obj;if(cljs.core.truth_(and__3546__auto__))
{var and__3546__auto____$1 = cljs.core.not.call(null,obj.nodeName);if(and__3546__auto____$1)
{return obj.length;
} else
{return and__3546__auto____$1;
}
} else
{return and__3546__auto__;
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
{if((function (){var G__68639 = list_thing;if(G__68639)
{var bit__4208__auto__ = (G__68639.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4208__auto__) || (G__68639.cljs$core$ISeqable$))
{return true;
} else
{if((!G__68639.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__68639);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__68639);
}
})())
{return cljs.core.seq.call(null,list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,list_thing)))
{return domina.lazy_nodelist.call(null,list_thing);
} else
{return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [list_thing], null));

}
}
}
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){if((content == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__68640 = content;if(G__68640)
{var bit__4208__auto__ = (G__68640.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4208__auto__) || (G__68640.cljs$core$ISeqable$))
{return true;
} else
{if((!G__68640.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__68640);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__68640);
}
})())
{return cljs.core.seq.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return domina.lazy_nodelist.call(null,content);
} else
{return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content], null));

}
}
}
}));
(domina.single_node["_"] = (function (content){if((content == null))
{return null;
} else
{if((function (){var G__68641 = content;if(G__68641)
{var bit__4208__auto__ = (G__68641.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4208__auto__) || (G__68641.cljs$core$ISeqable$))
{return true;
} else
{if((!G__68641.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__68641);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__68641);
}
})())
{return cljs.core.first.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return content.item((0));
} else
{return content;

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

//# sourceMappingURL=domina.js.map