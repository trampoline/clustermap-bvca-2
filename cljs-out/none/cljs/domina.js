// Compiled by ClojureScript 0.0-2138
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
var opt_wrapper_17116 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_17117 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_17118 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",new cljs.core.Keyword(null,"default","default",2558708147),"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_17117,table_section_wrapper_17117,opt_wrapper_17116,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_17118,table_section_wrapper_17117,cell_wrapper_17118,opt_wrapper_17116,table_section_wrapper_17117,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_17117]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3394__auto__ = div.firstChild;if(cljs.core.truth_(and__3394__auto__))
{return div.firstChild.childNodes;
} else
{return and__3394__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__17123 = cljs.core.seq.call(null,tbody);var chunk__17124 = null;var count__17125 = 0;var i__17126 = 0;while(true){
if((i__17126 < count__17125))
{var child = cljs.core._nth.call(null,chunk__17124,i__17126);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__17127 = seq__17123;
var G__17128 = chunk__17124;
var G__17129 = count__17125;
var G__17130 = (i__17126 + 1);
seq__17123 = G__17127;
chunk__17124 = G__17128;
count__17125 = G__17129;
i__17126 = G__17130;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__17123);if(temp__4092__auto__)
{var seq__17123__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17123__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__17123__$1);{
var G__17131 = cljs.core.chunk_rest.call(null,seq__17123__$1);
var G__17132 = c__4148__auto__;
var G__17133 = cljs.core.count.call(null,c__4148__auto__);
var G__17134 = 0;
seq__17123 = G__17131;
chunk__17124 = G__17132;
count__17125 = G__17133;
i__17126 = G__17134;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__17123__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__17135 = cljs.core.next.call(null,seq__17123__$1);
var G__17136 = null;
var G__17137 = 0;
var G__17138 = 0;
seq__17123 = G__17135;
chunk__17124 = G__17136;
count__17125 = G__17137;
i__17126 = G__17138;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__17140 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__17140,0,null);var start_wrap = cljs.core.nth.call(null,vec__17140,1,null);var end_wrap = cljs.core.nth.call(null,vec__17140,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__17141 = wrapper.lastChild;
var G__17142 = (level - 1);
wrapper = G__17141;
level = G__17142;
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
if(cljs.core.truth_((function (){var and__3394__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);if(and__3394__auto__)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else
{return and__3394__auto__;
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
domina.DomContent = (function (){var obj17144 = {};return obj17144;
})();
domina.nodes = (function nodes(content){if((function (){var and__3394__auto__ = content;if(and__3394__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3394__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__4027__auto__ = (((content == null))?null:content);return (function (){var or__3406__auto__ = (domina.nodes[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (domina.nodes["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){if((function (){var and__3394__auto__ = nodeseq;if(and__3394__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3394__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__4027__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__3406__auto__ = (domina.single_node[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (domina.single_node["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
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
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__3394__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__3394__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3394__auto__;
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
log_debug.cljs$lang$applyTo = (function (arglist__17145){
var mesg = cljs.core.seq(arglist__17145);
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
log.cljs$lang$applyTo = (function (arglist__17146){
var mesg = cljs.core.seq(arglist__17146);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__17147){
var contents = cljs.core.seq(arglist__17147);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__17148_SHARP_){return p1__17148_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__17149_SHARP_,p2__17150_SHARP_){return goog.dom.insertChildAt(p1__17149_SHARP_,p2__17150_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__17152_SHARP_,p2__17151_SHARP_){return goog.dom.insertSiblingBefore(p2__17151_SHARP_,p1__17152_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__17154_SHARP_,p2__17153_SHARP_){return goog.dom.insertSiblingAfter(p2__17153_SHARP_,p1__17154_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__17156_SHARP_,p2__17155_SHARP_){return goog.dom.replaceNode(p2__17155_SHARP_,p1__17156_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__17161_17165 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17162_17166 = null;var count__17163_17167 = 0;var i__17164_17168 = 0;while(true){
if((i__17164_17168 < count__17163_17167))
{var n_17169 = cljs.core._nth.call(null,chunk__17162_17166,i__17164_17168);goog.style.setStyle(n_17169,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__17170 = seq__17161_17165;
var G__17171 = chunk__17162_17166;
var G__17172 = count__17163_17167;
var G__17173 = (i__17164_17168 + 1);
seq__17161_17165 = G__17170;
chunk__17162_17166 = G__17171;
count__17163_17167 = G__17172;
i__17164_17168 = G__17173;
continue;
}
} else
{var temp__4092__auto___17174 = cljs.core.seq.call(null,seq__17161_17165);if(temp__4092__auto___17174)
{var seq__17161_17175__$1 = temp__4092__auto___17174;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17161_17175__$1))
{var c__4148__auto___17176 = cljs.core.chunk_first.call(null,seq__17161_17175__$1);{
var G__17177 = cljs.core.chunk_rest.call(null,seq__17161_17175__$1);
var G__17178 = c__4148__auto___17176;
var G__17179 = cljs.core.count.call(null,c__4148__auto___17176);
var G__17180 = 0;
seq__17161_17165 = G__17177;
chunk__17162_17166 = G__17178;
count__17163_17167 = G__17179;
i__17164_17168 = G__17180;
continue;
}
} else
{var n_17181 = cljs.core.first.call(null,seq__17161_17175__$1);goog.style.setStyle(n_17181,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__17182 = cljs.core.next.call(null,seq__17161_17175__$1);
var G__17183 = null;
var G__17184 = 0;
var G__17185 = 0;
seq__17161_17165 = G__17182;
chunk__17162_17166 = G__17183;
count__17163_17167 = G__17184;
i__17164_17168 = G__17185;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__17186){
var content = cljs.core.first(arglist__17186);
arglist__17186 = cljs.core.next(arglist__17186);
var name = cljs.core.first(arglist__17186);
var value = cljs.core.rest(arglist__17186);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__17191_17195 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17192_17196 = null;var count__17193_17197 = 0;var i__17194_17198 = 0;while(true){
if((i__17194_17198 < count__17193_17197))
{var n_17199 = cljs.core._nth.call(null,chunk__17192_17196,i__17194_17198);n_17199.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__17200 = seq__17191_17195;
var G__17201 = chunk__17192_17196;
var G__17202 = count__17193_17197;
var G__17203 = (i__17194_17198 + 1);
seq__17191_17195 = G__17200;
chunk__17192_17196 = G__17201;
count__17193_17197 = G__17202;
i__17194_17198 = G__17203;
continue;
}
} else
{var temp__4092__auto___17204 = cljs.core.seq.call(null,seq__17191_17195);if(temp__4092__auto___17204)
{var seq__17191_17205__$1 = temp__4092__auto___17204;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17191_17205__$1))
{var c__4148__auto___17206 = cljs.core.chunk_first.call(null,seq__17191_17205__$1);{
var G__17207 = cljs.core.chunk_rest.call(null,seq__17191_17205__$1);
var G__17208 = c__4148__auto___17206;
var G__17209 = cljs.core.count.call(null,c__4148__auto___17206);
var G__17210 = 0;
seq__17191_17195 = G__17207;
chunk__17192_17196 = G__17208;
count__17193_17197 = G__17209;
i__17194_17198 = G__17210;
continue;
}
} else
{var n_17211 = cljs.core.first.call(null,seq__17191_17205__$1);n_17211.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__17212 = cljs.core.next.call(null,seq__17191_17205__$1);
var G__17213 = null;
var G__17214 = 0;
var G__17215 = 0;
seq__17191_17195 = G__17212;
chunk__17192_17196 = G__17213;
count__17193_17197 = G__17214;
i__17194_17198 = G__17215;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__17216){
var content = cljs.core.first(arglist__17216);
arglist__17216 = cljs.core.next(arglist__17216);
var name = cljs.core.first(arglist__17216);
var value = cljs.core.rest(arglist__17216);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__17221_17225 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17222_17226 = null;var count__17223_17227 = 0;var i__17224_17228 = 0;while(true){
if((i__17224_17228 < count__17223_17227))
{var n_17229 = cljs.core._nth.call(null,chunk__17222_17226,i__17224_17228);n_17229.removeAttribute(cljs.core.name.call(null,name));
{
var G__17230 = seq__17221_17225;
var G__17231 = chunk__17222_17226;
var G__17232 = count__17223_17227;
var G__17233 = (i__17224_17228 + 1);
seq__17221_17225 = G__17230;
chunk__17222_17226 = G__17231;
count__17223_17227 = G__17232;
i__17224_17228 = G__17233;
continue;
}
} else
{var temp__4092__auto___17234 = cljs.core.seq.call(null,seq__17221_17225);if(temp__4092__auto___17234)
{var seq__17221_17235__$1 = temp__4092__auto___17234;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17221_17235__$1))
{var c__4148__auto___17236 = cljs.core.chunk_first.call(null,seq__17221_17235__$1);{
var G__17237 = cljs.core.chunk_rest.call(null,seq__17221_17235__$1);
var G__17238 = c__4148__auto___17236;
var G__17239 = cljs.core.count.call(null,c__4148__auto___17236);
var G__17240 = 0;
seq__17221_17225 = G__17237;
chunk__17222_17226 = G__17238;
count__17223_17227 = G__17239;
i__17224_17228 = G__17240;
continue;
}
} else
{var n_17241 = cljs.core.first.call(null,seq__17221_17235__$1);n_17241.removeAttribute(cljs.core.name.call(null,name));
{
var G__17242 = cljs.core.next.call(null,seq__17221_17235__$1);
var G__17243 = null;
var G__17244 = 0;
var G__17245 = 0;
seq__17221_17225 = G__17242;
chunk__17222_17226 = G__17243;
count__17223_17227 = G__17244;
i__17224_17228 = G__17245;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__17247 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__17247,0,null);var v = cljs.core.nth.call(null,vec__17247,1,null);if(cljs.core.truth_((function (){var and__3394__auto__ = k;if(cljs.core.truth_(and__3394__auto__))
{return v;
} else
{return and__3394__auto__;
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
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__17248_SHARP_){var attr = attrs__$1.item(p1__17248_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__17255_17261 = cljs.core.seq.call(null,styles);var chunk__17256_17262 = null;var count__17257_17263 = 0;var i__17258_17264 = 0;while(true){
if((i__17258_17264 < count__17257_17263))
{var vec__17259_17265 = cljs.core._nth.call(null,chunk__17256_17262,i__17258_17264);var name_17266 = cljs.core.nth.call(null,vec__17259_17265,0,null);var value_17267 = cljs.core.nth.call(null,vec__17259_17265,1,null);domina.set_style_BANG_.call(null,content,name_17266,value_17267);
{
var G__17268 = seq__17255_17261;
var G__17269 = chunk__17256_17262;
var G__17270 = count__17257_17263;
var G__17271 = (i__17258_17264 + 1);
seq__17255_17261 = G__17268;
chunk__17256_17262 = G__17269;
count__17257_17263 = G__17270;
i__17258_17264 = G__17271;
continue;
}
} else
{var temp__4092__auto___17272 = cljs.core.seq.call(null,seq__17255_17261);if(temp__4092__auto___17272)
{var seq__17255_17273__$1 = temp__4092__auto___17272;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17255_17273__$1))
{var c__4148__auto___17274 = cljs.core.chunk_first.call(null,seq__17255_17273__$1);{
var G__17275 = cljs.core.chunk_rest.call(null,seq__17255_17273__$1);
var G__17276 = c__4148__auto___17274;
var G__17277 = cljs.core.count.call(null,c__4148__auto___17274);
var G__17278 = 0;
seq__17255_17261 = G__17275;
chunk__17256_17262 = G__17276;
count__17257_17263 = G__17277;
i__17258_17264 = G__17278;
continue;
}
} else
{var vec__17260_17279 = cljs.core.first.call(null,seq__17255_17273__$1);var name_17280 = cljs.core.nth.call(null,vec__17260_17279,0,null);var value_17281 = cljs.core.nth.call(null,vec__17260_17279,1,null);domina.set_style_BANG_.call(null,content,name_17280,value_17281);
{
var G__17282 = cljs.core.next.call(null,seq__17255_17273__$1);
var G__17283 = null;
var G__17284 = 0;
var G__17285 = 0;
seq__17255_17261 = G__17282;
chunk__17256_17262 = G__17283;
count__17257_17263 = G__17284;
i__17258_17264 = G__17285;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__17292_17298 = cljs.core.seq.call(null,attrs);var chunk__17293_17299 = null;var count__17294_17300 = 0;var i__17295_17301 = 0;while(true){
if((i__17295_17301 < count__17294_17300))
{var vec__17296_17302 = cljs.core._nth.call(null,chunk__17293_17299,i__17295_17301);var name_17303 = cljs.core.nth.call(null,vec__17296_17302,0,null);var value_17304 = cljs.core.nth.call(null,vec__17296_17302,1,null);domina.set_attr_BANG_.call(null,content,name_17303,value_17304);
{
var G__17305 = seq__17292_17298;
var G__17306 = chunk__17293_17299;
var G__17307 = count__17294_17300;
var G__17308 = (i__17295_17301 + 1);
seq__17292_17298 = G__17305;
chunk__17293_17299 = G__17306;
count__17294_17300 = G__17307;
i__17295_17301 = G__17308;
continue;
}
} else
{var temp__4092__auto___17309 = cljs.core.seq.call(null,seq__17292_17298);if(temp__4092__auto___17309)
{var seq__17292_17310__$1 = temp__4092__auto___17309;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17292_17310__$1))
{var c__4148__auto___17311 = cljs.core.chunk_first.call(null,seq__17292_17310__$1);{
var G__17312 = cljs.core.chunk_rest.call(null,seq__17292_17310__$1);
var G__17313 = c__4148__auto___17311;
var G__17314 = cljs.core.count.call(null,c__4148__auto___17311);
var G__17315 = 0;
seq__17292_17298 = G__17312;
chunk__17293_17299 = G__17313;
count__17294_17300 = G__17314;
i__17295_17301 = G__17315;
continue;
}
} else
{var vec__17297_17316 = cljs.core.first.call(null,seq__17292_17310__$1);var name_17317 = cljs.core.nth.call(null,vec__17297_17316,0,null);var value_17318 = cljs.core.nth.call(null,vec__17297_17316,1,null);domina.set_attr_BANG_.call(null,content,name_17317,value_17318);
{
var G__17319 = cljs.core.next.call(null,seq__17292_17310__$1);
var G__17320 = null;
var G__17321 = 0;
var G__17322 = 0;
seq__17292_17298 = G__17319;
chunk__17293_17299 = G__17320;
count__17294_17300 = G__17321;
i__17295_17301 = G__17322;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__17327_17331 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17328_17332 = null;var count__17329_17333 = 0;var i__17330_17334 = 0;while(true){
if((i__17330_17334 < count__17329_17333))
{var node_17335 = cljs.core._nth.call(null,chunk__17328_17332,i__17330_17334);goog.dom.classes.add(node_17335,class$);
{
var G__17336 = seq__17327_17331;
var G__17337 = chunk__17328_17332;
var G__17338 = count__17329_17333;
var G__17339 = (i__17330_17334 + 1);
seq__17327_17331 = G__17336;
chunk__17328_17332 = G__17337;
count__17329_17333 = G__17338;
i__17330_17334 = G__17339;
continue;
}
} else
{var temp__4092__auto___17340 = cljs.core.seq.call(null,seq__17327_17331);if(temp__4092__auto___17340)
{var seq__17327_17341__$1 = temp__4092__auto___17340;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17327_17341__$1))
{var c__4148__auto___17342 = cljs.core.chunk_first.call(null,seq__17327_17341__$1);{
var G__17343 = cljs.core.chunk_rest.call(null,seq__17327_17341__$1);
var G__17344 = c__4148__auto___17342;
var G__17345 = cljs.core.count.call(null,c__4148__auto___17342);
var G__17346 = 0;
seq__17327_17331 = G__17343;
chunk__17328_17332 = G__17344;
count__17329_17333 = G__17345;
i__17330_17334 = G__17346;
continue;
}
} else
{var node_17347 = cljs.core.first.call(null,seq__17327_17341__$1);goog.dom.classes.add(node_17347,class$);
{
var G__17348 = cljs.core.next.call(null,seq__17327_17341__$1);
var G__17349 = null;
var G__17350 = 0;
var G__17351 = 0;
seq__17327_17331 = G__17348;
chunk__17328_17332 = G__17349;
count__17329_17333 = G__17350;
i__17330_17334 = G__17351;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__17356_17360 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17357_17361 = null;var count__17358_17362 = 0;var i__17359_17363 = 0;while(true){
if((i__17359_17363 < count__17358_17362))
{var node_17364 = cljs.core._nth.call(null,chunk__17357_17361,i__17359_17363);goog.dom.classes.remove(node_17364,class$);
{
var G__17365 = seq__17356_17360;
var G__17366 = chunk__17357_17361;
var G__17367 = count__17358_17362;
var G__17368 = (i__17359_17363 + 1);
seq__17356_17360 = G__17365;
chunk__17357_17361 = G__17366;
count__17358_17362 = G__17367;
i__17359_17363 = G__17368;
continue;
}
} else
{var temp__4092__auto___17369 = cljs.core.seq.call(null,seq__17356_17360);if(temp__4092__auto___17369)
{var seq__17356_17370__$1 = temp__4092__auto___17369;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17356_17370__$1))
{var c__4148__auto___17371 = cljs.core.chunk_first.call(null,seq__17356_17370__$1);{
var G__17372 = cljs.core.chunk_rest.call(null,seq__17356_17370__$1);
var G__17373 = c__4148__auto___17371;
var G__17374 = cljs.core.count.call(null,c__4148__auto___17371);
var G__17375 = 0;
seq__17356_17360 = G__17372;
chunk__17357_17361 = G__17373;
count__17358_17362 = G__17374;
i__17359_17363 = G__17375;
continue;
}
} else
{var node_17376 = cljs.core.first.call(null,seq__17356_17370__$1);goog.dom.classes.remove(node_17376,class$);
{
var G__17377 = cljs.core.next.call(null,seq__17356_17370__$1);
var G__17378 = null;
var G__17379 = 0;
var G__17380 = 0;
seq__17356_17360 = G__17377;
chunk__17357_17361 = G__17378;
count__17358_17362 = G__17379;
i__17359_17363 = G__17380;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__17385_17389 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17386_17390 = null;var count__17387_17391 = 0;var i__17388_17392 = 0;while(true){
if((i__17388_17392 < count__17387_17391))
{var node_17393 = cljs.core._nth.call(null,chunk__17386_17390,i__17388_17392);goog.dom.classes.toggle(node_17393,class$);
{
var G__17394 = seq__17385_17389;
var G__17395 = chunk__17386_17390;
var G__17396 = count__17387_17391;
var G__17397 = (i__17388_17392 + 1);
seq__17385_17389 = G__17394;
chunk__17386_17390 = G__17395;
count__17387_17391 = G__17396;
i__17388_17392 = G__17397;
continue;
}
} else
{var temp__4092__auto___17398 = cljs.core.seq.call(null,seq__17385_17389);if(temp__4092__auto___17398)
{var seq__17385_17399__$1 = temp__4092__auto___17398;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17385_17399__$1))
{var c__4148__auto___17400 = cljs.core.chunk_first.call(null,seq__17385_17399__$1);{
var G__17401 = cljs.core.chunk_rest.call(null,seq__17385_17399__$1);
var G__17402 = c__4148__auto___17400;
var G__17403 = cljs.core.count.call(null,c__4148__auto___17400);
var G__17404 = 0;
seq__17385_17389 = G__17401;
chunk__17386_17390 = G__17402;
count__17387_17391 = G__17403;
i__17388_17392 = G__17404;
continue;
}
} else
{var node_17405 = cljs.core.first.call(null,seq__17385_17399__$1);goog.dom.classes.toggle(node_17405,class$);
{
var G__17406 = cljs.core.next.call(null,seq__17385_17399__$1);
var G__17407 = null;
var G__17408 = 0;
var G__17409 = 0;
seq__17385_17389 = G__17406;
chunk__17386_17390 = G__17407;
count__17387_17391 = G__17408;
i__17388_17392 = G__17409;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_17418__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__17414_17419 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17415_17420 = null;var count__17416_17421 = 0;var i__17417_17422 = 0;while(true){
if((i__17417_17422 < count__17416_17421))
{var node_17423 = cljs.core._nth.call(null,chunk__17415_17420,i__17417_17422);goog.dom.classes.set(node_17423,classes_17418__$1);
{
var G__17424 = seq__17414_17419;
var G__17425 = chunk__17415_17420;
var G__17426 = count__17416_17421;
var G__17427 = (i__17417_17422 + 1);
seq__17414_17419 = G__17424;
chunk__17415_17420 = G__17425;
count__17416_17421 = G__17426;
i__17417_17422 = G__17427;
continue;
}
} else
{var temp__4092__auto___17428 = cljs.core.seq.call(null,seq__17414_17419);if(temp__4092__auto___17428)
{var seq__17414_17429__$1 = temp__4092__auto___17428;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17414_17429__$1))
{var c__4148__auto___17430 = cljs.core.chunk_first.call(null,seq__17414_17429__$1);{
var G__17431 = cljs.core.chunk_rest.call(null,seq__17414_17429__$1);
var G__17432 = c__4148__auto___17430;
var G__17433 = cljs.core.count.call(null,c__4148__auto___17430);
var G__17434 = 0;
seq__17414_17419 = G__17431;
chunk__17415_17420 = G__17432;
count__17416_17421 = G__17433;
i__17417_17422 = G__17434;
continue;
}
} else
{var node_17435 = cljs.core.first.call(null,seq__17414_17429__$1);goog.dom.classes.set(node_17435,classes_17418__$1);
{
var G__17436 = cljs.core.next.call(null,seq__17414_17429__$1);
var G__17437 = null;
var G__17438 = 0;
var G__17439 = 0;
seq__17414_17419 = G__17436;
chunk__17415_17420 = G__17437;
count__17416_17421 = G__17438;
i__17417_17422 = G__17439;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__17444_17448 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17445_17449 = null;var count__17446_17450 = 0;var i__17447_17451 = 0;while(true){
if((i__17447_17451 < count__17446_17450))
{var node_17452 = cljs.core._nth.call(null,chunk__17445_17449,i__17447_17451);goog.dom.setTextContent(node_17452,value);
{
var G__17453 = seq__17444_17448;
var G__17454 = chunk__17445_17449;
var G__17455 = count__17446_17450;
var G__17456 = (i__17447_17451 + 1);
seq__17444_17448 = G__17453;
chunk__17445_17449 = G__17454;
count__17446_17450 = G__17455;
i__17447_17451 = G__17456;
continue;
}
} else
{var temp__4092__auto___17457 = cljs.core.seq.call(null,seq__17444_17448);if(temp__4092__auto___17457)
{var seq__17444_17458__$1 = temp__4092__auto___17457;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17444_17458__$1))
{var c__4148__auto___17459 = cljs.core.chunk_first.call(null,seq__17444_17458__$1);{
var G__17460 = cljs.core.chunk_rest.call(null,seq__17444_17458__$1);
var G__17461 = c__4148__auto___17459;
var G__17462 = cljs.core.count.call(null,c__4148__auto___17459);
var G__17463 = 0;
seq__17444_17448 = G__17460;
chunk__17445_17449 = G__17461;
count__17446_17450 = G__17462;
i__17447_17451 = G__17463;
continue;
}
} else
{var node_17464 = cljs.core.first.call(null,seq__17444_17458__$1);goog.dom.setTextContent(node_17464,value);
{
var G__17465 = cljs.core.next.call(null,seq__17444_17458__$1);
var G__17466 = null;
var G__17467 = 0;
var G__17468 = 0;
seq__17444_17448 = G__17465;
chunk__17445_17449 = G__17466;
count__17446_17450 = G__17467;
i__17447_17451 = G__17468;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__17473_17477 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17474_17478 = null;var count__17475_17479 = 0;var i__17476_17480 = 0;while(true){
if((i__17476_17480 < count__17475_17479))
{var node_17481 = cljs.core._nth.call(null,chunk__17474_17478,i__17476_17480);goog.dom.forms.setValue(node_17481,value);
{
var G__17482 = seq__17473_17477;
var G__17483 = chunk__17474_17478;
var G__17484 = count__17475_17479;
var G__17485 = (i__17476_17480 + 1);
seq__17473_17477 = G__17482;
chunk__17474_17478 = G__17483;
count__17475_17479 = G__17484;
i__17476_17480 = G__17485;
continue;
}
} else
{var temp__4092__auto___17486 = cljs.core.seq.call(null,seq__17473_17477);if(temp__4092__auto___17486)
{var seq__17473_17487__$1 = temp__4092__auto___17486;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17473_17487__$1))
{var c__4148__auto___17488 = cljs.core.chunk_first.call(null,seq__17473_17487__$1);{
var G__17489 = cljs.core.chunk_rest.call(null,seq__17473_17487__$1);
var G__17490 = c__4148__auto___17488;
var G__17491 = cljs.core.count.call(null,c__4148__auto___17488);
var G__17492 = 0;
seq__17473_17477 = G__17489;
chunk__17474_17478 = G__17490;
count__17475_17479 = G__17491;
i__17476_17480 = G__17492;
continue;
}
} else
{var node_17493 = cljs.core.first.call(null,seq__17473_17487__$1);goog.dom.forms.setValue(node_17493,value);
{
var G__17494 = cljs.core.next.call(null,seq__17473_17487__$1);
var G__17495 = null;
var G__17496 = 0;
var G__17497 = 0;
seq__17473_17477 = G__17494;
chunk__17474_17478 = G__17495;
count__17475_17479 = G__17496;
i__17476_17480 = G__17497;
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
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))].join('').toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__3394__auto__ = allows_inner_html_QMARK_;if(and__3394__auto__)
{var and__3394__auto____$1 = (function (){var or__3406__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();if(cljs.core.truth_(and__3394__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__3394__auto____$1;
}
} else
{return and__3394__auto__;
}
})()))
{var value_17508 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__17504_17509 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17505_17510 = null;var count__17506_17511 = 0;var i__17507_17512 = 0;while(true){
if((i__17507_17512 < count__17506_17511))
{var node_17513 = cljs.core._nth.call(null,chunk__17505_17510,i__17507_17512);node_17513.innerHTML = value_17508;
{
var G__17514 = seq__17504_17509;
var G__17515 = chunk__17505_17510;
var G__17516 = count__17506_17511;
var G__17517 = (i__17507_17512 + 1);
seq__17504_17509 = G__17514;
chunk__17505_17510 = G__17515;
count__17506_17511 = G__17516;
i__17507_17512 = G__17517;
continue;
}
} else
{var temp__4092__auto___17518 = cljs.core.seq.call(null,seq__17504_17509);if(temp__4092__auto___17518)
{var seq__17504_17519__$1 = temp__4092__auto___17518;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17504_17519__$1))
{var c__4148__auto___17520 = cljs.core.chunk_first.call(null,seq__17504_17519__$1);{
var G__17521 = cljs.core.chunk_rest.call(null,seq__17504_17519__$1);
var G__17522 = c__4148__auto___17520;
var G__17523 = cljs.core.count.call(null,c__4148__auto___17520);
var G__17524 = 0;
seq__17504_17509 = G__17521;
chunk__17505_17510 = G__17522;
count__17506_17511 = G__17523;
i__17507_17512 = G__17524;
continue;
}
} else
{var node_17525 = cljs.core.first.call(null,seq__17504_17519__$1);node_17525.innerHTML = value_17508;
{
var G__17526 = cljs.core.next.call(null,seq__17504_17519__$1);
var G__17527 = null;
var G__17528 = 0;
var G__17529 = 0;
seq__17504_17509 = G__17526;
chunk__17505_17510 = G__17527;
count__17506_17511 = G__17528;
i__17507_17512 = G__17529;
continue;
}
}
} else
{}
}
break;
}
}catch (e17503){if((e17503 instanceof Error))
{var e_17530 = e17503;domina.replace_children_BANG_.call(null,content,value_17508);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17503;
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
var get_data__3 = (function (node,key,bubble){var m = domina.single_node.call(null,node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);if(cljs.core.truth_((function (){var and__3394__auto__ = bubble;if(cljs.core.truth_(and__3394__auto__))
{return (value == null);
} else
{return and__3394__auto__;
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
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__3406__auto__ = domina.single_node.call(null,node).__domina_data;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__17537_17541 = cljs.core.seq.call(null,children);var chunk__17538_17542 = null;var count__17539_17543 = 0;var i__17540_17544 = 0;while(true){
if((i__17540_17544 < count__17539_17543))
{var child_17545 = cljs.core._nth.call(null,chunk__17538_17542,i__17540_17544);frag.appendChild(child_17545);
{
var G__17546 = seq__17537_17541;
var G__17547 = chunk__17538_17542;
var G__17548 = count__17539_17543;
var G__17549 = (i__17540_17544 + 1);
seq__17537_17541 = G__17546;
chunk__17538_17542 = G__17547;
count__17539_17543 = G__17548;
i__17540_17544 = G__17549;
continue;
}
} else
{var temp__4092__auto___17550 = cljs.core.seq.call(null,seq__17537_17541);if(temp__4092__auto___17550)
{var seq__17537_17551__$1 = temp__4092__auto___17550;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17537_17551__$1))
{var c__4148__auto___17552 = cljs.core.chunk_first.call(null,seq__17537_17551__$1);{
var G__17553 = cljs.core.chunk_rest.call(null,seq__17537_17551__$1);
var G__17554 = c__4148__auto___17552;
var G__17555 = cljs.core.count.call(null,c__4148__auto___17552);
var G__17556 = 0;
seq__17537_17541 = G__17553;
chunk__17538_17542 = G__17554;
count__17539_17543 = G__17555;
i__17540_17544 = G__17556;
continue;
}
} else
{var child_17557 = cljs.core.first.call(null,seq__17537_17551__$1);frag.appendChild(child_17557);
{
var G__17558 = cljs.core.next.call(null,seq__17537_17551__$1);
var G__17559 = null;
var G__17560 = 0;
var G__17561 = 0;
seq__17537_17541 = G__17558;
chunk__17538_17542 = G__17559;
count__17539_17543 = G__17560;
i__17540_17544 = G__17561;
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
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__17531_SHARP_,p2__17532_SHARP_){return f.call(null,p1__17531_SHARP_,p2__17532_SHARP_);
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
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__3394__auto__ = obj;if(cljs.core.truth_(and__3394__auto__))
{var and__3394__auto____$1 = cljs.core.not.call(null,obj.nodeName);if(and__3394__auto____$1)
{return obj.length;
} else
{return and__3394__auto____$1;
}
} else
{return and__3394__auto__;
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
{if((function (){var G__17563 = list_thing;if(G__17563)
{var bit__4050__auto__ = (G__17563.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__17563.cljs$core$ISeqable$))
{return true;
} else
{if((!G__17563.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__17563);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__17563);
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
{if((function (){var G__17564 = content;if(G__17564)
{var bit__4050__auto__ = (G__17564.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__17564.cljs$core$ISeqable$))
{return true;
} else
{if((!G__17564.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__17564);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__17564);
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
{if((function (){var G__17565 = content;if(G__17565)
{var bit__4050__auto__ = (G__17565.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__17565.cljs$core$ISeqable$))
{return true;
} else
{if((!G__17565.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__17565);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__17565);
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

//# sourceMappingURL=domina.js.map