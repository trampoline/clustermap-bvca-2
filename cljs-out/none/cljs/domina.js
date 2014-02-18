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
var opt_wrapper_17099 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_17100 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_17101 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",new cljs.core.Keyword(null,"default","default",2558708147),"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_17100,table_section_wrapper_17100,opt_wrapper_17099,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_17101,table_section_wrapper_17100,cell_wrapper_17101,opt_wrapper_17099,table_section_wrapper_17100,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_17100]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3394__auto__ = div.firstChild;if(cljs.core.truth_(and__3394__auto__))
{return div.firstChild.childNodes;
} else
{return and__3394__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__17106 = cljs.core.seq.call(null,tbody);var chunk__17107 = null;var count__17108 = 0;var i__17109 = 0;while(true){
if((i__17109 < count__17108))
{var child = cljs.core._nth.call(null,chunk__17107,i__17109);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__17110 = seq__17106;
var G__17111 = chunk__17107;
var G__17112 = count__17108;
var G__17113 = (i__17109 + 1);
seq__17106 = G__17110;
chunk__17107 = G__17111;
count__17108 = G__17112;
i__17109 = G__17113;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__17106);if(temp__4092__auto__)
{var seq__17106__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17106__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__17106__$1);{
var G__17114 = cljs.core.chunk_rest.call(null,seq__17106__$1);
var G__17115 = c__4148__auto__;
var G__17116 = cljs.core.count.call(null,c__4148__auto__);
var G__17117 = 0;
seq__17106 = G__17114;
chunk__17107 = G__17115;
count__17108 = G__17116;
i__17109 = G__17117;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__17106__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__17118 = cljs.core.next.call(null,seq__17106__$1);
var G__17119 = null;
var G__17120 = 0;
var G__17121 = 0;
seq__17106 = G__17118;
chunk__17107 = G__17119;
count__17108 = G__17120;
i__17109 = G__17121;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__17123 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__17123,0,null);var start_wrap = cljs.core.nth.call(null,vec__17123,1,null);var end_wrap = cljs.core.nth.call(null,vec__17123,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__17124 = wrapper.lastChild;
var G__17125 = (level - 1);
wrapper = G__17124;
level = G__17125;
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
domina.DomContent = (function (){var obj17127 = {};return obj17127;
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
log_debug.cljs$lang$applyTo = (function (arglist__17128){
var mesg = cljs.core.seq(arglist__17128);
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
log.cljs$lang$applyTo = (function (arglist__17129){
var mesg = cljs.core.seq(arglist__17129);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__17130){
var contents = cljs.core.seq(arglist__17130);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__17131_SHARP_){return p1__17131_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__17132_SHARP_,p2__17133_SHARP_){return goog.dom.insertChildAt(p1__17132_SHARP_,p2__17133_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__17135_SHARP_,p2__17134_SHARP_){return goog.dom.insertSiblingBefore(p2__17134_SHARP_,p1__17135_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__17137_SHARP_,p2__17136_SHARP_){return goog.dom.insertSiblingAfter(p2__17136_SHARP_,p1__17137_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__17139_SHARP_,p2__17138_SHARP_){return goog.dom.replaceNode(p2__17138_SHARP_,p1__17139_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__17144_17148 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17145_17149 = null;var count__17146_17150 = 0;var i__17147_17151 = 0;while(true){
if((i__17147_17151 < count__17146_17150))
{var n_17152 = cljs.core._nth.call(null,chunk__17145_17149,i__17147_17151);goog.style.setStyle(n_17152,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__17153 = seq__17144_17148;
var G__17154 = chunk__17145_17149;
var G__17155 = count__17146_17150;
var G__17156 = (i__17147_17151 + 1);
seq__17144_17148 = G__17153;
chunk__17145_17149 = G__17154;
count__17146_17150 = G__17155;
i__17147_17151 = G__17156;
continue;
}
} else
{var temp__4092__auto___17157 = cljs.core.seq.call(null,seq__17144_17148);if(temp__4092__auto___17157)
{var seq__17144_17158__$1 = temp__4092__auto___17157;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17144_17158__$1))
{var c__4148__auto___17159 = cljs.core.chunk_first.call(null,seq__17144_17158__$1);{
var G__17160 = cljs.core.chunk_rest.call(null,seq__17144_17158__$1);
var G__17161 = c__4148__auto___17159;
var G__17162 = cljs.core.count.call(null,c__4148__auto___17159);
var G__17163 = 0;
seq__17144_17148 = G__17160;
chunk__17145_17149 = G__17161;
count__17146_17150 = G__17162;
i__17147_17151 = G__17163;
continue;
}
} else
{var n_17164 = cljs.core.first.call(null,seq__17144_17158__$1);goog.style.setStyle(n_17164,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__17165 = cljs.core.next.call(null,seq__17144_17158__$1);
var G__17166 = null;
var G__17167 = 0;
var G__17168 = 0;
seq__17144_17148 = G__17165;
chunk__17145_17149 = G__17166;
count__17146_17150 = G__17167;
i__17147_17151 = G__17168;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__17169){
var content = cljs.core.first(arglist__17169);
arglist__17169 = cljs.core.next(arglist__17169);
var name = cljs.core.first(arglist__17169);
var value = cljs.core.rest(arglist__17169);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__17174_17178 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17175_17179 = null;var count__17176_17180 = 0;var i__17177_17181 = 0;while(true){
if((i__17177_17181 < count__17176_17180))
{var n_17182 = cljs.core._nth.call(null,chunk__17175_17179,i__17177_17181);n_17182.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__17183 = seq__17174_17178;
var G__17184 = chunk__17175_17179;
var G__17185 = count__17176_17180;
var G__17186 = (i__17177_17181 + 1);
seq__17174_17178 = G__17183;
chunk__17175_17179 = G__17184;
count__17176_17180 = G__17185;
i__17177_17181 = G__17186;
continue;
}
} else
{var temp__4092__auto___17187 = cljs.core.seq.call(null,seq__17174_17178);if(temp__4092__auto___17187)
{var seq__17174_17188__$1 = temp__4092__auto___17187;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17174_17188__$1))
{var c__4148__auto___17189 = cljs.core.chunk_first.call(null,seq__17174_17188__$1);{
var G__17190 = cljs.core.chunk_rest.call(null,seq__17174_17188__$1);
var G__17191 = c__4148__auto___17189;
var G__17192 = cljs.core.count.call(null,c__4148__auto___17189);
var G__17193 = 0;
seq__17174_17178 = G__17190;
chunk__17175_17179 = G__17191;
count__17176_17180 = G__17192;
i__17177_17181 = G__17193;
continue;
}
} else
{var n_17194 = cljs.core.first.call(null,seq__17174_17188__$1);n_17194.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__17195 = cljs.core.next.call(null,seq__17174_17188__$1);
var G__17196 = null;
var G__17197 = 0;
var G__17198 = 0;
seq__17174_17178 = G__17195;
chunk__17175_17179 = G__17196;
count__17176_17180 = G__17197;
i__17177_17181 = G__17198;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__17199){
var content = cljs.core.first(arglist__17199);
arglist__17199 = cljs.core.next(arglist__17199);
var name = cljs.core.first(arglist__17199);
var value = cljs.core.rest(arglist__17199);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__17204_17208 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17205_17209 = null;var count__17206_17210 = 0;var i__17207_17211 = 0;while(true){
if((i__17207_17211 < count__17206_17210))
{var n_17212 = cljs.core._nth.call(null,chunk__17205_17209,i__17207_17211);n_17212.removeAttribute(cljs.core.name.call(null,name));
{
var G__17213 = seq__17204_17208;
var G__17214 = chunk__17205_17209;
var G__17215 = count__17206_17210;
var G__17216 = (i__17207_17211 + 1);
seq__17204_17208 = G__17213;
chunk__17205_17209 = G__17214;
count__17206_17210 = G__17215;
i__17207_17211 = G__17216;
continue;
}
} else
{var temp__4092__auto___17217 = cljs.core.seq.call(null,seq__17204_17208);if(temp__4092__auto___17217)
{var seq__17204_17218__$1 = temp__4092__auto___17217;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17204_17218__$1))
{var c__4148__auto___17219 = cljs.core.chunk_first.call(null,seq__17204_17218__$1);{
var G__17220 = cljs.core.chunk_rest.call(null,seq__17204_17218__$1);
var G__17221 = c__4148__auto___17219;
var G__17222 = cljs.core.count.call(null,c__4148__auto___17219);
var G__17223 = 0;
seq__17204_17208 = G__17220;
chunk__17205_17209 = G__17221;
count__17206_17210 = G__17222;
i__17207_17211 = G__17223;
continue;
}
} else
{var n_17224 = cljs.core.first.call(null,seq__17204_17218__$1);n_17224.removeAttribute(cljs.core.name.call(null,name));
{
var G__17225 = cljs.core.next.call(null,seq__17204_17218__$1);
var G__17226 = null;
var G__17227 = 0;
var G__17228 = 0;
seq__17204_17208 = G__17225;
chunk__17205_17209 = G__17226;
count__17206_17210 = G__17227;
i__17207_17211 = G__17228;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__17230 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__17230,0,null);var v = cljs.core.nth.call(null,vec__17230,1,null);if(cljs.core.truth_((function (){var and__3394__auto__ = k;if(cljs.core.truth_(and__3394__auto__))
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
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__17231_SHARP_){var attr = attrs__$1.item(p1__17231_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__17238_17244 = cljs.core.seq.call(null,styles);var chunk__17239_17245 = null;var count__17240_17246 = 0;var i__17241_17247 = 0;while(true){
if((i__17241_17247 < count__17240_17246))
{var vec__17242_17248 = cljs.core._nth.call(null,chunk__17239_17245,i__17241_17247);var name_17249 = cljs.core.nth.call(null,vec__17242_17248,0,null);var value_17250 = cljs.core.nth.call(null,vec__17242_17248,1,null);domina.set_style_BANG_.call(null,content,name_17249,value_17250);
{
var G__17251 = seq__17238_17244;
var G__17252 = chunk__17239_17245;
var G__17253 = count__17240_17246;
var G__17254 = (i__17241_17247 + 1);
seq__17238_17244 = G__17251;
chunk__17239_17245 = G__17252;
count__17240_17246 = G__17253;
i__17241_17247 = G__17254;
continue;
}
} else
{var temp__4092__auto___17255 = cljs.core.seq.call(null,seq__17238_17244);if(temp__4092__auto___17255)
{var seq__17238_17256__$1 = temp__4092__auto___17255;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17238_17256__$1))
{var c__4148__auto___17257 = cljs.core.chunk_first.call(null,seq__17238_17256__$1);{
var G__17258 = cljs.core.chunk_rest.call(null,seq__17238_17256__$1);
var G__17259 = c__4148__auto___17257;
var G__17260 = cljs.core.count.call(null,c__4148__auto___17257);
var G__17261 = 0;
seq__17238_17244 = G__17258;
chunk__17239_17245 = G__17259;
count__17240_17246 = G__17260;
i__17241_17247 = G__17261;
continue;
}
} else
{var vec__17243_17262 = cljs.core.first.call(null,seq__17238_17256__$1);var name_17263 = cljs.core.nth.call(null,vec__17243_17262,0,null);var value_17264 = cljs.core.nth.call(null,vec__17243_17262,1,null);domina.set_style_BANG_.call(null,content,name_17263,value_17264);
{
var G__17265 = cljs.core.next.call(null,seq__17238_17256__$1);
var G__17266 = null;
var G__17267 = 0;
var G__17268 = 0;
seq__17238_17244 = G__17265;
chunk__17239_17245 = G__17266;
count__17240_17246 = G__17267;
i__17241_17247 = G__17268;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__17275_17281 = cljs.core.seq.call(null,attrs);var chunk__17276_17282 = null;var count__17277_17283 = 0;var i__17278_17284 = 0;while(true){
if((i__17278_17284 < count__17277_17283))
{var vec__17279_17285 = cljs.core._nth.call(null,chunk__17276_17282,i__17278_17284);var name_17286 = cljs.core.nth.call(null,vec__17279_17285,0,null);var value_17287 = cljs.core.nth.call(null,vec__17279_17285,1,null);domina.set_attr_BANG_.call(null,content,name_17286,value_17287);
{
var G__17288 = seq__17275_17281;
var G__17289 = chunk__17276_17282;
var G__17290 = count__17277_17283;
var G__17291 = (i__17278_17284 + 1);
seq__17275_17281 = G__17288;
chunk__17276_17282 = G__17289;
count__17277_17283 = G__17290;
i__17278_17284 = G__17291;
continue;
}
} else
{var temp__4092__auto___17292 = cljs.core.seq.call(null,seq__17275_17281);if(temp__4092__auto___17292)
{var seq__17275_17293__$1 = temp__4092__auto___17292;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17275_17293__$1))
{var c__4148__auto___17294 = cljs.core.chunk_first.call(null,seq__17275_17293__$1);{
var G__17295 = cljs.core.chunk_rest.call(null,seq__17275_17293__$1);
var G__17296 = c__4148__auto___17294;
var G__17297 = cljs.core.count.call(null,c__4148__auto___17294);
var G__17298 = 0;
seq__17275_17281 = G__17295;
chunk__17276_17282 = G__17296;
count__17277_17283 = G__17297;
i__17278_17284 = G__17298;
continue;
}
} else
{var vec__17280_17299 = cljs.core.first.call(null,seq__17275_17293__$1);var name_17300 = cljs.core.nth.call(null,vec__17280_17299,0,null);var value_17301 = cljs.core.nth.call(null,vec__17280_17299,1,null);domina.set_attr_BANG_.call(null,content,name_17300,value_17301);
{
var G__17302 = cljs.core.next.call(null,seq__17275_17293__$1);
var G__17303 = null;
var G__17304 = 0;
var G__17305 = 0;
seq__17275_17281 = G__17302;
chunk__17276_17282 = G__17303;
count__17277_17283 = G__17304;
i__17278_17284 = G__17305;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__17310_17314 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17311_17315 = null;var count__17312_17316 = 0;var i__17313_17317 = 0;while(true){
if((i__17313_17317 < count__17312_17316))
{var node_17318 = cljs.core._nth.call(null,chunk__17311_17315,i__17313_17317);goog.dom.classes.add(node_17318,class$);
{
var G__17319 = seq__17310_17314;
var G__17320 = chunk__17311_17315;
var G__17321 = count__17312_17316;
var G__17322 = (i__17313_17317 + 1);
seq__17310_17314 = G__17319;
chunk__17311_17315 = G__17320;
count__17312_17316 = G__17321;
i__17313_17317 = G__17322;
continue;
}
} else
{var temp__4092__auto___17323 = cljs.core.seq.call(null,seq__17310_17314);if(temp__4092__auto___17323)
{var seq__17310_17324__$1 = temp__4092__auto___17323;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17310_17324__$1))
{var c__4148__auto___17325 = cljs.core.chunk_first.call(null,seq__17310_17324__$1);{
var G__17326 = cljs.core.chunk_rest.call(null,seq__17310_17324__$1);
var G__17327 = c__4148__auto___17325;
var G__17328 = cljs.core.count.call(null,c__4148__auto___17325);
var G__17329 = 0;
seq__17310_17314 = G__17326;
chunk__17311_17315 = G__17327;
count__17312_17316 = G__17328;
i__17313_17317 = G__17329;
continue;
}
} else
{var node_17330 = cljs.core.first.call(null,seq__17310_17324__$1);goog.dom.classes.add(node_17330,class$);
{
var G__17331 = cljs.core.next.call(null,seq__17310_17324__$1);
var G__17332 = null;
var G__17333 = 0;
var G__17334 = 0;
seq__17310_17314 = G__17331;
chunk__17311_17315 = G__17332;
count__17312_17316 = G__17333;
i__17313_17317 = G__17334;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__17339_17343 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17340_17344 = null;var count__17341_17345 = 0;var i__17342_17346 = 0;while(true){
if((i__17342_17346 < count__17341_17345))
{var node_17347 = cljs.core._nth.call(null,chunk__17340_17344,i__17342_17346);goog.dom.classes.remove(node_17347,class$);
{
var G__17348 = seq__17339_17343;
var G__17349 = chunk__17340_17344;
var G__17350 = count__17341_17345;
var G__17351 = (i__17342_17346 + 1);
seq__17339_17343 = G__17348;
chunk__17340_17344 = G__17349;
count__17341_17345 = G__17350;
i__17342_17346 = G__17351;
continue;
}
} else
{var temp__4092__auto___17352 = cljs.core.seq.call(null,seq__17339_17343);if(temp__4092__auto___17352)
{var seq__17339_17353__$1 = temp__4092__auto___17352;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17339_17353__$1))
{var c__4148__auto___17354 = cljs.core.chunk_first.call(null,seq__17339_17353__$1);{
var G__17355 = cljs.core.chunk_rest.call(null,seq__17339_17353__$1);
var G__17356 = c__4148__auto___17354;
var G__17357 = cljs.core.count.call(null,c__4148__auto___17354);
var G__17358 = 0;
seq__17339_17343 = G__17355;
chunk__17340_17344 = G__17356;
count__17341_17345 = G__17357;
i__17342_17346 = G__17358;
continue;
}
} else
{var node_17359 = cljs.core.first.call(null,seq__17339_17353__$1);goog.dom.classes.remove(node_17359,class$);
{
var G__17360 = cljs.core.next.call(null,seq__17339_17353__$1);
var G__17361 = null;
var G__17362 = 0;
var G__17363 = 0;
seq__17339_17343 = G__17360;
chunk__17340_17344 = G__17361;
count__17341_17345 = G__17362;
i__17342_17346 = G__17363;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__17368_17372 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17369_17373 = null;var count__17370_17374 = 0;var i__17371_17375 = 0;while(true){
if((i__17371_17375 < count__17370_17374))
{var node_17376 = cljs.core._nth.call(null,chunk__17369_17373,i__17371_17375);goog.dom.classes.toggle(node_17376,class$);
{
var G__17377 = seq__17368_17372;
var G__17378 = chunk__17369_17373;
var G__17379 = count__17370_17374;
var G__17380 = (i__17371_17375 + 1);
seq__17368_17372 = G__17377;
chunk__17369_17373 = G__17378;
count__17370_17374 = G__17379;
i__17371_17375 = G__17380;
continue;
}
} else
{var temp__4092__auto___17381 = cljs.core.seq.call(null,seq__17368_17372);if(temp__4092__auto___17381)
{var seq__17368_17382__$1 = temp__4092__auto___17381;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17368_17382__$1))
{var c__4148__auto___17383 = cljs.core.chunk_first.call(null,seq__17368_17382__$1);{
var G__17384 = cljs.core.chunk_rest.call(null,seq__17368_17382__$1);
var G__17385 = c__4148__auto___17383;
var G__17386 = cljs.core.count.call(null,c__4148__auto___17383);
var G__17387 = 0;
seq__17368_17372 = G__17384;
chunk__17369_17373 = G__17385;
count__17370_17374 = G__17386;
i__17371_17375 = G__17387;
continue;
}
} else
{var node_17388 = cljs.core.first.call(null,seq__17368_17382__$1);goog.dom.classes.toggle(node_17388,class$);
{
var G__17389 = cljs.core.next.call(null,seq__17368_17382__$1);
var G__17390 = null;
var G__17391 = 0;
var G__17392 = 0;
seq__17368_17372 = G__17389;
chunk__17369_17373 = G__17390;
count__17370_17374 = G__17391;
i__17371_17375 = G__17392;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_17401__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__17397_17402 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17398_17403 = null;var count__17399_17404 = 0;var i__17400_17405 = 0;while(true){
if((i__17400_17405 < count__17399_17404))
{var node_17406 = cljs.core._nth.call(null,chunk__17398_17403,i__17400_17405);goog.dom.classes.set(node_17406,classes_17401__$1);
{
var G__17407 = seq__17397_17402;
var G__17408 = chunk__17398_17403;
var G__17409 = count__17399_17404;
var G__17410 = (i__17400_17405 + 1);
seq__17397_17402 = G__17407;
chunk__17398_17403 = G__17408;
count__17399_17404 = G__17409;
i__17400_17405 = G__17410;
continue;
}
} else
{var temp__4092__auto___17411 = cljs.core.seq.call(null,seq__17397_17402);if(temp__4092__auto___17411)
{var seq__17397_17412__$1 = temp__4092__auto___17411;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17397_17412__$1))
{var c__4148__auto___17413 = cljs.core.chunk_first.call(null,seq__17397_17412__$1);{
var G__17414 = cljs.core.chunk_rest.call(null,seq__17397_17412__$1);
var G__17415 = c__4148__auto___17413;
var G__17416 = cljs.core.count.call(null,c__4148__auto___17413);
var G__17417 = 0;
seq__17397_17402 = G__17414;
chunk__17398_17403 = G__17415;
count__17399_17404 = G__17416;
i__17400_17405 = G__17417;
continue;
}
} else
{var node_17418 = cljs.core.first.call(null,seq__17397_17412__$1);goog.dom.classes.set(node_17418,classes_17401__$1);
{
var G__17419 = cljs.core.next.call(null,seq__17397_17412__$1);
var G__17420 = null;
var G__17421 = 0;
var G__17422 = 0;
seq__17397_17402 = G__17419;
chunk__17398_17403 = G__17420;
count__17399_17404 = G__17421;
i__17400_17405 = G__17422;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__17427_17431 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17428_17432 = null;var count__17429_17433 = 0;var i__17430_17434 = 0;while(true){
if((i__17430_17434 < count__17429_17433))
{var node_17435 = cljs.core._nth.call(null,chunk__17428_17432,i__17430_17434);goog.dom.setTextContent(node_17435,value);
{
var G__17436 = seq__17427_17431;
var G__17437 = chunk__17428_17432;
var G__17438 = count__17429_17433;
var G__17439 = (i__17430_17434 + 1);
seq__17427_17431 = G__17436;
chunk__17428_17432 = G__17437;
count__17429_17433 = G__17438;
i__17430_17434 = G__17439;
continue;
}
} else
{var temp__4092__auto___17440 = cljs.core.seq.call(null,seq__17427_17431);if(temp__4092__auto___17440)
{var seq__17427_17441__$1 = temp__4092__auto___17440;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17427_17441__$1))
{var c__4148__auto___17442 = cljs.core.chunk_first.call(null,seq__17427_17441__$1);{
var G__17443 = cljs.core.chunk_rest.call(null,seq__17427_17441__$1);
var G__17444 = c__4148__auto___17442;
var G__17445 = cljs.core.count.call(null,c__4148__auto___17442);
var G__17446 = 0;
seq__17427_17431 = G__17443;
chunk__17428_17432 = G__17444;
count__17429_17433 = G__17445;
i__17430_17434 = G__17446;
continue;
}
} else
{var node_17447 = cljs.core.first.call(null,seq__17427_17441__$1);goog.dom.setTextContent(node_17447,value);
{
var G__17448 = cljs.core.next.call(null,seq__17427_17441__$1);
var G__17449 = null;
var G__17450 = 0;
var G__17451 = 0;
seq__17427_17431 = G__17448;
chunk__17428_17432 = G__17449;
count__17429_17433 = G__17450;
i__17430_17434 = G__17451;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__17456_17460 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17457_17461 = null;var count__17458_17462 = 0;var i__17459_17463 = 0;while(true){
if((i__17459_17463 < count__17458_17462))
{var node_17464 = cljs.core._nth.call(null,chunk__17457_17461,i__17459_17463);goog.dom.forms.setValue(node_17464,value);
{
var G__17465 = seq__17456_17460;
var G__17466 = chunk__17457_17461;
var G__17467 = count__17458_17462;
var G__17468 = (i__17459_17463 + 1);
seq__17456_17460 = G__17465;
chunk__17457_17461 = G__17466;
count__17458_17462 = G__17467;
i__17459_17463 = G__17468;
continue;
}
} else
{var temp__4092__auto___17469 = cljs.core.seq.call(null,seq__17456_17460);if(temp__4092__auto___17469)
{var seq__17456_17470__$1 = temp__4092__auto___17469;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17456_17470__$1))
{var c__4148__auto___17471 = cljs.core.chunk_first.call(null,seq__17456_17470__$1);{
var G__17472 = cljs.core.chunk_rest.call(null,seq__17456_17470__$1);
var G__17473 = c__4148__auto___17471;
var G__17474 = cljs.core.count.call(null,c__4148__auto___17471);
var G__17475 = 0;
seq__17456_17460 = G__17472;
chunk__17457_17461 = G__17473;
count__17458_17462 = G__17474;
i__17459_17463 = G__17475;
continue;
}
} else
{var node_17476 = cljs.core.first.call(null,seq__17456_17470__$1);goog.dom.forms.setValue(node_17476,value);
{
var G__17477 = cljs.core.next.call(null,seq__17456_17470__$1);
var G__17478 = null;
var G__17479 = 0;
var G__17480 = 0;
seq__17456_17460 = G__17477;
chunk__17457_17461 = G__17478;
count__17458_17462 = G__17479;
i__17459_17463 = G__17480;
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
{var value_17491 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__17487_17492 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17488_17493 = null;var count__17489_17494 = 0;var i__17490_17495 = 0;while(true){
if((i__17490_17495 < count__17489_17494))
{var node_17496 = cljs.core._nth.call(null,chunk__17488_17493,i__17490_17495);node_17496.innerHTML = value_17491;
{
var G__17497 = seq__17487_17492;
var G__17498 = chunk__17488_17493;
var G__17499 = count__17489_17494;
var G__17500 = (i__17490_17495 + 1);
seq__17487_17492 = G__17497;
chunk__17488_17493 = G__17498;
count__17489_17494 = G__17499;
i__17490_17495 = G__17500;
continue;
}
} else
{var temp__4092__auto___17501 = cljs.core.seq.call(null,seq__17487_17492);if(temp__4092__auto___17501)
{var seq__17487_17502__$1 = temp__4092__auto___17501;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17487_17502__$1))
{var c__4148__auto___17503 = cljs.core.chunk_first.call(null,seq__17487_17502__$1);{
var G__17504 = cljs.core.chunk_rest.call(null,seq__17487_17502__$1);
var G__17505 = c__4148__auto___17503;
var G__17506 = cljs.core.count.call(null,c__4148__auto___17503);
var G__17507 = 0;
seq__17487_17492 = G__17504;
chunk__17488_17493 = G__17505;
count__17489_17494 = G__17506;
i__17490_17495 = G__17507;
continue;
}
} else
{var node_17508 = cljs.core.first.call(null,seq__17487_17502__$1);node_17508.innerHTML = value_17491;
{
var G__17509 = cljs.core.next.call(null,seq__17487_17502__$1);
var G__17510 = null;
var G__17511 = 0;
var G__17512 = 0;
seq__17487_17492 = G__17509;
chunk__17488_17493 = G__17510;
count__17489_17494 = G__17511;
i__17490_17495 = G__17512;
continue;
}
}
} else
{}
}
break;
}
}catch (e17486){if((e17486 instanceof Error))
{var e_17513 = e17486;domina.replace_children_BANG_.call(null,content,value_17491);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17486;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__17520_17524 = cljs.core.seq.call(null,children);var chunk__17521_17525 = null;var count__17522_17526 = 0;var i__17523_17527 = 0;while(true){
if((i__17523_17527 < count__17522_17526))
{var child_17528 = cljs.core._nth.call(null,chunk__17521_17525,i__17523_17527);frag.appendChild(child_17528);
{
var G__17529 = seq__17520_17524;
var G__17530 = chunk__17521_17525;
var G__17531 = count__17522_17526;
var G__17532 = (i__17523_17527 + 1);
seq__17520_17524 = G__17529;
chunk__17521_17525 = G__17530;
count__17522_17526 = G__17531;
i__17523_17527 = G__17532;
continue;
}
} else
{var temp__4092__auto___17533 = cljs.core.seq.call(null,seq__17520_17524);if(temp__4092__auto___17533)
{var seq__17520_17534__$1 = temp__4092__auto___17533;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17520_17534__$1))
{var c__4148__auto___17535 = cljs.core.chunk_first.call(null,seq__17520_17534__$1);{
var G__17536 = cljs.core.chunk_rest.call(null,seq__17520_17534__$1);
var G__17537 = c__4148__auto___17535;
var G__17538 = cljs.core.count.call(null,c__4148__auto___17535);
var G__17539 = 0;
seq__17520_17524 = G__17536;
chunk__17521_17525 = G__17537;
count__17522_17526 = G__17538;
i__17523_17527 = G__17539;
continue;
}
} else
{var child_17540 = cljs.core.first.call(null,seq__17520_17534__$1);frag.appendChild(child_17540);
{
var G__17541 = cljs.core.next.call(null,seq__17520_17534__$1);
var G__17542 = null;
var G__17543 = 0;
var G__17544 = 0;
seq__17520_17524 = G__17541;
chunk__17521_17525 = G__17542;
count__17522_17526 = G__17543;
i__17523_17527 = G__17544;
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
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__17514_SHARP_,p2__17515_SHARP_){return f.call(null,p1__17514_SHARP_,p2__17515_SHARP_);
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
{if((function (){var G__17546 = list_thing;if(G__17546)
{var bit__4050__auto__ = (G__17546.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__17546.cljs$core$ISeqable$))
{return true;
} else
{if((!G__17546.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__17546);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__17546);
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
{if((function (){var G__17547 = content;if(G__17547)
{var bit__4050__auto__ = (G__17547.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__17547.cljs$core$ISeqable$))
{return true;
} else
{if((!G__17547.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__17547);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__17547);
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
{if((function (){var G__17548 = content;if(G__17548)
{var bit__4050__auto__ = (G__17548.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__17548.cljs$core$ISeqable$))
{return true;
} else
{if((!G__17548.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__17548);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__17548);
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