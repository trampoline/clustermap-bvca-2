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
var opt_wrapper_17114 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_17115 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_17116 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",new cljs.core.Keyword(null,"default","default",2558708147),"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_17115,table_section_wrapper_17115,opt_wrapper_17114,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_17116,table_section_wrapper_17115,cell_wrapper_17116,opt_wrapper_17114,table_section_wrapper_17115,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_17115]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3394__auto__ = div.firstChild;if(cljs.core.truth_(and__3394__auto__))
{return div.firstChild.childNodes;
} else
{return and__3394__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__17121 = cljs.core.seq.call(null,tbody);var chunk__17122 = null;var count__17123 = 0;var i__17124 = 0;while(true){
if((i__17124 < count__17123))
{var child = cljs.core._nth.call(null,chunk__17122,i__17124);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__17125 = seq__17121;
var G__17126 = chunk__17122;
var G__17127 = count__17123;
var G__17128 = (i__17124 + 1);
seq__17121 = G__17125;
chunk__17122 = G__17126;
count__17123 = G__17127;
i__17124 = G__17128;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__17121);if(temp__4092__auto__)
{var seq__17121__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17121__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__17121__$1);{
var G__17129 = cljs.core.chunk_rest.call(null,seq__17121__$1);
var G__17130 = c__4148__auto__;
var G__17131 = cljs.core.count.call(null,c__4148__auto__);
var G__17132 = 0;
seq__17121 = G__17129;
chunk__17122 = G__17130;
count__17123 = G__17131;
i__17124 = G__17132;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__17121__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__17133 = cljs.core.next.call(null,seq__17121__$1);
var G__17134 = null;
var G__17135 = 0;
var G__17136 = 0;
seq__17121 = G__17133;
chunk__17122 = G__17134;
count__17123 = G__17135;
i__17124 = G__17136;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__17138 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__17138,0,null);var start_wrap = cljs.core.nth.call(null,vec__17138,1,null);var end_wrap = cljs.core.nth.call(null,vec__17138,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__17139 = wrapper.lastChild;
var G__17140 = (level - 1);
wrapper = G__17139;
level = G__17140;
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
domina.DomContent = (function (){var obj17142 = {};return obj17142;
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
log_debug.cljs$lang$applyTo = (function (arglist__17143){
var mesg = cljs.core.seq(arglist__17143);
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
log.cljs$lang$applyTo = (function (arglist__17144){
var mesg = cljs.core.seq(arglist__17144);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__17145){
var contents = cljs.core.seq(arglist__17145);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__17146_SHARP_){return p1__17146_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__17147_SHARP_,p2__17148_SHARP_){return goog.dom.insertChildAt(p1__17147_SHARP_,p2__17148_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__17150_SHARP_,p2__17149_SHARP_){return goog.dom.insertSiblingBefore(p2__17149_SHARP_,p1__17150_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__17152_SHARP_,p2__17151_SHARP_){return goog.dom.insertSiblingAfter(p2__17151_SHARP_,p1__17152_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__17154_SHARP_,p2__17153_SHARP_){return goog.dom.replaceNode(p2__17153_SHARP_,p1__17154_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__17159_17163 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17160_17164 = null;var count__17161_17165 = 0;var i__17162_17166 = 0;while(true){
if((i__17162_17166 < count__17161_17165))
{var n_17167 = cljs.core._nth.call(null,chunk__17160_17164,i__17162_17166);goog.style.setStyle(n_17167,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__17168 = seq__17159_17163;
var G__17169 = chunk__17160_17164;
var G__17170 = count__17161_17165;
var G__17171 = (i__17162_17166 + 1);
seq__17159_17163 = G__17168;
chunk__17160_17164 = G__17169;
count__17161_17165 = G__17170;
i__17162_17166 = G__17171;
continue;
}
} else
{var temp__4092__auto___17172 = cljs.core.seq.call(null,seq__17159_17163);if(temp__4092__auto___17172)
{var seq__17159_17173__$1 = temp__4092__auto___17172;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17159_17173__$1))
{var c__4148__auto___17174 = cljs.core.chunk_first.call(null,seq__17159_17173__$1);{
var G__17175 = cljs.core.chunk_rest.call(null,seq__17159_17173__$1);
var G__17176 = c__4148__auto___17174;
var G__17177 = cljs.core.count.call(null,c__4148__auto___17174);
var G__17178 = 0;
seq__17159_17163 = G__17175;
chunk__17160_17164 = G__17176;
count__17161_17165 = G__17177;
i__17162_17166 = G__17178;
continue;
}
} else
{var n_17179 = cljs.core.first.call(null,seq__17159_17173__$1);goog.style.setStyle(n_17179,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__17180 = cljs.core.next.call(null,seq__17159_17173__$1);
var G__17181 = null;
var G__17182 = 0;
var G__17183 = 0;
seq__17159_17163 = G__17180;
chunk__17160_17164 = G__17181;
count__17161_17165 = G__17182;
i__17162_17166 = G__17183;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__17184){
var content = cljs.core.first(arglist__17184);
arglist__17184 = cljs.core.next(arglist__17184);
var name = cljs.core.first(arglist__17184);
var value = cljs.core.rest(arglist__17184);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__17189_17193 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17190_17194 = null;var count__17191_17195 = 0;var i__17192_17196 = 0;while(true){
if((i__17192_17196 < count__17191_17195))
{var n_17197 = cljs.core._nth.call(null,chunk__17190_17194,i__17192_17196);n_17197.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__17198 = seq__17189_17193;
var G__17199 = chunk__17190_17194;
var G__17200 = count__17191_17195;
var G__17201 = (i__17192_17196 + 1);
seq__17189_17193 = G__17198;
chunk__17190_17194 = G__17199;
count__17191_17195 = G__17200;
i__17192_17196 = G__17201;
continue;
}
} else
{var temp__4092__auto___17202 = cljs.core.seq.call(null,seq__17189_17193);if(temp__4092__auto___17202)
{var seq__17189_17203__$1 = temp__4092__auto___17202;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17189_17203__$1))
{var c__4148__auto___17204 = cljs.core.chunk_first.call(null,seq__17189_17203__$1);{
var G__17205 = cljs.core.chunk_rest.call(null,seq__17189_17203__$1);
var G__17206 = c__4148__auto___17204;
var G__17207 = cljs.core.count.call(null,c__4148__auto___17204);
var G__17208 = 0;
seq__17189_17193 = G__17205;
chunk__17190_17194 = G__17206;
count__17191_17195 = G__17207;
i__17192_17196 = G__17208;
continue;
}
} else
{var n_17209 = cljs.core.first.call(null,seq__17189_17203__$1);n_17209.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__17210 = cljs.core.next.call(null,seq__17189_17203__$1);
var G__17211 = null;
var G__17212 = 0;
var G__17213 = 0;
seq__17189_17193 = G__17210;
chunk__17190_17194 = G__17211;
count__17191_17195 = G__17212;
i__17192_17196 = G__17213;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__17214){
var content = cljs.core.first(arglist__17214);
arglist__17214 = cljs.core.next(arglist__17214);
var name = cljs.core.first(arglist__17214);
var value = cljs.core.rest(arglist__17214);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__17219_17223 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17220_17224 = null;var count__17221_17225 = 0;var i__17222_17226 = 0;while(true){
if((i__17222_17226 < count__17221_17225))
{var n_17227 = cljs.core._nth.call(null,chunk__17220_17224,i__17222_17226);n_17227.removeAttribute(cljs.core.name.call(null,name));
{
var G__17228 = seq__17219_17223;
var G__17229 = chunk__17220_17224;
var G__17230 = count__17221_17225;
var G__17231 = (i__17222_17226 + 1);
seq__17219_17223 = G__17228;
chunk__17220_17224 = G__17229;
count__17221_17225 = G__17230;
i__17222_17226 = G__17231;
continue;
}
} else
{var temp__4092__auto___17232 = cljs.core.seq.call(null,seq__17219_17223);if(temp__4092__auto___17232)
{var seq__17219_17233__$1 = temp__4092__auto___17232;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17219_17233__$1))
{var c__4148__auto___17234 = cljs.core.chunk_first.call(null,seq__17219_17233__$1);{
var G__17235 = cljs.core.chunk_rest.call(null,seq__17219_17233__$1);
var G__17236 = c__4148__auto___17234;
var G__17237 = cljs.core.count.call(null,c__4148__auto___17234);
var G__17238 = 0;
seq__17219_17223 = G__17235;
chunk__17220_17224 = G__17236;
count__17221_17225 = G__17237;
i__17222_17226 = G__17238;
continue;
}
} else
{var n_17239 = cljs.core.first.call(null,seq__17219_17233__$1);n_17239.removeAttribute(cljs.core.name.call(null,name));
{
var G__17240 = cljs.core.next.call(null,seq__17219_17233__$1);
var G__17241 = null;
var G__17242 = 0;
var G__17243 = 0;
seq__17219_17223 = G__17240;
chunk__17220_17224 = G__17241;
count__17221_17225 = G__17242;
i__17222_17226 = G__17243;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__17245 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__17245,0,null);var v = cljs.core.nth.call(null,vec__17245,1,null);if(cljs.core.truth_((function (){var and__3394__auto__ = k;if(cljs.core.truth_(and__3394__auto__))
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
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__17246_SHARP_){var attr = attrs__$1.item(p1__17246_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__17253_17259 = cljs.core.seq.call(null,styles);var chunk__17254_17260 = null;var count__17255_17261 = 0;var i__17256_17262 = 0;while(true){
if((i__17256_17262 < count__17255_17261))
{var vec__17257_17263 = cljs.core._nth.call(null,chunk__17254_17260,i__17256_17262);var name_17264 = cljs.core.nth.call(null,vec__17257_17263,0,null);var value_17265 = cljs.core.nth.call(null,vec__17257_17263,1,null);domina.set_style_BANG_.call(null,content,name_17264,value_17265);
{
var G__17266 = seq__17253_17259;
var G__17267 = chunk__17254_17260;
var G__17268 = count__17255_17261;
var G__17269 = (i__17256_17262 + 1);
seq__17253_17259 = G__17266;
chunk__17254_17260 = G__17267;
count__17255_17261 = G__17268;
i__17256_17262 = G__17269;
continue;
}
} else
{var temp__4092__auto___17270 = cljs.core.seq.call(null,seq__17253_17259);if(temp__4092__auto___17270)
{var seq__17253_17271__$1 = temp__4092__auto___17270;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17253_17271__$1))
{var c__4148__auto___17272 = cljs.core.chunk_first.call(null,seq__17253_17271__$1);{
var G__17273 = cljs.core.chunk_rest.call(null,seq__17253_17271__$1);
var G__17274 = c__4148__auto___17272;
var G__17275 = cljs.core.count.call(null,c__4148__auto___17272);
var G__17276 = 0;
seq__17253_17259 = G__17273;
chunk__17254_17260 = G__17274;
count__17255_17261 = G__17275;
i__17256_17262 = G__17276;
continue;
}
} else
{var vec__17258_17277 = cljs.core.first.call(null,seq__17253_17271__$1);var name_17278 = cljs.core.nth.call(null,vec__17258_17277,0,null);var value_17279 = cljs.core.nth.call(null,vec__17258_17277,1,null);domina.set_style_BANG_.call(null,content,name_17278,value_17279);
{
var G__17280 = cljs.core.next.call(null,seq__17253_17271__$1);
var G__17281 = null;
var G__17282 = 0;
var G__17283 = 0;
seq__17253_17259 = G__17280;
chunk__17254_17260 = G__17281;
count__17255_17261 = G__17282;
i__17256_17262 = G__17283;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__17290_17296 = cljs.core.seq.call(null,attrs);var chunk__17291_17297 = null;var count__17292_17298 = 0;var i__17293_17299 = 0;while(true){
if((i__17293_17299 < count__17292_17298))
{var vec__17294_17300 = cljs.core._nth.call(null,chunk__17291_17297,i__17293_17299);var name_17301 = cljs.core.nth.call(null,vec__17294_17300,0,null);var value_17302 = cljs.core.nth.call(null,vec__17294_17300,1,null);domina.set_attr_BANG_.call(null,content,name_17301,value_17302);
{
var G__17303 = seq__17290_17296;
var G__17304 = chunk__17291_17297;
var G__17305 = count__17292_17298;
var G__17306 = (i__17293_17299 + 1);
seq__17290_17296 = G__17303;
chunk__17291_17297 = G__17304;
count__17292_17298 = G__17305;
i__17293_17299 = G__17306;
continue;
}
} else
{var temp__4092__auto___17307 = cljs.core.seq.call(null,seq__17290_17296);if(temp__4092__auto___17307)
{var seq__17290_17308__$1 = temp__4092__auto___17307;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17290_17308__$1))
{var c__4148__auto___17309 = cljs.core.chunk_first.call(null,seq__17290_17308__$1);{
var G__17310 = cljs.core.chunk_rest.call(null,seq__17290_17308__$1);
var G__17311 = c__4148__auto___17309;
var G__17312 = cljs.core.count.call(null,c__4148__auto___17309);
var G__17313 = 0;
seq__17290_17296 = G__17310;
chunk__17291_17297 = G__17311;
count__17292_17298 = G__17312;
i__17293_17299 = G__17313;
continue;
}
} else
{var vec__17295_17314 = cljs.core.first.call(null,seq__17290_17308__$1);var name_17315 = cljs.core.nth.call(null,vec__17295_17314,0,null);var value_17316 = cljs.core.nth.call(null,vec__17295_17314,1,null);domina.set_attr_BANG_.call(null,content,name_17315,value_17316);
{
var G__17317 = cljs.core.next.call(null,seq__17290_17308__$1);
var G__17318 = null;
var G__17319 = 0;
var G__17320 = 0;
seq__17290_17296 = G__17317;
chunk__17291_17297 = G__17318;
count__17292_17298 = G__17319;
i__17293_17299 = G__17320;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__17325_17329 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17326_17330 = null;var count__17327_17331 = 0;var i__17328_17332 = 0;while(true){
if((i__17328_17332 < count__17327_17331))
{var node_17333 = cljs.core._nth.call(null,chunk__17326_17330,i__17328_17332);goog.dom.classes.add(node_17333,class$);
{
var G__17334 = seq__17325_17329;
var G__17335 = chunk__17326_17330;
var G__17336 = count__17327_17331;
var G__17337 = (i__17328_17332 + 1);
seq__17325_17329 = G__17334;
chunk__17326_17330 = G__17335;
count__17327_17331 = G__17336;
i__17328_17332 = G__17337;
continue;
}
} else
{var temp__4092__auto___17338 = cljs.core.seq.call(null,seq__17325_17329);if(temp__4092__auto___17338)
{var seq__17325_17339__$1 = temp__4092__auto___17338;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17325_17339__$1))
{var c__4148__auto___17340 = cljs.core.chunk_first.call(null,seq__17325_17339__$1);{
var G__17341 = cljs.core.chunk_rest.call(null,seq__17325_17339__$1);
var G__17342 = c__4148__auto___17340;
var G__17343 = cljs.core.count.call(null,c__4148__auto___17340);
var G__17344 = 0;
seq__17325_17329 = G__17341;
chunk__17326_17330 = G__17342;
count__17327_17331 = G__17343;
i__17328_17332 = G__17344;
continue;
}
} else
{var node_17345 = cljs.core.first.call(null,seq__17325_17339__$1);goog.dom.classes.add(node_17345,class$);
{
var G__17346 = cljs.core.next.call(null,seq__17325_17339__$1);
var G__17347 = null;
var G__17348 = 0;
var G__17349 = 0;
seq__17325_17329 = G__17346;
chunk__17326_17330 = G__17347;
count__17327_17331 = G__17348;
i__17328_17332 = G__17349;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__17354_17358 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17355_17359 = null;var count__17356_17360 = 0;var i__17357_17361 = 0;while(true){
if((i__17357_17361 < count__17356_17360))
{var node_17362 = cljs.core._nth.call(null,chunk__17355_17359,i__17357_17361);goog.dom.classes.remove(node_17362,class$);
{
var G__17363 = seq__17354_17358;
var G__17364 = chunk__17355_17359;
var G__17365 = count__17356_17360;
var G__17366 = (i__17357_17361 + 1);
seq__17354_17358 = G__17363;
chunk__17355_17359 = G__17364;
count__17356_17360 = G__17365;
i__17357_17361 = G__17366;
continue;
}
} else
{var temp__4092__auto___17367 = cljs.core.seq.call(null,seq__17354_17358);if(temp__4092__auto___17367)
{var seq__17354_17368__$1 = temp__4092__auto___17367;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17354_17368__$1))
{var c__4148__auto___17369 = cljs.core.chunk_first.call(null,seq__17354_17368__$1);{
var G__17370 = cljs.core.chunk_rest.call(null,seq__17354_17368__$1);
var G__17371 = c__4148__auto___17369;
var G__17372 = cljs.core.count.call(null,c__4148__auto___17369);
var G__17373 = 0;
seq__17354_17358 = G__17370;
chunk__17355_17359 = G__17371;
count__17356_17360 = G__17372;
i__17357_17361 = G__17373;
continue;
}
} else
{var node_17374 = cljs.core.first.call(null,seq__17354_17368__$1);goog.dom.classes.remove(node_17374,class$);
{
var G__17375 = cljs.core.next.call(null,seq__17354_17368__$1);
var G__17376 = null;
var G__17377 = 0;
var G__17378 = 0;
seq__17354_17358 = G__17375;
chunk__17355_17359 = G__17376;
count__17356_17360 = G__17377;
i__17357_17361 = G__17378;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__17383_17387 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17384_17388 = null;var count__17385_17389 = 0;var i__17386_17390 = 0;while(true){
if((i__17386_17390 < count__17385_17389))
{var node_17391 = cljs.core._nth.call(null,chunk__17384_17388,i__17386_17390);goog.dom.classes.toggle(node_17391,class$);
{
var G__17392 = seq__17383_17387;
var G__17393 = chunk__17384_17388;
var G__17394 = count__17385_17389;
var G__17395 = (i__17386_17390 + 1);
seq__17383_17387 = G__17392;
chunk__17384_17388 = G__17393;
count__17385_17389 = G__17394;
i__17386_17390 = G__17395;
continue;
}
} else
{var temp__4092__auto___17396 = cljs.core.seq.call(null,seq__17383_17387);if(temp__4092__auto___17396)
{var seq__17383_17397__$1 = temp__4092__auto___17396;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17383_17397__$1))
{var c__4148__auto___17398 = cljs.core.chunk_first.call(null,seq__17383_17397__$1);{
var G__17399 = cljs.core.chunk_rest.call(null,seq__17383_17397__$1);
var G__17400 = c__4148__auto___17398;
var G__17401 = cljs.core.count.call(null,c__4148__auto___17398);
var G__17402 = 0;
seq__17383_17387 = G__17399;
chunk__17384_17388 = G__17400;
count__17385_17389 = G__17401;
i__17386_17390 = G__17402;
continue;
}
} else
{var node_17403 = cljs.core.first.call(null,seq__17383_17397__$1);goog.dom.classes.toggle(node_17403,class$);
{
var G__17404 = cljs.core.next.call(null,seq__17383_17397__$1);
var G__17405 = null;
var G__17406 = 0;
var G__17407 = 0;
seq__17383_17387 = G__17404;
chunk__17384_17388 = G__17405;
count__17385_17389 = G__17406;
i__17386_17390 = G__17407;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_17416__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__17412_17417 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17413_17418 = null;var count__17414_17419 = 0;var i__17415_17420 = 0;while(true){
if((i__17415_17420 < count__17414_17419))
{var node_17421 = cljs.core._nth.call(null,chunk__17413_17418,i__17415_17420);goog.dom.classes.set(node_17421,classes_17416__$1);
{
var G__17422 = seq__17412_17417;
var G__17423 = chunk__17413_17418;
var G__17424 = count__17414_17419;
var G__17425 = (i__17415_17420 + 1);
seq__17412_17417 = G__17422;
chunk__17413_17418 = G__17423;
count__17414_17419 = G__17424;
i__17415_17420 = G__17425;
continue;
}
} else
{var temp__4092__auto___17426 = cljs.core.seq.call(null,seq__17412_17417);if(temp__4092__auto___17426)
{var seq__17412_17427__$1 = temp__4092__auto___17426;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17412_17427__$1))
{var c__4148__auto___17428 = cljs.core.chunk_first.call(null,seq__17412_17427__$1);{
var G__17429 = cljs.core.chunk_rest.call(null,seq__17412_17427__$1);
var G__17430 = c__4148__auto___17428;
var G__17431 = cljs.core.count.call(null,c__4148__auto___17428);
var G__17432 = 0;
seq__17412_17417 = G__17429;
chunk__17413_17418 = G__17430;
count__17414_17419 = G__17431;
i__17415_17420 = G__17432;
continue;
}
} else
{var node_17433 = cljs.core.first.call(null,seq__17412_17427__$1);goog.dom.classes.set(node_17433,classes_17416__$1);
{
var G__17434 = cljs.core.next.call(null,seq__17412_17427__$1);
var G__17435 = null;
var G__17436 = 0;
var G__17437 = 0;
seq__17412_17417 = G__17434;
chunk__17413_17418 = G__17435;
count__17414_17419 = G__17436;
i__17415_17420 = G__17437;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__17442_17446 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17443_17447 = null;var count__17444_17448 = 0;var i__17445_17449 = 0;while(true){
if((i__17445_17449 < count__17444_17448))
{var node_17450 = cljs.core._nth.call(null,chunk__17443_17447,i__17445_17449);goog.dom.setTextContent(node_17450,value);
{
var G__17451 = seq__17442_17446;
var G__17452 = chunk__17443_17447;
var G__17453 = count__17444_17448;
var G__17454 = (i__17445_17449 + 1);
seq__17442_17446 = G__17451;
chunk__17443_17447 = G__17452;
count__17444_17448 = G__17453;
i__17445_17449 = G__17454;
continue;
}
} else
{var temp__4092__auto___17455 = cljs.core.seq.call(null,seq__17442_17446);if(temp__4092__auto___17455)
{var seq__17442_17456__$1 = temp__4092__auto___17455;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17442_17456__$1))
{var c__4148__auto___17457 = cljs.core.chunk_first.call(null,seq__17442_17456__$1);{
var G__17458 = cljs.core.chunk_rest.call(null,seq__17442_17456__$1);
var G__17459 = c__4148__auto___17457;
var G__17460 = cljs.core.count.call(null,c__4148__auto___17457);
var G__17461 = 0;
seq__17442_17446 = G__17458;
chunk__17443_17447 = G__17459;
count__17444_17448 = G__17460;
i__17445_17449 = G__17461;
continue;
}
} else
{var node_17462 = cljs.core.first.call(null,seq__17442_17456__$1);goog.dom.setTextContent(node_17462,value);
{
var G__17463 = cljs.core.next.call(null,seq__17442_17456__$1);
var G__17464 = null;
var G__17465 = 0;
var G__17466 = 0;
seq__17442_17446 = G__17463;
chunk__17443_17447 = G__17464;
count__17444_17448 = G__17465;
i__17445_17449 = G__17466;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__17471_17475 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17472_17476 = null;var count__17473_17477 = 0;var i__17474_17478 = 0;while(true){
if((i__17474_17478 < count__17473_17477))
{var node_17479 = cljs.core._nth.call(null,chunk__17472_17476,i__17474_17478);goog.dom.forms.setValue(node_17479,value);
{
var G__17480 = seq__17471_17475;
var G__17481 = chunk__17472_17476;
var G__17482 = count__17473_17477;
var G__17483 = (i__17474_17478 + 1);
seq__17471_17475 = G__17480;
chunk__17472_17476 = G__17481;
count__17473_17477 = G__17482;
i__17474_17478 = G__17483;
continue;
}
} else
{var temp__4092__auto___17484 = cljs.core.seq.call(null,seq__17471_17475);if(temp__4092__auto___17484)
{var seq__17471_17485__$1 = temp__4092__auto___17484;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17471_17485__$1))
{var c__4148__auto___17486 = cljs.core.chunk_first.call(null,seq__17471_17485__$1);{
var G__17487 = cljs.core.chunk_rest.call(null,seq__17471_17485__$1);
var G__17488 = c__4148__auto___17486;
var G__17489 = cljs.core.count.call(null,c__4148__auto___17486);
var G__17490 = 0;
seq__17471_17475 = G__17487;
chunk__17472_17476 = G__17488;
count__17473_17477 = G__17489;
i__17474_17478 = G__17490;
continue;
}
} else
{var node_17491 = cljs.core.first.call(null,seq__17471_17485__$1);goog.dom.forms.setValue(node_17491,value);
{
var G__17492 = cljs.core.next.call(null,seq__17471_17485__$1);
var G__17493 = null;
var G__17494 = 0;
var G__17495 = 0;
seq__17471_17475 = G__17492;
chunk__17472_17476 = G__17493;
count__17473_17477 = G__17494;
i__17474_17478 = G__17495;
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
{var value_17506 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__17502_17507 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17503_17508 = null;var count__17504_17509 = 0;var i__17505_17510 = 0;while(true){
if((i__17505_17510 < count__17504_17509))
{var node_17511 = cljs.core._nth.call(null,chunk__17503_17508,i__17505_17510);node_17511.innerHTML = value_17506;
{
var G__17512 = seq__17502_17507;
var G__17513 = chunk__17503_17508;
var G__17514 = count__17504_17509;
var G__17515 = (i__17505_17510 + 1);
seq__17502_17507 = G__17512;
chunk__17503_17508 = G__17513;
count__17504_17509 = G__17514;
i__17505_17510 = G__17515;
continue;
}
} else
{var temp__4092__auto___17516 = cljs.core.seq.call(null,seq__17502_17507);if(temp__4092__auto___17516)
{var seq__17502_17517__$1 = temp__4092__auto___17516;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17502_17517__$1))
{var c__4148__auto___17518 = cljs.core.chunk_first.call(null,seq__17502_17517__$1);{
var G__17519 = cljs.core.chunk_rest.call(null,seq__17502_17517__$1);
var G__17520 = c__4148__auto___17518;
var G__17521 = cljs.core.count.call(null,c__4148__auto___17518);
var G__17522 = 0;
seq__17502_17507 = G__17519;
chunk__17503_17508 = G__17520;
count__17504_17509 = G__17521;
i__17505_17510 = G__17522;
continue;
}
} else
{var node_17523 = cljs.core.first.call(null,seq__17502_17517__$1);node_17523.innerHTML = value_17506;
{
var G__17524 = cljs.core.next.call(null,seq__17502_17517__$1);
var G__17525 = null;
var G__17526 = 0;
var G__17527 = 0;
seq__17502_17507 = G__17524;
chunk__17503_17508 = G__17525;
count__17504_17509 = G__17526;
i__17505_17510 = G__17527;
continue;
}
}
} else
{}
}
break;
}
}catch (e17501){if((e17501 instanceof Error))
{var e_17528 = e17501;domina.replace_children_BANG_.call(null,content,value_17506);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17501;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__17535_17539 = cljs.core.seq.call(null,children);var chunk__17536_17540 = null;var count__17537_17541 = 0;var i__17538_17542 = 0;while(true){
if((i__17538_17542 < count__17537_17541))
{var child_17543 = cljs.core._nth.call(null,chunk__17536_17540,i__17538_17542);frag.appendChild(child_17543);
{
var G__17544 = seq__17535_17539;
var G__17545 = chunk__17536_17540;
var G__17546 = count__17537_17541;
var G__17547 = (i__17538_17542 + 1);
seq__17535_17539 = G__17544;
chunk__17536_17540 = G__17545;
count__17537_17541 = G__17546;
i__17538_17542 = G__17547;
continue;
}
} else
{var temp__4092__auto___17548 = cljs.core.seq.call(null,seq__17535_17539);if(temp__4092__auto___17548)
{var seq__17535_17549__$1 = temp__4092__auto___17548;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17535_17549__$1))
{var c__4148__auto___17550 = cljs.core.chunk_first.call(null,seq__17535_17549__$1);{
var G__17551 = cljs.core.chunk_rest.call(null,seq__17535_17549__$1);
var G__17552 = c__4148__auto___17550;
var G__17553 = cljs.core.count.call(null,c__4148__auto___17550);
var G__17554 = 0;
seq__17535_17539 = G__17551;
chunk__17536_17540 = G__17552;
count__17537_17541 = G__17553;
i__17538_17542 = G__17554;
continue;
}
} else
{var child_17555 = cljs.core.first.call(null,seq__17535_17549__$1);frag.appendChild(child_17555);
{
var G__17556 = cljs.core.next.call(null,seq__17535_17549__$1);
var G__17557 = null;
var G__17558 = 0;
var G__17559 = 0;
seq__17535_17539 = G__17556;
chunk__17536_17540 = G__17557;
count__17537_17541 = G__17558;
i__17538_17542 = G__17559;
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
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__17529_SHARP_,p2__17530_SHARP_){return f.call(null,p1__17529_SHARP_,p2__17530_SHARP_);
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
{if((function (){var G__17561 = list_thing;if(G__17561)
{var bit__4050__auto__ = (G__17561.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__17561.cljs$core$ISeqable$))
{return true;
} else
{if((!G__17561.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__17561);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__17561);
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
{if((function (){var G__17562 = content;if(G__17562)
{var bit__4050__auto__ = (G__17562.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__17562.cljs$core$ISeqable$))
{return true;
} else
{if((!G__17562.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__17562);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__17562);
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
{if((function (){var G__17563 = content;if(G__17563)
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