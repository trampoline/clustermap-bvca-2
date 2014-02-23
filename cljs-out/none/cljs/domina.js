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
var opt_wrapper_17140 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_17141 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_17142 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",new cljs.core.Keyword(null,"default","default",2558708147),"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_17141,table_section_wrapper_17141,opt_wrapper_17140,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_17142,table_section_wrapper_17141,cell_wrapper_17142,opt_wrapper_17140,table_section_wrapper_17141,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_17141]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3394__auto__ = div.firstChild;if(cljs.core.truth_(and__3394__auto__))
{return div.firstChild.childNodes;
} else
{return and__3394__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__17147 = cljs.core.seq.call(null,tbody);var chunk__17148 = null;var count__17149 = 0;var i__17150 = 0;while(true){
if((i__17150 < count__17149))
{var child = cljs.core._nth.call(null,chunk__17148,i__17150);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__17151 = seq__17147;
var G__17152 = chunk__17148;
var G__17153 = count__17149;
var G__17154 = (i__17150 + 1);
seq__17147 = G__17151;
chunk__17148 = G__17152;
count__17149 = G__17153;
i__17150 = G__17154;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__17147);if(temp__4092__auto__)
{var seq__17147__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17147__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__17147__$1);{
var G__17155 = cljs.core.chunk_rest.call(null,seq__17147__$1);
var G__17156 = c__4148__auto__;
var G__17157 = cljs.core.count.call(null,c__4148__auto__);
var G__17158 = 0;
seq__17147 = G__17155;
chunk__17148 = G__17156;
count__17149 = G__17157;
i__17150 = G__17158;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__17147__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__17159 = cljs.core.next.call(null,seq__17147__$1);
var G__17160 = null;
var G__17161 = 0;
var G__17162 = 0;
seq__17147 = G__17159;
chunk__17148 = G__17160;
count__17149 = G__17161;
i__17150 = G__17162;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__17164 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__17164,0,null);var start_wrap = cljs.core.nth.call(null,vec__17164,1,null);var end_wrap = cljs.core.nth.call(null,vec__17164,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__17165 = wrapper.lastChild;
var G__17166 = (level - 1);
wrapper = G__17165;
level = G__17166;
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
domina.DomContent = (function (){var obj17168 = {};return obj17168;
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
log_debug.cljs$lang$applyTo = (function (arglist__17169){
var mesg = cljs.core.seq(arglist__17169);
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
log.cljs$lang$applyTo = (function (arglist__17170){
var mesg = cljs.core.seq(arglist__17170);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__17171){
var contents = cljs.core.seq(arglist__17171);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__17172_SHARP_){return p1__17172_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__17173_SHARP_,p2__17174_SHARP_){return goog.dom.insertChildAt(p1__17173_SHARP_,p2__17174_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__17176_SHARP_,p2__17175_SHARP_){return goog.dom.insertSiblingBefore(p2__17175_SHARP_,p1__17176_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__17178_SHARP_,p2__17177_SHARP_){return goog.dom.insertSiblingAfter(p2__17177_SHARP_,p1__17178_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__17180_SHARP_,p2__17179_SHARP_){return goog.dom.replaceNode(p2__17179_SHARP_,p1__17180_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__17185_17189 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17186_17190 = null;var count__17187_17191 = 0;var i__17188_17192 = 0;while(true){
if((i__17188_17192 < count__17187_17191))
{var n_17193 = cljs.core._nth.call(null,chunk__17186_17190,i__17188_17192);goog.style.setStyle(n_17193,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__17194 = seq__17185_17189;
var G__17195 = chunk__17186_17190;
var G__17196 = count__17187_17191;
var G__17197 = (i__17188_17192 + 1);
seq__17185_17189 = G__17194;
chunk__17186_17190 = G__17195;
count__17187_17191 = G__17196;
i__17188_17192 = G__17197;
continue;
}
} else
{var temp__4092__auto___17198 = cljs.core.seq.call(null,seq__17185_17189);if(temp__4092__auto___17198)
{var seq__17185_17199__$1 = temp__4092__auto___17198;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17185_17199__$1))
{var c__4148__auto___17200 = cljs.core.chunk_first.call(null,seq__17185_17199__$1);{
var G__17201 = cljs.core.chunk_rest.call(null,seq__17185_17199__$1);
var G__17202 = c__4148__auto___17200;
var G__17203 = cljs.core.count.call(null,c__4148__auto___17200);
var G__17204 = 0;
seq__17185_17189 = G__17201;
chunk__17186_17190 = G__17202;
count__17187_17191 = G__17203;
i__17188_17192 = G__17204;
continue;
}
} else
{var n_17205 = cljs.core.first.call(null,seq__17185_17199__$1);goog.style.setStyle(n_17205,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__17206 = cljs.core.next.call(null,seq__17185_17199__$1);
var G__17207 = null;
var G__17208 = 0;
var G__17209 = 0;
seq__17185_17189 = G__17206;
chunk__17186_17190 = G__17207;
count__17187_17191 = G__17208;
i__17188_17192 = G__17209;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__17210){
var content = cljs.core.first(arglist__17210);
arglist__17210 = cljs.core.next(arglist__17210);
var name = cljs.core.first(arglist__17210);
var value = cljs.core.rest(arglist__17210);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__17215_17219 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17216_17220 = null;var count__17217_17221 = 0;var i__17218_17222 = 0;while(true){
if((i__17218_17222 < count__17217_17221))
{var n_17223 = cljs.core._nth.call(null,chunk__17216_17220,i__17218_17222);n_17223.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__17224 = seq__17215_17219;
var G__17225 = chunk__17216_17220;
var G__17226 = count__17217_17221;
var G__17227 = (i__17218_17222 + 1);
seq__17215_17219 = G__17224;
chunk__17216_17220 = G__17225;
count__17217_17221 = G__17226;
i__17218_17222 = G__17227;
continue;
}
} else
{var temp__4092__auto___17228 = cljs.core.seq.call(null,seq__17215_17219);if(temp__4092__auto___17228)
{var seq__17215_17229__$1 = temp__4092__auto___17228;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17215_17229__$1))
{var c__4148__auto___17230 = cljs.core.chunk_first.call(null,seq__17215_17229__$1);{
var G__17231 = cljs.core.chunk_rest.call(null,seq__17215_17229__$1);
var G__17232 = c__4148__auto___17230;
var G__17233 = cljs.core.count.call(null,c__4148__auto___17230);
var G__17234 = 0;
seq__17215_17219 = G__17231;
chunk__17216_17220 = G__17232;
count__17217_17221 = G__17233;
i__17218_17222 = G__17234;
continue;
}
} else
{var n_17235 = cljs.core.first.call(null,seq__17215_17229__$1);n_17235.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__17236 = cljs.core.next.call(null,seq__17215_17229__$1);
var G__17237 = null;
var G__17238 = 0;
var G__17239 = 0;
seq__17215_17219 = G__17236;
chunk__17216_17220 = G__17237;
count__17217_17221 = G__17238;
i__17218_17222 = G__17239;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__17240){
var content = cljs.core.first(arglist__17240);
arglist__17240 = cljs.core.next(arglist__17240);
var name = cljs.core.first(arglist__17240);
var value = cljs.core.rest(arglist__17240);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__17245_17249 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17246_17250 = null;var count__17247_17251 = 0;var i__17248_17252 = 0;while(true){
if((i__17248_17252 < count__17247_17251))
{var n_17253 = cljs.core._nth.call(null,chunk__17246_17250,i__17248_17252);n_17253.removeAttribute(cljs.core.name.call(null,name));
{
var G__17254 = seq__17245_17249;
var G__17255 = chunk__17246_17250;
var G__17256 = count__17247_17251;
var G__17257 = (i__17248_17252 + 1);
seq__17245_17249 = G__17254;
chunk__17246_17250 = G__17255;
count__17247_17251 = G__17256;
i__17248_17252 = G__17257;
continue;
}
} else
{var temp__4092__auto___17258 = cljs.core.seq.call(null,seq__17245_17249);if(temp__4092__auto___17258)
{var seq__17245_17259__$1 = temp__4092__auto___17258;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17245_17259__$1))
{var c__4148__auto___17260 = cljs.core.chunk_first.call(null,seq__17245_17259__$1);{
var G__17261 = cljs.core.chunk_rest.call(null,seq__17245_17259__$1);
var G__17262 = c__4148__auto___17260;
var G__17263 = cljs.core.count.call(null,c__4148__auto___17260);
var G__17264 = 0;
seq__17245_17249 = G__17261;
chunk__17246_17250 = G__17262;
count__17247_17251 = G__17263;
i__17248_17252 = G__17264;
continue;
}
} else
{var n_17265 = cljs.core.first.call(null,seq__17245_17259__$1);n_17265.removeAttribute(cljs.core.name.call(null,name));
{
var G__17266 = cljs.core.next.call(null,seq__17245_17259__$1);
var G__17267 = null;
var G__17268 = 0;
var G__17269 = 0;
seq__17245_17249 = G__17266;
chunk__17246_17250 = G__17267;
count__17247_17251 = G__17268;
i__17248_17252 = G__17269;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__17271 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__17271,0,null);var v = cljs.core.nth.call(null,vec__17271,1,null);if(cljs.core.truth_((function (){var and__3394__auto__ = k;if(cljs.core.truth_(and__3394__auto__))
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
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__17272_SHARP_){var attr = attrs__$1.item(p1__17272_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__17279_17285 = cljs.core.seq.call(null,styles);var chunk__17280_17286 = null;var count__17281_17287 = 0;var i__17282_17288 = 0;while(true){
if((i__17282_17288 < count__17281_17287))
{var vec__17283_17289 = cljs.core._nth.call(null,chunk__17280_17286,i__17282_17288);var name_17290 = cljs.core.nth.call(null,vec__17283_17289,0,null);var value_17291 = cljs.core.nth.call(null,vec__17283_17289,1,null);domina.set_style_BANG_.call(null,content,name_17290,value_17291);
{
var G__17292 = seq__17279_17285;
var G__17293 = chunk__17280_17286;
var G__17294 = count__17281_17287;
var G__17295 = (i__17282_17288 + 1);
seq__17279_17285 = G__17292;
chunk__17280_17286 = G__17293;
count__17281_17287 = G__17294;
i__17282_17288 = G__17295;
continue;
}
} else
{var temp__4092__auto___17296 = cljs.core.seq.call(null,seq__17279_17285);if(temp__4092__auto___17296)
{var seq__17279_17297__$1 = temp__4092__auto___17296;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17279_17297__$1))
{var c__4148__auto___17298 = cljs.core.chunk_first.call(null,seq__17279_17297__$1);{
var G__17299 = cljs.core.chunk_rest.call(null,seq__17279_17297__$1);
var G__17300 = c__4148__auto___17298;
var G__17301 = cljs.core.count.call(null,c__4148__auto___17298);
var G__17302 = 0;
seq__17279_17285 = G__17299;
chunk__17280_17286 = G__17300;
count__17281_17287 = G__17301;
i__17282_17288 = G__17302;
continue;
}
} else
{var vec__17284_17303 = cljs.core.first.call(null,seq__17279_17297__$1);var name_17304 = cljs.core.nth.call(null,vec__17284_17303,0,null);var value_17305 = cljs.core.nth.call(null,vec__17284_17303,1,null);domina.set_style_BANG_.call(null,content,name_17304,value_17305);
{
var G__17306 = cljs.core.next.call(null,seq__17279_17297__$1);
var G__17307 = null;
var G__17308 = 0;
var G__17309 = 0;
seq__17279_17285 = G__17306;
chunk__17280_17286 = G__17307;
count__17281_17287 = G__17308;
i__17282_17288 = G__17309;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__17316_17322 = cljs.core.seq.call(null,attrs);var chunk__17317_17323 = null;var count__17318_17324 = 0;var i__17319_17325 = 0;while(true){
if((i__17319_17325 < count__17318_17324))
{var vec__17320_17326 = cljs.core._nth.call(null,chunk__17317_17323,i__17319_17325);var name_17327 = cljs.core.nth.call(null,vec__17320_17326,0,null);var value_17328 = cljs.core.nth.call(null,vec__17320_17326,1,null);domina.set_attr_BANG_.call(null,content,name_17327,value_17328);
{
var G__17329 = seq__17316_17322;
var G__17330 = chunk__17317_17323;
var G__17331 = count__17318_17324;
var G__17332 = (i__17319_17325 + 1);
seq__17316_17322 = G__17329;
chunk__17317_17323 = G__17330;
count__17318_17324 = G__17331;
i__17319_17325 = G__17332;
continue;
}
} else
{var temp__4092__auto___17333 = cljs.core.seq.call(null,seq__17316_17322);if(temp__4092__auto___17333)
{var seq__17316_17334__$1 = temp__4092__auto___17333;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17316_17334__$1))
{var c__4148__auto___17335 = cljs.core.chunk_first.call(null,seq__17316_17334__$1);{
var G__17336 = cljs.core.chunk_rest.call(null,seq__17316_17334__$1);
var G__17337 = c__4148__auto___17335;
var G__17338 = cljs.core.count.call(null,c__4148__auto___17335);
var G__17339 = 0;
seq__17316_17322 = G__17336;
chunk__17317_17323 = G__17337;
count__17318_17324 = G__17338;
i__17319_17325 = G__17339;
continue;
}
} else
{var vec__17321_17340 = cljs.core.first.call(null,seq__17316_17334__$1);var name_17341 = cljs.core.nth.call(null,vec__17321_17340,0,null);var value_17342 = cljs.core.nth.call(null,vec__17321_17340,1,null);domina.set_attr_BANG_.call(null,content,name_17341,value_17342);
{
var G__17343 = cljs.core.next.call(null,seq__17316_17334__$1);
var G__17344 = null;
var G__17345 = 0;
var G__17346 = 0;
seq__17316_17322 = G__17343;
chunk__17317_17323 = G__17344;
count__17318_17324 = G__17345;
i__17319_17325 = G__17346;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__17351_17355 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17352_17356 = null;var count__17353_17357 = 0;var i__17354_17358 = 0;while(true){
if((i__17354_17358 < count__17353_17357))
{var node_17359 = cljs.core._nth.call(null,chunk__17352_17356,i__17354_17358);goog.dom.classes.add(node_17359,class$);
{
var G__17360 = seq__17351_17355;
var G__17361 = chunk__17352_17356;
var G__17362 = count__17353_17357;
var G__17363 = (i__17354_17358 + 1);
seq__17351_17355 = G__17360;
chunk__17352_17356 = G__17361;
count__17353_17357 = G__17362;
i__17354_17358 = G__17363;
continue;
}
} else
{var temp__4092__auto___17364 = cljs.core.seq.call(null,seq__17351_17355);if(temp__4092__auto___17364)
{var seq__17351_17365__$1 = temp__4092__auto___17364;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17351_17365__$1))
{var c__4148__auto___17366 = cljs.core.chunk_first.call(null,seq__17351_17365__$1);{
var G__17367 = cljs.core.chunk_rest.call(null,seq__17351_17365__$1);
var G__17368 = c__4148__auto___17366;
var G__17369 = cljs.core.count.call(null,c__4148__auto___17366);
var G__17370 = 0;
seq__17351_17355 = G__17367;
chunk__17352_17356 = G__17368;
count__17353_17357 = G__17369;
i__17354_17358 = G__17370;
continue;
}
} else
{var node_17371 = cljs.core.first.call(null,seq__17351_17365__$1);goog.dom.classes.add(node_17371,class$);
{
var G__17372 = cljs.core.next.call(null,seq__17351_17365__$1);
var G__17373 = null;
var G__17374 = 0;
var G__17375 = 0;
seq__17351_17355 = G__17372;
chunk__17352_17356 = G__17373;
count__17353_17357 = G__17374;
i__17354_17358 = G__17375;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__17380_17384 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17381_17385 = null;var count__17382_17386 = 0;var i__17383_17387 = 0;while(true){
if((i__17383_17387 < count__17382_17386))
{var node_17388 = cljs.core._nth.call(null,chunk__17381_17385,i__17383_17387);goog.dom.classes.remove(node_17388,class$);
{
var G__17389 = seq__17380_17384;
var G__17390 = chunk__17381_17385;
var G__17391 = count__17382_17386;
var G__17392 = (i__17383_17387 + 1);
seq__17380_17384 = G__17389;
chunk__17381_17385 = G__17390;
count__17382_17386 = G__17391;
i__17383_17387 = G__17392;
continue;
}
} else
{var temp__4092__auto___17393 = cljs.core.seq.call(null,seq__17380_17384);if(temp__4092__auto___17393)
{var seq__17380_17394__$1 = temp__4092__auto___17393;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17380_17394__$1))
{var c__4148__auto___17395 = cljs.core.chunk_first.call(null,seq__17380_17394__$1);{
var G__17396 = cljs.core.chunk_rest.call(null,seq__17380_17394__$1);
var G__17397 = c__4148__auto___17395;
var G__17398 = cljs.core.count.call(null,c__4148__auto___17395);
var G__17399 = 0;
seq__17380_17384 = G__17396;
chunk__17381_17385 = G__17397;
count__17382_17386 = G__17398;
i__17383_17387 = G__17399;
continue;
}
} else
{var node_17400 = cljs.core.first.call(null,seq__17380_17394__$1);goog.dom.classes.remove(node_17400,class$);
{
var G__17401 = cljs.core.next.call(null,seq__17380_17394__$1);
var G__17402 = null;
var G__17403 = 0;
var G__17404 = 0;
seq__17380_17384 = G__17401;
chunk__17381_17385 = G__17402;
count__17382_17386 = G__17403;
i__17383_17387 = G__17404;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__17409_17413 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17410_17414 = null;var count__17411_17415 = 0;var i__17412_17416 = 0;while(true){
if((i__17412_17416 < count__17411_17415))
{var node_17417 = cljs.core._nth.call(null,chunk__17410_17414,i__17412_17416);goog.dom.classes.toggle(node_17417,class$);
{
var G__17418 = seq__17409_17413;
var G__17419 = chunk__17410_17414;
var G__17420 = count__17411_17415;
var G__17421 = (i__17412_17416 + 1);
seq__17409_17413 = G__17418;
chunk__17410_17414 = G__17419;
count__17411_17415 = G__17420;
i__17412_17416 = G__17421;
continue;
}
} else
{var temp__4092__auto___17422 = cljs.core.seq.call(null,seq__17409_17413);if(temp__4092__auto___17422)
{var seq__17409_17423__$1 = temp__4092__auto___17422;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17409_17423__$1))
{var c__4148__auto___17424 = cljs.core.chunk_first.call(null,seq__17409_17423__$1);{
var G__17425 = cljs.core.chunk_rest.call(null,seq__17409_17423__$1);
var G__17426 = c__4148__auto___17424;
var G__17427 = cljs.core.count.call(null,c__4148__auto___17424);
var G__17428 = 0;
seq__17409_17413 = G__17425;
chunk__17410_17414 = G__17426;
count__17411_17415 = G__17427;
i__17412_17416 = G__17428;
continue;
}
} else
{var node_17429 = cljs.core.first.call(null,seq__17409_17423__$1);goog.dom.classes.toggle(node_17429,class$);
{
var G__17430 = cljs.core.next.call(null,seq__17409_17423__$1);
var G__17431 = null;
var G__17432 = 0;
var G__17433 = 0;
seq__17409_17413 = G__17430;
chunk__17410_17414 = G__17431;
count__17411_17415 = G__17432;
i__17412_17416 = G__17433;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_17442__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__17438_17443 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17439_17444 = null;var count__17440_17445 = 0;var i__17441_17446 = 0;while(true){
if((i__17441_17446 < count__17440_17445))
{var node_17447 = cljs.core._nth.call(null,chunk__17439_17444,i__17441_17446);goog.dom.classes.set(node_17447,classes_17442__$1);
{
var G__17448 = seq__17438_17443;
var G__17449 = chunk__17439_17444;
var G__17450 = count__17440_17445;
var G__17451 = (i__17441_17446 + 1);
seq__17438_17443 = G__17448;
chunk__17439_17444 = G__17449;
count__17440_17445 = G__17450;
i__17441_17446 = G__17451;
continue;
}
} else
{var temp__4092__auto___17452 = cljs.core.seq.call(null,seq__17438_17443);if(temp__4092__auto___17452)
{var seq__17438_17453__$1 = temp__4092__auto___17452;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17438_17453__$1))
{var c__4148__auto___17454 = cljs.core.chunk_first.call(null,seq__17438_17453__$1);{
var G__17455 = cljs.core.chunk_rest.call(null,seq__17438_17453__$1);
var G__17456 = c__4148__auto___17454;
var G__17457 = cljs.core.count.call(null,c__4148__auto___17454);
var G__17458 = 0;
seq__17438_17443 = G__17455;
chunk__17439_17444 = G__17456;
count__17440_17445 = G__17457;
i__17441_17446 = G__17458;
continue;
}
} else
{var node_17459 = cljs.core.first.call(null,seq__17438_17453__$1);goog.dom.classes.set(node_17459,classes_17442__$1);
{
var G__17460 = cljs.core.next.call(null,seq__17438_17453__$1);
var G__17461 = null;
var G__17462 = 0;
var G__17463 = 0;
seq__17438_17443 = G__17460;
chunk__17439_17444 = G__17461;
count__17440_17445 = G__17462;
i__17441_17446 = G__17463;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__17468_17472 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17469_17473 = null;var count__17470_17474 = 0;var i__17471_17475 = 0;while(true){
if((i__17471_17475 < count__17470_17474))
{var node_17476 = cljs.core._nth.call(null,chunk__17469_17473,i__17471_17475);goog.dom.setTextContent(node_17476,value);
{
var G__17477 = seq__17468_17472;
var G__17478 = chunk__17469_17473;
var G__17479 = count__17470_17474;
var G__17480 = (i__17471_17475 + 1);
seq__17468_17472 = G__17477;
chunk__17469_17473 = G__17478;
count__17470_17474 = G__17479;
i__17471_17475 = G__17480;
continue;
}
} else
{var temp__4092__auto___17481 = cljs.core.seq.call(null,seq__17468_17472);if(temp__4092__auto___17481)
{var seq__17468_17482__$1 = temp__4092__auto___17481;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17468_17482__$1))
{var c__4148__auto___17483 = cljs.core.chunk_first.call(null,seq__17468_17482__$1);{
var G__17484 = cljs.core.chunk_rest.call(null,seq__17468_17482__$1);
var G__17485 = c__4148__auto___17483;
var G__17486 = cljs.core.count.call(null,c__4148__auto___17483);
var G__17487 = 0;
seq__17468_17472 = G__17484;
chunk__17469_17473 = G__17485;
count__17470_17474 = G__17486;
i__17471_17475 = G__17487;
continue;
}
} else
{var node_17488 = cljs.core.first.call(null,seq__17468_17482__$1);goog.dom.setTextContent(node_17488,value);
{
var G__17489 = cljs.core.next.call(null,seq__17468_17482__$1);
var G__17490 = null;
var G__17491 = 0;
var G__17492 = 0;
seq__17468_17472 = G__17489;
chunk__17469_17473 = G__17490;
count__17470_17474 = G__17491;
i__17471_17475 = G__17492;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__17497_17501 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17498_17502 = null;var count__17499_17503 = 0;var i__17500_17504 = 0;while(true){
if((i__17500_17504 < count__17499_17503))
{var node_17505 = cljs.core._nth.call(null,chunk__17498_17502,i__17500_17504);goog.dom.forms.setValue(node_17505,value);
{
var G__17506 = seq__17497_17501;
var G__17507 = chunk__17498_17502;
var G__17508 = count__17499_17503;
var G__17509 = (i__17500_17504 + 1);
seq__17497_17501 = G__17506;
chunk__17498_17502 = G__17507;
count__17499_17503 = G__17508;
i__17500_17504 = G__17509;
continue;
}
} else
{var temp__4092__auto___17510 = cljs.core.seq.call(null,seq__17497_17501);if(temp__4092__auto___17510)
{var seq__17497_17511__$1 = temp__4092__auto___17510;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17497_17511__$1))
{var c__4148__auto___17512 = cljs.core.chunk_first.call(null,seq__17497_17511__$1);{
var G__17513 = cljs.core.chunk_rest.call(null,seq__17497_17511__$1);
var G__17514 = c__4148__auto___17512;
var G__17515 = cljs.core.count.call(null,c__4148__auto___17512);
var G__17516 = 0;
seq__17497_17501 = G__17513;
chunk__17498_17502 = G__17514;
count__17499_17503 = G__17515;
i__17500_17504 = G__17516;
continue;
}
} else
{var node_17517 = cljs.core.first.call(null,seq__17497_17511__$1);goog.dom.forms.setValue(node_17517,value);
{
var G__17518 = cljs.core.next.call(null,seq__17497_17511__$1);
var G__17519 = null;
var G__17520 = 0;
var G__17521 = 0;
seq__17497_17501 = G__17518;
chunk__17498_17502 = G__17519;
count__17499_17503 = G__17520;
i__17500_17504 = G__17521;
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
{var value_17532 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__17528_17533 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17529_17534 = null;var count__17530_17535 = 0;var i__17531_17536 = 0;while(true){
if((i__17531_17536 < count__17530_17535))
{var node_17537 = cljs.core._nth.call(null,chunk__17529_17534,i__17531_17536);node_17537.innerHTML = value_17532;
{
var G__17538 = seq__17528_17533;
var G__17539 = chunk__17529_17534;
var G__17540 = count__17530_17535;
var G__17541 = (i__17531_17536 + 1);
seq__17528_17533 = G__17538;
chunk__17529_17534 = G__17539;
count__17530_17535 = G__17540;
i__17531_17536 = G__17541;
continue;
}
} else
{var temp__4092__auto___17542 = cljs.core.seq.call(null,seq__17528_17533);if(temp__4092__auto___17542)
{var seq__17528_17543__$1 = temp__4092__auto___17542;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17528_17543__$1))
{var c__4148__auto___17544 = cljs.core.chunk_first.call(null,seq__17528_17543__$1);{
var G__17545 = cljs.core.chunk_rest.call(null,seq__17528_17543__$1);
var G__17546 = c__4148__auto___17544;
var G__17547 = cljs.core.count.call(null,c__4148__auto___17544);
var G__17548 = 0;
seq__17528_17533 = G__17545;
chunk__17529_17534 = G__17546;
count__17530_17535 = G__17547;
i__17531_17536 = G__17548;
continue;
}
} else
{var node_17549 = cljs.core.first.call(null,seq__17528_17543__$1);node_17549.innerHTML = value_17532;
{
var G__17550 = cljs.core.next.call(null,seq__17528_17543__$1);
var G__17551 = null;
var G__17552 = 0;
var G__17553 = 0;
seq__17528_17533 = G__17550;
chunk__17529_17534 = G__17551;
count__17530_17535 = G__17552;
i__17531_17536 = G__17553;
continue;
}
}
} else
{}
}
break;
}
}catch (e17527){if((e17527 instanceof Error))
{var e_17554 = e17527;domina.replace_children_BANG_.call(null,content,value_17532);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17527;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__17561_17565 = cljs.core.seq.call(null,children);var chunk__17562_17566 = null;var count__17563_17567 = 0;var i__17564_17568 = 0;while(true){
if((i__17564_17568 < count__17563_17567))
{var child_17569 = cljs.core._nth.call(null,chunk__17562_17566,i__17564_17568);frag.appendChild(child_17569);
{
var G__17570 = seq__17561_17565;
var G__17571 = chunk__17562_17566;
var G__17572 = count__17563_17567;
var G__17573 = (i__17564_17568 + 1);
seq__17561_17565 = G__17570;
chunk__17562_17566 = G__17571;
count__17563_17567 = G__17572;
i__17564_17568 = G__17573;
continue;
}
} else
{var temp__4092__auto___17574 = cljs.core.seq.call(null,seq__17561_17565);if(temp__4092__auto___17574)
{var seq__17561_17575__$1 = temp__4092__auto___17574;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17561_17575__$1))
{var c__4148__auto___17576 = cljs.core.chunk_first.call(null,seq__17561_17575__$1);{
var G__17577 = cljs.core.chunk_rest.call(null,seq__17561_17575__$1);
var G__17578 = c__4148__auto___17576;
var G__17579 = cljs.core.count.call(null,c__4148__auto___17576);
var G__17580 = 0;
seq__17561_17565 = G__17577;
chunk__17562_17566 = G__17578;
count__17563_17567 = G__17579;
i__17564_17568 = G__17580;
continue;
}
} else
{var child_17581 = cljs.core.first.call(null,seq__17561_17575__$1);frag.appendChild(child_17581);
{
var G__17582 = cljs.core.next.call(null,seq__17561_17575__$1);
var G__17583 = null;
var G__17584 = 0;
var G__17585 = 0;
seq__17561_17565 = G__17582;
chunk__17562_17566 = G__17583;
count__17563_17567 = G__17584;
i__17564_17568 = G__17585;
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
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__17555_SHARP_,p2__17556_SHARP_){return f.call(null,p1__17555_SHARP_,p2__17556_SHARP_);
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
{if((function (){var G__17587 = list_thing;if(G__17587)
{var bit__4050__auto__ = (G__17587.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__17587.cljs$core$ISeqable$))
{return true;
} else
{if((!G__17587.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__17587);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__17587);
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
{if((function (){var G__17588 = content;if(G__17588)
{var bit__4050__auto__ = (G__17588.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__17588.cljs$core$ISeqable$))
{return true;
} else
{if((!G__17588.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__17588);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__17588);
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
{if((function (){var G__17589 = content;if(G__17589)
{var bit__4050__auto__ = (G__17589.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__17589.cljs$core$ISeqable$))
{return true;
} else
{if((!G__17589.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__17589);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__17589);
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